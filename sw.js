// Service Worker for Trader AI PWA
const CACHE_NAME = 'trader-ai-v1.0.0';
const STATIC_CACHE_NAME = 'trader-ai-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'trader-ai-dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
];

// Dynamic cache patterns
const CACHE_PATTERNS = [
    /.*\.(?:png|jpg|jpeg|svg|gif|webp)$/,
    /.*\.(?:css|js)$/,
    /^https:\/\/fonts\.googleapis\.com/,
    /^https:\/\/fonts\.gstatic\.com/,
    /^https:\/\/images\.unsplash\.com/
];

// Install event - cache static files
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching static files');
                return cache.addAll(STATIC_FILES);
            })
            .then(() => {
                console.log('Service Worker: Static files cached successfully');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('Service Worker: Error caching static files', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
                            console.log('Service Worker: Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker: Activated successfully');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve cached files or fetch from network
self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);
    
    // Skip non-HTTP requests
    if (!event.request.url.startsWith('http')) {
        return;
    }
    
    // Handle different types of requests
    if (event.request.method === 'GET') {
        event.respondWith(handleGetRequest(event.request));
    }
});

// Handle GET requests with caching strategy
async function handleGetRequest(request) {
    const requestUrl = new URL(request.url);
    
    try {
        // Check if request matches cache patterns
        const shouldCache = CACHE_PATTERNS.some(pattern => pattern.test(request.url));
        
        if (shouldCache) {
            return await cacheFirst(request);
        } else if (requestUrl.pathname === '/' || requestUrl.pathname.endsWith('.html')) {
            return await networkFirst(request);
        } else {
            return await staleWhileRevalidate(request);
        }
    } catch (error) {
        console.error('Service Worker: Error handling request', error);
        return await handleOfflineFallback(request);
    }
}

// Cache First Strategy - for static assets
async function cacheFirst(request) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.error('Cache First: Network error', error);
        const cachedResponse = await caches.match(request);
        return cachedResponse || createErrorResponse();
    }
}

// Network First Strategy - for HTML pages
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Network First: Network error', error);
        const cachedResponse = await caches.match(request);
        return cachedResponse || createOfflineResponse();
    }
}

// Stale While Revalidate Strategy - balance between cache and network
async function staleWhileRevalidate(request) {
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    const cachedResponse = await cache.match(request);
    
    const networkPromise = fetch(request)
        .then((networkResponse) => {
            if (networkResponse.ok) {
                cache.put(request, networkResponse.clone());
            }
            return networkResponse;
        })
        .catch(() => null);
    
    return cachedResponse || await networkPromise || createErrorResponse();
}

// Handle offline fallback
async function handleOfflineFallback(request) {
    if (request.destination === 'document') {
        return createOfflineResponse();
    } else if (request.destination === 'image') {
        return createOfflineImageResponse();
    }
    
    return createErrorResponse();
}

// Create offline HTML response
function createOfflineResponse() {
    const offlineHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Trader AI - Offline</title>
            <style>
                body {
                    font-family: 'Inter', sans-serif;
                    background: #0f0f23;
                    color: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                    text-align: center;
                }
                .offline-content {
                    max-width: 400px;
                    padding: 40px;
                }
                .offline-icon {
                    font-size: 4rem;
                    margin-bottom: 20px;
                }
                h1 {
                    color: #00f5ff;
                    margin-bottom: 20px;
                }
                p {
                    color: #b0b0b0;
                    line-height: 1.6;
                    margin-bottom: 30px;
                }
                .retry-btn {
                    background: linear-gradient(135deg, #00f5ff 0%, #0066ff 100%);
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 25px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                }
            </style>
        </head>
        <body>
            <div class="offline-content">
                <div class="offline-icon">📱</div>
                <h1>You're Offline</h1>
                <p>Trader AI needs an internet connection to show you the latest trading data and opportunities.</p>
                <button class="retry-btn" onclick="window.location.reload()">Try Again</button>
            </div>
        </body>
        </html>
    `;
    
    return new Response(offlineHtml, {
        status: 200,
        headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'no-store'
        }
    });
}

// Create offline image response
function createOfflineImageResponse() {
    // Return a simple SVG placeholder
    const offlineSvg = `
        <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="200" fill="#16213e"/>
            <text x="200" y="100" text-anchor="middle" fill="#b0b0b0" font-family="Arial" font-size="16">
                Image unavailable offline
            </text>
        </svg>
    `;
    
    return new Response(offlineSvg, {
        status: 200,
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'no-store'
        }
    });
}

// Create generic error response
function createErrorResponse() {
    return new Response('Service Unavailable', {
        status: 503,
        headers: {
            'Content-Type': 'text/plain'
        }
    });
}

// Background sync for future features
self.addEventListener('sync', (event) => {
    console.log('Service Worker: Background sync triggered');
    
    if (event.tag === 'background-sync') {
        event.waitUntil(handleBackgroundSync());
    }
});

// Handle background sync
async function handleBackgroundSync() {
    console.log('Service Worker: Performing background sync');
    
    try {
        // Sync any pending data when online
        // This could include queued trading actions, user preferences, etc.
        const pendingRequests = await getPendingRequests();
        
        for (const request of pendingRequests) {
            await processPendingRequest(request);
        }
        
        console.log('Service Worker: Background sync completed');
    } catch (error) {
        console.error('Service Worker: Background sync failed', error);
    }
}

// Get pending requests from IndexedDB
async function getPendingRequests() {
    // Implementation would depend on your data storage strategy
    // For now, return empty array
    return [];
}

// Process pending request
async function processPendingRequest(request) {
    // Implementation for processing queued requests
    console.log('Processing pending request:', request);
}

// Push notification handling
self.addEventListener('push', (event) => {
    console.log('Service Worker: Push notification received');
    
    const options = {
        body: 'New trading opportunity available!',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'View Signal',
                icon: '/icons/action-explore.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/icons/action-close.png'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('Trader AI', options)
    );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
    console.log('Service Worker: Notification clicked');
    
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/?utm_source=push_notification')
        );
    }
});

// Message handling from main app
self.addEventListener('message', (event) => {
    console.log('Service Worker: Message received', event.data);
    
    if (event.data && event.data.type) {
        switch (event.data.type) {
            case 'SKIP_WAITING':
                self.skipWaiting();
                break;
            case 'CACHE_UPDATE':
                updateCache();
                break;
            case 'GET_VERSION':
                event.ports[0].postMessage({ version: CACHE_NAME });
                break;
        }
    }
});

// Update cache manually
async function updateCache() {
    console.log('Service Worker: Updating cache...');
    
    try {
        const cache = await caches.open(STATIC_CACHE_NAME);
        await cache.addAll(STATIC_FILES);
        console.log('Service Worker: Cache updated successfully');
    } catch (error) {
        console.error('Service Worker: Cache update failed', error);
    }
}

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'content-sync') {
        event.waitUntil(handlePeriodicSync());
    }
});

// Handle periodic sync
async function handlePeriodicSync() {
    console.log('Service Worker: Periodic sync triggered');
    
    try {
        // Update cached content periodically
        await updateCache();
        console.log('Service Worker: Periodic sync completed');
    } catch (error) {
        console.error('Service Worker: Periodic sync failed', error);
    }
}

console.log('Service Worker: Loaded successfully'); 