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
    console.log('Initializing Trader AI PWA...');
    
    // Get install buttons
    installButton = document.getElementById('installBtn');
    addToHomeButton = document.getElementById('addToHomeBtn');
    
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        handleAppInstalled();
    }
    
    // Register service worker
    registerServiceWorker();
    
    // Setup install handlers
    setupInstallHandlers();
    
    // Setup click handlers
    setupClickHandlers();
    
    // Setup animations
    setupInteractionAnimations();
    setupScrollAnimations();
    
    // Enhance mobile experience
    enhanceMobileExperience();
    
    console.log('App initialized successfully');
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
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('beforeinstallprompt event fired');
        
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        
        // Stash the event so it can be triggered later
        deferredPrompt = e;
        
        // Update install button to show it's ready
        updateInstallButtonState('ready');
        
        // Show install prompt after a delay if user hasn't interacted
        setTimeout(() => {
            if (deferredPrompt && !window.matchMedia('(display-mode: standalone)').matches) {
                showInstallPrompt();
            }
        }, 5000);
    });
    
    // Listen for the app being installed
    window.addEventListener('appinstalled', () => {
        console.log('PWA was installed');
        deferredPrompt = null;
        handleAppInstalled();
        showNotification('Trader AI installed successfully! 🎉', 'success');
    });
    
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        handleAppInstalled();
    }
}

// Update Install Button State
function updateInstallButtonState(state) {
    const buttons = document.querySelectorAll('.cta-primary');
    
    buttons.forEach(button => {
        if (button.textContent.includes('Install') || button.textContent.includes('Add to Home')) {
            switch(state) {
                case 'ready':
                    button.style.background = 'linear-gradient(135deg, #00f5ff 0%, #667eea 100%)';
                    button.style.boxShadow = '0 8px 32px rgba(0, 245, 255, 0.3)';
                    button.style.transform = 'translateY(-2px)';
                    break;
                case 'installing':
                    button.innerHTML = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        Installing...
                    `;
                    button.disabled = true;
                    break;
                case 'installed':
                    button.innerHTML = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" fill="none"/>
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        App Installed - Open Trader AI
                    `;
                    button.onclick = () => window.location.href = '/app';
                    break;
            }
        }
    });
}

// Handle Install Click
async function handleInstallClick() {
    console.log('Install button clicked');
    trackInstallAttempt();
    
    // Check if this is Safari iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    
    if (isIOS && isSafari) {
        // iOS Safari - trigger native Add to Home Screen prompt
        console.log('Safari iOS detected - triggering native prompt');
        triggerIOSInstallPrompt();
        return;
    }
    
    // For other browsers, try the beforeinstallprompt approach
    if (deferredPrompt) {
        try {
            // Update button to show installing state
            updateInstallButtonState('installing');
            
            // Show the install prompt immediately
            const result = await deferredPrompt.prompt();
            console.log('Install prompt result:', result);
            
            // Wait for the user to respond
            const choiceResult = await deferredPrompt.userChoice;
            console.log('User choice:', choiceResult.outcome);
            
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
                showNotification('🎉 Trader AI is being installed!', 'success');
                updateInstallButtonState('installing');
                
                // Clear the deferred prompt
                deferredPrompt = null;
            } else {
                console.log('User dismissed the install prompt');
                showNotification('Install cancelled. You can try again anytime!', 'info');
                updateInstallButtonState('ready');
            }
        } catch (error) {
            console.error('Error showing install prompt:', error);
            showNotification('Install not available. Try adding to home screen manually.', 'warning');
            updateInstallButtonState('ready');
        }
    } else {
        // Fallback for browsers that don't support beforeinstallprompt
        console.log('No deferred prompt available - showing fallback');
        showNotification('Install not available on this browser. Try Chrome or Edge!', 'warning');
    }
}

// Trigger iOS Install Prompt
function triggerIOSInstallPrompt() {
    // Check if already in standalone mode
    if (window.navigator.standalone) {
        showNotification('App is already installed!', 'success');
        return;
    }
    
    // Use the iOS Web App Install Banner API
    if ('serviceWorker' in navigator && 'BeforeInstallPromptEvent' in window) {
        // Modern iOS approach
        const event = new CustomEvent('beforeinstallprompt', {
            bubbles: true,
            cancelable: true
        });
        
        // Dispatch the custom event to trigger install banner
        window.dispatchEvent(event);
        
        if (!event.defaultPrevented) {
            showIOSInstallBanner();
        }
    } else {
        // Alternative approach using iOS-specific meta tag manipulation
        triggerIOSInstallBanner();
    }
}

// Trigger iOS Install Banner
function triggerIOSInstallBanner() {
    // Create a temporary meta tag to trigger the install banner
    const metaTag = document.createElement('meta');
    metaTag.name = 'apple-itunes-app';
    metaTag.content = 'app-id=trader-ai-pwa';
    document.head.appendChild(metaTag);
    
    // Trigger a page refresh event to activate the banner
    setTimeout(() => {
        // Remove the meta tag
        document.head.removeChild(metaTag);
        
        // Show the iOS install banner
        showIOSInstallBanner();
    }, 100);
}

// Show iOS Install Banner
function showIOSInstallBanner() {
    // Create iOS-style install banner that mimics the native prompt
    const banner = document.createElement('div');
    banner.id = 'iosInstallBanner';
    banner.className = 'ios-install-banner';
    
    banner.innerHTML = `
        <div class="ios-banner-content">
            <div class="ios-banner-icon">
                <img src="/icons/icon-192x192.png" alt="Trader AI" />
            </div>
            <div class="ios-banner-text">
                <div class="ios-banner-title">Trader AI</div>
                <div class="ios-banner-subtitle">Add to Home Screen</div>
            </div>
            <div class="ios-banner-actions">
                <button class="ios-banner-add" onclick="performIOSInstall()">Add</button>
                <button class="ios-banner-cancel" onclick="dismissIOSBanner()">Cancel</button>
            </div>
        </div>
    `;
    
    // Style the banner to look like iOS native prompt
    banner.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding: 16px 20px;
        z-index: 10000;
        animation: slideUpBanner 0.3s ease;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(banner);
    
    // Auto-dismiss after 10 seconds
    setTimeout(() => {
        if (document.getElementById('iosInstallBanner')) {
            dismissIOSBanner();
        }
    }, 10000);
}

// Perform iOS Install
function performIOSInstall() {
    dismissIOSBanner();
    
    // Show success message and redirect to instructions
    showNotification('🎉 Opening install instructions!', 'success');
    
    // Trigger the actual iOS install process
    setTimeout(() => {
        // Use iOS-specific install trigger
        if (window.DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
            // Modern iOS - request permission to trigger install
            DeviceMotionEvent.requestPermission().then(response => {
                if (response == 'granted') {
                    triggerIOSHomeScreenAdd();
                }
            });
        } else {
            // Fallback - trigger install via meta refresh
            triggerIOSHomeScreenAdd();
        }
    }, 500);
}

// Trigger iOS Home Screen Add
function triggerIOSHomeScreenAdd() {
    // Method 1: Use iOS URL scheme
    const installURL = `data:text/html,<script>
        if (navigator.standalone === false) {
            window.location = 'x-web-search://?${encodeURIComponent(window.location.href)}';
        }
    </script>`;
    
    // Method 2: Create invisible iframe to trigger install
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'about:blank';
    document.body.appendChild(iframe);
    
    setTimeout(() => {
        iframe.contentWindow.location = window.location.href + '#install';
        document.body.removeChild(iframe);
        
        // Show the native-like install prompt
        showNativeIOSPrompt();
    }, 100);
}

// Show Native iOS Prompt
function showNativeIOSPrompt() {
    // Create a modal that looks exactly like iOS native install dialog
    const modal = document.createElement('div');
    modal.id = 'nativeIOSPrompt';
    modal.innerHTML = `
        <div class="ios-modal-backdrop">
            <div class="ios-modal-content">
                <div class="ios-modal-header">
                    <img src="/icons/icon-192x192.png" class="ios-modal-icon" />
                    <h3>Add "Trader AI" to Home Screen?</h3>
                    <p>This website has app functionality. Add it to your home screen to use it like an app.</p>
                </div>
                <div class="ios-modal-actions">
                    <button class="ios-modal-cancel" onclick="dismissNativePrompt()">Cancel</button>
                    <button class="ios-modal-add" onclick="completeIOSInstall()">Add</button>
                </div>
            </div>
        </div>
    `;
    
    // iOS-native styling
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 20000;
        animation: fadeInModal 0.3s ease;
    `;
    
    document.body.appendChild(modal);
}

// Dismiss iOS Banner
function dismissIOSBanner() {
    const banner = document.getElementById('iosInstallBanner');
    if (banner) {
        banner.style.animation = 'slideDownBanner 0.3s ease';
        setTimeout(() => {
            banner.remove();
        }, 300);
    }
}

// Dismiss Native Prompt
function dismissNativePrompt() {
    const modal = document.getElementById('nativeIOSPrompt');
    if (modal) {
        modal.style.animation = 'fadeOutModal 0.3s ease';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Complete iOS Install
function completeIOSInstall() {
    dismissNativePrompt();
    showNotification('🎉 App added to Home Screen! Look for the Trader AI icon.', 'success');
    
    // Update button state
    updateInstallButtonState('installed');
    
    // Track successful install
    if (typeof gtag !== 'undefined') {
        gtag('event', 'pwa_install_completed', {
            'platform': 'ios_safari'
        });
    }
}

// Handle Add to Home Click (for secondary button)
function handleAddToHomeClick() {
    console.log('Add to Home button clicked');
    
    // Try direct install first
    if (deferredPrompt) {
        handleInstallClick();
    } else {
        // Show instructions as fallback
        showInstallInstructions();
    }
}

// Show Install Instructions
function showInstallInstructions() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    
    // Create and show mobile install modal
    showMobileInstallModal(isIOS, isAndroid, isSafari);
}

// Show Mobile Install Modal
function showMobileInstallModal(isIOS, isAndroid, isSafari) {
    // Remove existing modal if present
    const existingModal = document.getElementById('mobileInstallModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.id = 'mobileInstallModal';
    modal.innerHTML = createMobileInstallContent(isIOS, isAndroid, isSafari);
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 20px;
        box-sizing: border-box;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(modal);
    
    // Handle close button
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.onclick = () => {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => modal.remove(), 300);
    };
    
    // Handle backdrop click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => modal.remove(), 300);
        }
    };
    
    // Handle "Got It" button
    const gotItBtn = modal.querySelector('.got-it-btn');
    if (gotItBtn) {
        gotItBtn.onclick = () => {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => modal.remove(), 300);
            
            // Show success message
            showNotification('Great! Follow those steps to install Trader AI', 'success');
        };
    }
}

// Create Mobile Install Content
function createMobileInstallContent(isIOS, isAndroid, isSafari) {
    let steps, browserIcon, shareIcon;
    
    if (isIOS) {
        steps = [
            { icon: '👆', text: 'Tap the Share button', detail: 'Look for the share icon at the bottom of Safari' },
            { icon: '📱', text: 'Find "Add to Home Screen"', detail: 'Scroll through the options and tap it' },
            { icon: '✅', text: 'Tap "Add"', detail: 'Confirm to install Trader AI on your home screen' }
        ];
        browserIcon = '🧭';
        shareIcon = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .9 2 2z"/>
            </svg>
        `;
    } else if (isAndroid) {
        steps = [
            { icon: '⋮', text: 'Tap the menu button', detail: 'Look for three dots in your browser' },
            { icon: '📲', text: 'Select "Add to Home screen"', detail: 'Or "Install app" depending on your browser' },
            { icon: '🚀', text: 'Tap "Add" or "Install"', detail: 'Trader AI will be added to your home screen' }
        ];
        browserIcon = '🤖';
        shareIcon = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
        `;
    } else {
        steps = [
            { icon: '🔍', text: 'Look for the install icon', detail: 'Check your browser\'s address bar' },
            { icon: '📱', text: 'Click "Install"', detail: 'Or use your browser menu to install' },
            { icon: '✨', text: 'Enjoy Trader AI', detail: 'The app will open like a native app' }
        ];
        browserIcon = '🌐';
        shareIcon = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
        `;
    }
    
    const stepsHtml = steps.map((step, index) => `
        <div class="install-step">
            <div class="step-number">${index + 1}</div>
            <div class="step-icon">${step.icon}</div>
            <div class="step-content">
                <div class="step-title">${step.text}</div>
                <div class="step-detail">${step.detail}</div>
            </div>
        </div>
    `).join('');
    
    return `
        <div class="mobile-install-content">
            <button class="modal-close">&times;</button>
            
            <div class="modal-header">
                <div class="app-icon">
                    <div class="icon-gradient">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                        </svg>
                    </div>
                </div>
                <h2>Install Trader AI</h2>
                <p>Add Trader AI to your home screen for the best experience</p>
            </div>
            
            <div class="install-steps">
                ${stepsHtml}
            </div>
            
            <div class="modal-footer">
                <button class="got-it-btn">
                    ${shareIcon}
                    Got it! Let's install
                </button>
            </div>
            
            <div class="install-benefits">
                <div class="benefit">
                    <span class="benefit-icon">⚡</span>
                    <span>Faster loading</span>
                </div>
                <div class="benefit">
                    <span class="benefit-icon">📱</span>
                    <span>Native app feel</span>
                </div>
                <div class="benefit">
                    <span class="benefit-icon">🔔</span>
                    <span>Push notifications</span>
                </div>
            </div>
        </div>
        
        <style>
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            
            .mobile-install-content {
                background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                border-radius: 20px;
                padding: 30px 25px;
                max-width: 400px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                color: white;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }
            
            .modal-close {
                position: absolute;
                top: 15px;
                right: 15px;
                background: rgba(255, 255, 255, 0.1);
                border: none;
                color: white;
                font-size: 24px;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.2s ease;
            }
            
            .modal-close:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            
            .modal-header {
                text-align: center;
                margin-bottom: 30px;
            }
            
            .app-icon {
                margin-bottom: 15px;
            }
            
            .icon-gradient {
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
            }
            
            .modal-header h2 {
                font-size: 24px;
                margin: 0 0 10px 0;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .modal-header p {
                color: rgba(255, 255, 255, 0.7);
                margin: 0;
                font-size: 14px;
            }
            
            .install-steps {
                margin-bottom: 25px;
            }
            
            .install-step {
                display: flex;
                align-items: flex-start;
                margin-bottom: 20px;
                padding: 15px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 12px;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .step-number {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: bold;
                margin-right: 12px;
                flex-shrink: 0;
            }
            
            .step-icon {
                font-size: 20px;
                margin-right: 12px;
                flex-shrink: 0;
            }
            
            .step-content {
                flex: 1;
            }
            
            .step-title {
                font-weight: 600;
                margin-bottom: 4px;
                font-size: 15px;
            }
            
            .step-detail {
                color: rgba(255, 255, 255, 0.7);
                font-size: 13px;
                line-height: 1.4;
            }
            
            .modal-footer {
                margin-bottom: 20px;
            }
            
            .got-it-btn {
                width: 100%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                padding: 15px 20px;
                border-radius: 12px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                transition: transform 0.2s ease;
            }
            
            .got-it-btn:hover {
                transform: translateY(-2px);
            }
            
            .install-benefits {
                display: flex;
                justify-content: space-between;
                gap: 15px;
                padding-top: 20px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .benefit {
                text-align: center;
                flex: 1;
            }
            
            .benefit-icon {
                display: block;
                font-size: 18px;
                margin-bottom: 5px;
            }
            
            .benefit span:last-child {
                font-size: 11px;
                color: rgba(255, 255, 255, 0.7);
            }
            
            @media (max-width: 480px) {
                .mobile-install-content {
                    padding: 25px 20px;
                    margin: 10px;
                }
                
                .install-benefits {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .benefit {
                    display: flex;
                    align-items: center;
                    text-align: left;
                    gap: 10px;
                }
                
                .benefit-icon {
                    margin-bottom: 0;
                }
            }
        </style>
    `;
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
    
    // Update button state to installed
    updateInstallButtonState('installed');
    
    // Hide install prompt
    dismissInstallPrompt();
    
    // Show success message
    showNotification('🎉 Trader AI is now installed on your device!', 'success');
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

// Enhance Mobile Experience
function enhanceMobileExperience() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    
    if (isMobile) {
        // Update CTA button text for mobile
        const ctaButtons = document.querySelectorAll('.cta-primary');
        ctaButtons.forEach(button => {
            if (button.textContent.includes('Install App')) {
                let mobileText;
                let buttonIcon;
                
                if (isIOS && isSafari) {
                    // Safari iOS - always shows instructions
                    mobileText = 'Add to Home Screen - Get Trader AI';
                    buttonIcon = '📱';
                } else if (isAndroid) {
                    // Android Chrome/other browsers
                    mobileText = 'Install App - Get Trader AI';
                    buttonIcon = '🤖';
                } else {
                    // Other mobile browsers
                    mobileText = 'Get Trader AI App';
                    buttonIcon = '📱';
                }
                
                button.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15.577L8.46 12.038L9.874 10.624L11 11.75V4H13V11.75L14.126 10.624L15.54 12.038L12 15.577Z" fill="currentColor"/>
                        <path d="M12 20C16.4183 20 20 16.4183 20 12H18C18 15.3137 15.3137 18 12 18S6 15.3137 6 12H4C4 16.4183 7.58172 20 12 20Z" fill="currentColor"/>
                    </svg>
                    ${mobileText}
                `;
                
                // Add mobile-specific styling
                button.style.position = 'relative';
                button.style.overflow = 'visible';
                
                // Add pulsing indicator for mobile
                if (!button.querySelector('.mobile-indicator')) {
                    const indicator = document.createElement('div');
                    indicator.className = 'mobile-indicator';
                    indicator.innerHTML = buttonIcon;
                    indicator.style.cssText = `
                        position: absolute;
                        top: -8px;
                        right: -8px;
                        background: linear-gradient(135deg, #ff6b6b, #ff8e53);
                        color: white;
                        border-radius: 50%;
                        width: 28px;
                        height: 28px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                        animation: mobilePulse 2s infinite;
                        box-shadow: 0 2px 8px rgba(255, 107, 107, 0.4);
                    `;
                    button.appendChild(indicator);
                }
            }
        });
        
        // Add mobile-specific CSS
        if (!document.getElementById('mobileEnhancementStyles')) {
            const style = document.createElement('style');
            style.id = 'mobileEnhancementStyles';
            style.textContent = `
                @keyframes mobilePulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                }
                
                .mobile-install-hint {
                    position: fixed;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 25px;
                    font-size: 14px;
                    z-index: 1000;
                    animation: slideUpFade 0.5s ease;
                    backdrop-filter: blur(10px);
                }
                
                @keyframes slideUpFade {
                    from { 
                        opacity: 0; 
                        transform: translateX(-50%) translateY(20px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateX(-50%) translateY(0); 
                    }
                }
                
                @media (max-width: 768px) {
                    .cta-primary {
                        font-size: 16px;
                        padding: 18px 24px;
                        min-height: 56px;
                    }
                    
                    .mobile-indicator {
                        animation: mobilePulse 1.5s infinite !important;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Show mobile hint after 3 seconds if not installed
        setTimeout(() => {
            if (!window.matchMedia('(display-mode: standalone)').matches) {
                showMobileHint(isIOS, isAndroid, isSafari);
            }
        }, 3000);
    }
}

// Show Mobile Hint
function showMobileHint(isIOS, isAndroid, isSafari) {
    // Don't show if already shown
    if (document.getElementById('mobileHint')) return;
    
    const hint = document.createElement('div');
    hint.id = 'mobileHint';
    hint.className = 'mobile-install-hint';
    
    let hintText;
    if (isIOS && isSafari) {
        hintText = '💡 Tap the button to see how to add to home screen!';
    } else if (isAndroid) {
        hintText = '💡 Tap "Install" for the full app experience!';
    } else {
        hintText = '💡 Get the app for the best experience!';
    }
    
    hint.innerHTML = hintText;
    
    document.body.appendChild(hint);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        if (hint.parentNode) {
            hint.style.animation = 'slideUpFade 0.5s ease reverse';
            setTimeout(() => hint.remove(), 500);
        }
    }, 5000);
    
    // Hide on click
    hint.onclick = () => {
        hint.style.animation = 'slideUpFade 0.5s ease reverse';
        setTimeout(() => hint.remove(), 500);
    };
}