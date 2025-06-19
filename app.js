// PWA Installation and Service Worker Registration
let deferredPrompt;
let installButton;
let addToHomeButton;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    registerServiceWorker();
    setupInstallHandlers();
    setupInteractionAnimations();
    setupScrollAnimations();
});

// Initialize App
function initializeApp() {
    console.log('Trader AI PWA Initialized');
    
    // Get install buttons
    installButton = document.getElementById('installBtn');
    addToHomeButton = document.getElementById('addToHomeBtn');
    
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        handleAppInstalled();
    }
    
    // Setup click handlers
    setupClickHandlers();
}

// Setup Click Handlers
function setupClickHandlers() {
    // Install button handlers
    if (installButton) {
        installButton.addEventListener('click', handleInstallClick);
    }
    
    if (addToHomeButton) {
        addToHomeButton.addEventListener('click', handleAddToHomeClick);
    }
    
    // Final CTA button
    const finalInstallBtn = document.getElementById('installBtnFinal');
    if (finalInstallBtn) {
        finalInstallBtn.addEventListener('click', handleInstallClick);
    }
    
    // Install prompt handlers
    const installConfirm = document.getElementById('installConfirm');
    const installDismiss = document.getElementById('installDismiss');
    
    if (installConfirm) {
        installConfirm.addEventListener('click', confirmInstall);
    }
    
    if (installDismiss) {
        installDismiss.addEventListener('click', dismissInstallPrompt);
    }
}

// Register Service Worker
async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('/sw.js');
            console.log('ServiceWorker registered successfully:', registration);
            
            // Update UI if service worker is ready
            registration.addEventListener('updatefound', () => {
                console.log('New service worker version available');
            });
            
        } catch (error) {
            console.log('ServiceWorker registration failed:', error);
        }
    }
}

// Setup Install Handlers
function setupInstallHandlers() {
    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (event) => {
        console.log('beforeinstallprompt event fired');
        event.preventDefault();
        deferredPrompt = event;
        
        // Show install prompt after a delay
        setTimeout(showInstallPrompt, 3000);
    });
    
    // Listen for app installed event
    window.addEventListener('appinstalled', (event) => {
        console.log('App was installed');
        deferredPrompt = null;
        handleAppInstalled();
    });
}

// Handle Install Button Click
async function handleInstallClick() {
    console.log('Install button clicked');
    
    // Show immediate feedback
    showNotification('Preparing app installation...', 'info');
    
    if (deferredPrompt) {
        // Show the install prompt
        deferredPrompt.prompt();
        
        // Wait for the user's response
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to install prompt: ${outcome}`);
        
        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
            showNotification('App installed successfully! Opening Trader AI...', 'success');
            // Redirect to app after short delay
            setTimeout(() => {
                window.location.href = '/app.html';
            }, 2000);
        } else {
            console.log('User dismissed the install prompt');
            showNotification('Installation cancelled. You can install later from the browser menu.', 'info');
        }
        
        deferredPrompt = null;
    } else {
        // Fallback for browsers that don't support install prompt
        console.log('Browser does not support install prompt, showing instructions');
        showNotification('Install instructions will appear shortly...', 'info');
        setTimeout(() => {
            showInstallInstructions();
        }, 500);
    }
}

// Handle Add to Home Screen Click
function handleAddToHomeClick() {
    console.log('Add to Home button clicked');
    
    if (deferredPrompt) {
        handleInstallClick();
    } else {
        showInstallInstructions();
    }
}

// Show Install Instructions
function showInstallInstructions() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    let instructions = '';
    
    if (isIOS) {
        instructions = 'To install Trader AI:\n\n1. Tap the Share button at the bottom of the screen\n2. Scroll down and tap "Add to Home Screen"\n3. Tap "Add" in the top right corner';
    } else if (isAndroid) {
        instructions = 'To install Trader AI:\n\n1. Tap the menu button (⋮) in your browser\n2. Tap "Add to Home screen" or "Install app"\n3. Tap "Add" or "Install"';
    } else {
        instructions = 'To install Trader AI:\n\n1. Look for the install icon in your browser\'s address bar\n2. Click it and select "Install"\n3. Or use your browser\'s menu to "Install app"';
    }
    
    alert(instructions);
}

// Show Install Prompt
function showInstallPrompt() {
    const prompt = document.getElementById('installPrompt');
    if (prompt && !prompt.classList.contains('hidden')) {
        return; // Already showing
    }
    
    if (prompt) {
        prompt.classList.remove('hidden');
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            if (!prompt.classList.contains('hidden')) {
                dismissInstallPrompt();
            }
        }, 10000);
    }
}

// Confirm Install
async function confirmInstall() {
    if (deferredPrompt) {
        await handleInstallClick();
    }
    dismissInstallPrompt();
}

// Dismiss Install Prompt
function dismissInstallPrompt() {
    const prompt = document.getElementById('installPrompt');
    if (prompt) {
        prompt.classList.add('hidden');
    }
}

// Handle App Installed
function handleAppInstalled() {
    console.log('App is installed - updating UI');
    
    // Update button text
    if (installButton) {
        installButton.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" fill="none"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            </svg>
            App Installed - Open Trader AI
        `;
        installButton.onclick = () => window.location.href = '/';
    }
    
    // Hide install prompt
    dismissInstallPrompt();
}

// Setup Interaction Animations
function setupInteractionAnimations() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.screenshot-mockup, .feature-item, .review-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.cta-primary, .cta-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Setup Scroll Animations
function setupScrollAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.screenshot-item, .feature-item, .review-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--background-card);
        color: var(--text-primary);
        padding: 15px 20px;
        border-radius: 10px;
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow);
        z-index: 1001;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Handle close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.onclick = () => {
        notification.remove();
    };
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Analytics and Tracking
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    
    // Add your analytics tracking here
    // Example: gtag('event', eventName, properties);
    // Example: analytics.track(eventName, properties);
}

// Track install attempts
function trackInstallAttempt() {
    trackEvent('install_attempt', {
        source: 'cta_button',
        timestamp: new Date().toISOString()
    });
}

// Track feature views
function trackFeatureView(feature) {
    trackEvent('feature_viewed', {
        feature: feature,
        timestamp: new Date().toISOString()
    });
}

// Network Status
function setupNetworkStatusHandling() {
    function updateOnlineStatus() {
        const status = navigator.onLine ? 'online' : 'offline';
        console.log('Network status:', status);
        
        if (!navigator.onLine) {
            showNotification('You are currently offline. Some features may not work.', 'warning');
        }
    }
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
}

// Initialize network status handling
setupNetworkStatusHandling();

// Performance monitoring
function setupPerformanceMonitoring() {
    // Log page load time
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log('Page load time:', loadTime.toFixed(2) + 'ms');
        
        trackEvent('page_load', {
            load_time: loadTime,
            user_agent: navigator.userAgent
        });
    });
}

// Initialize performance monitoring
setupPerformanceMonitoring();

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        handleInstallClick,
        showInstallPrompt,
        trackEvent
    };
} 