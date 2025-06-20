// Global variables
let deferredPrompt;
let installButton;
let addToHomeButton;

// Global function declarations for onclick handlers
window.performIOSInstall = performIOSInstall;
window.dismissIOSBanner = dismissIOSBanner;
window.dismissNativePrompt = dismissNativePrompt;
window.completeIOSInstall = completeIOSInstall;

// System Access Portal - Sophisticated Affiliate Funnel
// Stage management and psychological triggers

let currentStage = 1;
let systemData = {
    userProfile: {},
    calibrationSettings: {
        riskLevel: 50,
        investment: 1000,
        tradingStyle: 70
    },
    liveData: {
        marketPrices: {},
        signals: [],
        profitProjection: 0
    }
};

// Configuration
const config = {
    affiliateUrl: 'https://your-affiliate-link.com',
    appName: 'Elon\'s Trader AI',
    installationDelay: 3000
};

// DOM Elements
let downloadBtns;
let liveCount;
let countdown;
let spotsLeft;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    startLiveCounter();
    startCountdown();
    startSpotsCounter();
    setupDownloadButtons();
    animateStats();
    setupPWAInstallation();
    registerServiceWorker();
});

function initializeElements() {
    downloadBtns = document.querySelectorAll('#downloadBtn, #downloadBtn2');
    liveCount = document.getElementById('live-count');
    countdown = document.getElementById('countdown');
    spotsLeft = document.getElementById('spotsLeft');
    
    // Also get additional elements
    const countdown2 = document.getElementById('countdown2');
    const spotsLeft2 = document.getElementById('spotsLeft2');
    const liveUsers = document.getElementById('live-users');
    
    // Set initial values
    if (liveUsers) liveUsers.textContent = '2,847,293';
    if (spotsLeft2) spotsLeft2.textContent = '73';
}

// Live user counter animation
function startLiveCounter() {
    if (!liveCount) return;
    
    const baseCount = 2847293;
    let currentCount = baseCount;
    
    setInterval(() => {
        // Random fluctuation between -50 and +150 (bigger numbers for Elon's scale)
        const change = Math.floor(Math.random() * 201) - 50;
        currentCount = Math.max(2800000, Math.min(2900000, currentCount + change));
        liveCount.textContent = currentCount.toLocaleString();
        
        // Update other live counters if they exist
        const liveUsers = document.getElementById('live-users');
        if (liveUsers) {
            liveUsers.textContent = currentCount.toLocaleString();
        }
    }, 3000);
}

// Countdown timer
function startCountdown() {
    if (!countdown) return;
    
    let hours = 23;
    let minutes = 45;
    let seconds = 12;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }
            }
        }
        
        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        countdown.textContent = timeString;
        
        // Update other countdown timers if they exist
        const countdown2 = document.getElementById('countdown2');
        if (countdown2) {
            countdown2.textContent = timeString;
        }
    }, 1000);
}

// Spots remaining counter
function startSpotsCounter() {
    if (!spotsLeft) return;
    
    let spots = 73;
    
    setInterval(() => {
        if (Math.random() < 0.3 && spots > 25) { // 30% chance to decrease
            spots--;
            spotsLeft.textContent = spots;
            
            // Update other spots counters if they exist
            const spotsLeft2 = document.getElementById('spotsLeft2');
            if (spotsLeft2) {
                spotsLeft2.textContent = spots;
            }
        }
    }, 8000);
}

// Animate statistics on scroll
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                // Extract number from text
                const numMatch = finalValue.match(/[\d.]+/);
                if (numMatch) {
                    const num = parseFloat(numMatch[0]);
                    animateNumber(target, 0, num, finalValue);
                }
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, start, end, finalText) {
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = start + (end - start) * easeOutQuart(progress);
        
        if (finalText.includes('$')) {
            element.textContent = '$' + current.toFixed(1) + 'B+';
        } else if (finalText.includes('K+')) {
            element.textContent = Math.floor(current) + 'K+';
        } else if (finalText.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else {
            element.textContent = Math.floor(current);
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = finalText;
        }
    }
    
    requestAnimationFrame(update);
}

function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

// Setup download buttons
function setupDownloadButtons() {
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', handleDownload);
    });
}

function handleDownload(event) {
    const button = event.target.closest('.download-btn');
    if (!button) return;
    
    // Disable button and show loading
    button.disabled = true;
    const originalContent = button.innerHTML;
    
    button.innerHTML = `
        <div class="btn-content">
            <span class="btn-icon">⏳</span>
            <div class="btn-text">
                <div class="btn-main">Preparing Download...</div>
                <div class="btn-sub">Please wait</div>
            </div>
        </div>
    `;
    
    // Show installation modal
    showInstallationModal();
    
    // Simulate installation process
    setTimeout(() => {
        button.innerHTML = originalContent;
        button.disabled = false;
    }, config.installationDelay);
}

function showInstallationModal() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'installation-modal-overlay';
    overlay.innerHTML = `
        <div class="installation-modal">
            <div class="modal-header">
                <div class="app-icon">
                    <img src="icons/icon-152x152.png" alt="Elon's Trader AI">
                </div>
                <h3>Installing Elon's Trader AI</h3>
                <p>Setting up your trading account...</p>
            </div>
            
            <div class="installation-progress">
                <div class="progress-bar">
                    <div class="progress-fill" id="installProgress"></div>
                </div>
                <div class="progress-text" id="progressText">Initializing...</div>
            </div>
            
            <div class="installation-steps">
                <div class="step" id="step1">
                    <span class="step-icon">⏳</span>
                    <span>Downloading app files...</span>
                </div>
                <div class="step" id="step2">
                    <span class="step-icon">⏳</span>
                    <span>Setting up AI algorithms...</span>
                </div>
                <div class="step" id="step3">
                    <span class="step-icon">⏳</span>
                    <span>Creating your account...</span>
                </div>
                <div class="step" id="step4">
                    <span class="step-icon">⏳</span>
                    <span>Finalizing installation...</span>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .installation-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(5px);
        }
        
        .installation-modal {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .modal-header .app-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .modal-header .app-icon img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .modal-header h3 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 10px;
            color: #2c3e50;
        }
        
        .modal-header p {
            color: #6c757d;
            margin-bottom: 30px;
        }
        
        .installation-progress {
            margin-bottom: 30px;
        }
        
        .progress-bar {
            width: 100%;
            height: 12px;
            background: #e9ecef;
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 15px;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(45deg, #28a745, #20c997);
            border-radius: 6px;
            width: 0%;
            transition: width 0.5s ease;
        }
        
        .progress-text {
            font-weight: 600;
            color: #495057;
        }
        
        .installation-steps {
            text-align: left;
        }
        
        .step {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 12px 0;
            border-bottom: 1px solid #e9ecef;
            color: #6c757d;
        }
        
        .step:last-child {
            border-bottom: none;
        }
        
        .step.active {
            color: #28a745;
            font-weight: 600;
        }
        
        .step.completed {
            color: #28a745;
        }
        
        .step.completed .step-icon {
            color: #28a745;
        }
        
        .step-icon {
            font-size: 18px;
            width: 20px;
        }
    `;
    
    document.head.appendChild(modalStyles);
    document.body.appendChild(overlay);
    
    // Start installation animation
    simulateInstallation();
}

function simulateInstallation() {
    const progressFill = document.getElementById('installProgress');
    const progressText = document.getElementById('progressText');
    const steps = ['step1', 'step2', 'step3', 'step4'];
    
    const phases = [
        { progress: 25, text: 'Downloading app files...', duration: 1000 },
        { progress: 50, text: 'Setting up AI algorithms...', duration: 800 },
        { progress: 75, text: 'Creating your account...', duration: 600 },
        { progress: 100, text: 'Installation complete!', duration: 500 }
    ];
    
    let currentPhase = 0;
    
    function nextPhase() {
        if (currentPhase >= phases.length) {
            // Installation complete - redirect to affiliate
            setTimeout(() => {
                window.location.href = config.affiliateUrl;
            }, 1000);
            return;
        }
        
        const phase = phases[currentPhase];
        
        // Update progress bar
        progressFill.style.width = phase.progress + '%';
        progressText.textContent = phase.text;
        
        // Update step status
        if (currentPhase > 0) {
            const prevStep = document.getElementById(steps[currentPhase - 1]);
            prevStep.classList.remove('active');
            prevStep.classList.add('completed');
            prevStep.querySelector('.step-icon').textContent = '✅';
        }
        
        if (currentPhase < steps.length) {
            const currentStep = document.getElementById(steps[currentPhase]);
            currentStep.classList.add('active');
            currentStep.querySelector('.step-icon').textContent = '⏳';
        }
        
        currentPhase++;
        setTimeout(nextPhase, phase.duration);
    }
    
    // Start the installation process
    setTimeout(nextPhase, 500);
}

// PWA Installation (for real PWA functionality)
function setupPWAInstallation() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
    });
}

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('SW registered: ', registration);
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// Update live trading data in phone mockup
function updateTradingData() {
    const balanceAmount = document.querySelector('.balance-amount');
    const balanceChange = document.querySelector('.balance-change');
    const tradeProfits = document.querySelectorAll('.trade-profit');
    
    if (balanceAmount) {
        // Simulate small balance changes
        const currentBalance = 47382.91;
        const change = (Math.random() - 0.5) * 100;
        const newBalance = currentBalance + change;
        const dailyChange = 2847.33 + change;
        const percentage = ((dailyChange / (newBalance - dailyChange)) * 100).toFixed(1);
        
        balanceAmount.textContent = `$${newBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        balanceChange.textContent = `+$${dailyChange.toFixed(2)} (+${percentage}%) today`;
    }
    
    // Update individual trade profits
    tradeProfits.forEach(profit => {
        const currentValue = parseFloat(profit.textContent.replace(/[+$,]/g, ''));
        const change = (Math.random() - 0.3) * 10; // Slight upward bias
        const newValue = Math.max(0, currentValue + change);
        profit.textContent = `+$${newValue.toFixed(2)}`;
    });
}

// Update trading data every 5 seconds
setInterval(updateTradingData, 5000);

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
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
            
            // Wait for service worker to be ready to improve PWA installation
            await navigator.serviceWorker.ready;
            console.log('Service worker is ready - PWA should be installable');
            
            // Force a small delay to ensure PWA criteria are evaluated
            setTimeout(() => {
                console.log('PWA installation should now be available');
            }, 1000);
            
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
    
    // Use simple device detection
    const device = detectDevice();
    console.log('Device detection:', device);
    
    if (device.isIOS) {
        // iOS - show fake App Store installation experience
        console.log('iOS detected - showing fake installation experience');
        showIOSInstallation();
        return;
    }
    
    if (device.isAndroid) {
        // Android - check if we're in a PWA-capable browser
        const isChrome = /Chrome/i.test(navigator.userAgent) && !/Edg/i.test(navigator.userAgent);
        const isEdge = /Edg/i.test(navigator.userAgent);
        const isWebView = /wv|WebView/i.test(navigator.userAgent);
        const isSamsung = /SamsungBrowser/i.test(navigator.userAgent);
        const isFirefox = /Firefox/i.test(navigator.userAgent);
        
        console.log('Android browser detection:', { 
            userAgent: navigator.userAgent,
            isChrome, 
            isEdge, 
            isWebView, 
            isSamsung, 
            isFirefox,
            hasDeferredPrompt: !!deferredPrompt
        });
        
        if ((isChrome || isEdge) && !isWebView && !isSamsung && !isFirefox) {
            // Good browser - try PWA installation
            console.log('PWA-capable Android browser detected');
            // Continue to PWA installation logic below
        } else {
            // Non-PWA browser - show guidance
            console.log('Non-PWA Android browser detected - showing guidance');
            showAndroidInstallGuidance();
            return;
        }
    } else {
        // Desktop or other - show guidance
        showUnsupportedBrowser(device);
        return;
    }
    
    // For PWA-capable Android browsers, try the beforeinstallprompt approach
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
        // Fallback for Android browsers where beforeinstallprompt hasn't fired yet
        console.log('No deferred prompt available yet');
        
        // Check if we're in Chrome/Edge but the event just hasn't fired yet
        const isChrome = /Chrome/i.test(navigator.userAgent) && !/Edg/i.test(navigator.userAgent);
        const isEdge = /Edg/i.test(navigator.userAgent);
        const isWebView = /wv|WebView/i.test(navigator.userAgent);
        const isSamsung = /SamsungBrowser/i.test(navigator.userAgent);
        
        if ((isChrome || isEdge) && !isWebView && !isSamsung) {
            // We're in a good browser, but PWA criteria might not be met yet
            showNotification('⏳ PWA installation will be available once the page fully loads. Try refreshing!', 'info');
            
            // Try to force the beforeinstallprompt event by reloading service worker
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(registration => {
                    console.log('Service worker ready, PWA should be installable soon');
                    showNotification('🔄 App is getting ready for installation...', 'info');
                });
            }
        } else {
            // Actually unsupported browser
            console.log('Unsupported Android browser - showing guidance');
            showAndroidInstallGuidance();
        }
    }
}

// Show Real iOS Install Guide
function showRealIOSInstallGuide() {
    // Create a full-screen overlay with step-by-step instructions
    const overlay = document.createElement('div');
    overlay.id = 'realIOSInstallGuide';
    overlay.innerHTML = `
        <div class="ios-install-overlay">
            <div class="ios-install-container">
                <div class="ios-install-header">
                    <button class="ios-close-btn" id="closeIOSGuide">&times;</button>
                    <div class="ios-app-icon">
                        <img src="/icons/icon-192x192.png" alt="Trader AI" />
                    </div>
                    <h2>Install Trader AI</h2>
                    <p>Follow these steps to add Trader AI to your home screen</p>
                </div>
                
                <div class="ios-install-steps">
                    <div class="ios-step active" id="step1">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h3>Tap the Share Button</h3>
                            <p>Look at the bottom of your Safari browser and tap the share icon</p>
                            <div class="share-icon-demo">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="#007AFF">
                                    <path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .9 2 2z"/>
                                </svg>
                            </div>
                            <div class="step-arrow">↓</div>
                        </div>
                    </div>
                    
                    <div class="ios-step" id="step2">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h3>Find "Add to Home Screen"</h3>
                            <p>Scroll through the options and tap "Add to Home Screen"</p>
                            <div class="add-icon-demo">
                                <div class="demo-button">
                                    <span class="demo-icon">📱</span>
                                    <span>Add to Home Screen</span>
                                </div>
                            </div>
                            <div class="step-arrow">↓</div>
                        </div>
                    </div>
                    
                    <div class="ios-step" id="step3">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h3>Tap "Add"</h3>
                            <p>Confirm the installation by tapping "Add" in the top right</p>
                            <div class="add-button-demo">
                                <button class="demo-add-btn">Add</button>
                            </div>
                            <div class="success-message">
                                <span class="success-icon">✅</span>
                                <span>Trader AI will appear on your home screen!</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="ios-install-footer">
                    <button class="ios-got-it-btn" id="iosGotItBtn">
                        Got it! Let me try
                    </button>
                    <p class="ios-help-text">Need help? The share button is at the bottom of Safari</p>
                </div>
            </div>
        </div>
    `;
    
    // Add styles
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.95);
        z-index: 50000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeInOverlay 0.3s ease;
        padding: 20px;
        box-sizing: border-box;
    `;
    
    document.body.appendChild(overlay);
    
    // Add event listeners
    document.getElementById('closeIOSGuide').addEventListener('click', closeIOSInstallGuide);
    document.getElementById('iosGotItBtn').addEventListener('click', closeIOSInstallGuide);
    
    // Add step progression animation
    setTimeout(() => {
        document.getElementById('step2').classList.add('active');
    }, 2000);
    
    setTimeout(() => {
        document.getElementById('step3').classList.add('active');
    }, 4000);
    
    // Track that we showed the guide
    if (typeof gtag !== 'undefined') {
        gtag('event', 'ios_install_guide_shown', {
            'platform': 'ios_safari'
        });
    }
}

// Close iOS Install Guide
function closeIOSInstallGuide() {
    const guide = document.getElementById('realIOSInstallGuide');
    if (guide) {
        guide.style.animation = 'fadeOutOverlay 0.3s ease';
        setTimeout(() => {
            guide.remove();
        }, 300);
    }
    
    // Show encouraging notification
    showNotification('🎯 Look for the share button at the bottom of Safari!', 'info');
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
                <button class="ios-banner-add" id="iosBannerAdd">Add</button>
                <button class="ios-banner-cancel" id="iosBannerCancel">Cancel</button>
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
    
    // Add event listeners
    document.getElementById('iosBannerAdd').addEventListener('click', performIOSInstall);
    document.getElementById('iosBannerCancel').addEventListener('click', dismissIOSBanner);
    
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
                    <button class="ios-modal-cancel" id="iosModalCancel">Cancel</button>
                    <button class="ios-modal-add" id="iosModalAdd">Add</button>
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
    
    // Add event listeners
    document.getElementById('iosModalCancel').addEventListener('click', dismissNativePrompt);
    document.getElementById('iosModalAdd').addEventListener('click', completeIOSInstall);
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
    
    // Use the same logic as the main install button
    handleInstallClick();
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

function showIOSInstallation() {
    // First, try the aggressive iOS hacks before falling back to fake installation
    if (attemptIOSShareHack()) {
        return; // If hack succeeds, we're done
    }
    
    // Fallback to fake installation experience
    createFakeIOSInstallation();
}

function attemptIOSShareHack() {
    console.log('Attempting iOS share menu hacks...');
    
    // Method 1: Viewport manipulation to trigger iOS chrome
    try {
        const viewport = document.querySelector('meta[name="viewport"]');
        const originalContent = viewport.content;
        
        // Force iOS to recalculate chrome by changing viewport
        viewport.content = 'width=device-width, initial-scale=1.1';
        setTimeout(() => {
            viewport.content = originalContent;
            
            // Method 2: Try to trigger share via navigator.share (if available)
            if (navigator.share && navigator.canShare) {
                navigator.share({
                    title: 'Trader AI',
                    text: 'Install Trader AI - The Automated Trading System',
                    url: window.location.href
                }).then(() => {
                    console.log('Native share triggered successfully');
                    return true;
                }).catch(() => {
                    console.log('Navigator.share failed, trying next method');
                    return tryAdvancedIOSHacks();
                });
            } else {
                return tryAdvancedIOSHacks();
            }
        }, 100);
    } catch (e) {
        console.log('Viewport hack failed:', e);
        return tryAdvancedIOSHacks();
    }
    
    return false;
}

function tryAdvancedIOSHacks() {
    console.log('Trying advanced iOS hacks...');
    
    // Method 3: Touch simulation to trigger share button
    try {
        // Create invisible element at share button location
        const shareTarget = document.createElement('div');
        shareTarget.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 44px;
            height: 44px;
            z-index: 999999;
            pointer-events: none;
            opacity: 0;
        `;
        document.body.appendChild(shareTarget);
        
        // Simulate touch events
        const touchStart = new TouchEvent('touchstart', {
            bubbles: true,
            cancelable: true,
            touches: [{
                clientX: shareTarget.offsetLeft + 22,
                clientY: shareTarget.offsetTop + 22,
                target: shareTarget
            }]
        });
        
        const touchEnd = new TouchEvent('touchend', {
            bubbles: true,
            cancelable: true
        });
        
        // Dispatch touch events
        shareTarget.dispatchEvent(touchStart);
        setTimeout(() => {
            shareTarget.dispatchEvent(touchEnd);
            document.body.removeChild(shareTarget);
        }, 50);
        
        // Method 4: Try iOS-specific URL schemes
        setTimeout(() => {
            return tryIOSURLSchemes();
        }, 200);
        
    } catch (e) {
        console.log('Touch simulation failed:', e);
        return tryIOSURLSchemes();
    }
    
    return false;
}

function tryIOSURLSchemes() {
    console.log('Trying iOS URL schemes...');
    
    // Method 5: iOS Share Sheet URL schemes (undocumented)
    const schemes = [
        'shortcuts://share',
        'workflow://share',
        'x-callback-url://share',
        'prefs:root=SAFARI&path=ADD_TO_HOME_SCREEN'
    ];
    
    schemes.forEach((scheme, index) => {
        setTimeout(() => {
            try {
                const link = document.createElement('a');
                link.href = scheme;
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                console.log(`Tried scheme: ${scheme}`);
            } catch (e) {
                console.log(`Scheme ${scheme} failed:`, e);
            }
        }, index * 100);
    });
    
    // Method 6: Force iOS standalone mode detection
    setTimeout(() => {
        return tryStandaloneModeHack();
    }, 1000);
    
    return false;
}

function tryStandaloneModeHack() {
    console.log('Trying standalone mode hack...');
    
    // Method 7: Manipulate iOS standalone detection
    try {
        // Override standalone property
        Object.defineProperty(navigator, 'standalone', {
            get: function() { return true; },
            configurable: true
        });
        
        // Trigger iOS PWA detection
        const metaApple = document.createElement('meta');
        metaApple.name = 'apple-mobile-web-app-capable';
        metaApple.content = 'yes';
        document.head.appendChild(metaApple);
        
        // Force page refresh to trigger iOS PWA mode
        window.location.hash = '#pwa-install';
        
        // Method 8: iOS WebKit private API attempt
        if (window.webkit && window.webkit.messageHandlers) {
            try {
                window.webkit.messageHandlers.addToHomeScreen.postMessage({
                    action: 'install',
                    url: window.location.href
                });
                console.log('WebKit message handler attempted');
                return true;
            } catch (e) {
                console.log('WebKit handler failed:', e);
            }
        }
        
    } catch (e) {
        console.log('Standalone hack failed:', e);
    }
    
    // Method 9: Last resort - iOS notification hack
    return tryNotificationHack();
}

function tryNotificationHack() {
    console.log('Trying notification permission hack...');
    
    // Method 10: Use notification permission to trigger iOS system dialog
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                // Create notification that might trigger share options
                const notification = new Notification('Trader AI Ready!', {
                    body: 'Tap to add to home screen',
                    icon: '/icons/icon-192x192.png',
                    badge: '/icons/icon-96x96.png',
                    actions: [{
                        action: 'install',
                        title: 'Add to Home Screen'
                    }]
                });
                
                notification.onclick = () => {
                    notification.close();
                    // Try one more aggressive hack
                    return tryFinalIOSHack();
                };
                
                setTimeout(() => notification.close(), 3000);
            }
        }).catch(() => {
            console.log('Notification hack failed');
            return false;
        });
    }
    
    return false;
}

function tryFinalIOSHack() {
    console.log('Final iOS hack attempt...');
    
    // Method 11: iOS fullscreen API manipulation
    try {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().then(() => {
                setTimeout(() => {
                    document.exitFullscreen();
                    // In fullscreen transition, try to trigger share
                    window.location.href = `data:text/html,<script>
                        if(navigator.share) {
                            navigator.share({
                                title: 'Trader AI',
                                url: '${window.location.href}'
                            });
                        }
                        window.close();
                    </script>`;
                }, 500);
            });
        }
    } catch (e) {
        console.log('Fullscreen hack failed:', e);
    }
    
    // Method 12: iOS media session hack
    if ('mediaSession' in navigator) {
        try {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: 'Trader AI',
                artist: 'Trading App',
                artwork: [{ src: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' }]
            });
            
            navigator.mediaSession.setActionHandler('nexttrack', () => {
                // Hijack media controls to trigger share
                console.log('Media session hack triggered');
            });
        } catch (e) {
            console.log('Media session hack failed:', e);
        }
    }
    
    return false;
}

function createFakeIOSInstallation() {
    // Original fake installation code as fallback
    const installOverlay = document.createElement('div');
    installOverlay.className = 'ios-install-overlay';
    installOverlay.innerHTML = `
        <div class="ios-install-modal">
            <div class="ios-install-header">
                <div class="ios-app-icon">
                    <img src="icons/icon-152x152.png" alt="Trader AI">
                </div>
                <div class="ios-app-info">
                    <h3>Trader AI</h3>
                    <p>Trading & Finance</p>
                    <div class="ios-rating">
                        <span class="stars">★★★★★</span>
                        <span class="rating-text">4.9 • #1 Trading</span>
                    </div>
                </div>
            </div>
            
            <div class="ios-install-progress">
                <div class="ios-progress-circle">
                    <div class="ios-progress-ring"></div>
                    <div class="ios-progress-text">GET</div>
                </div>
            </div>
            
            <div class="ios-install-message">
                <p>Installing Trader AI...</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(installOverlay);
    
    // Animate the installation process
    setTimeout(() => {
        const progressText = installOverlay.querySelector('.ios-progress-text');
        const progressRing = installOverlay.querySelector('.ios-progress-ring');
        const message = installOverlay.querySelector('.ios-install-message p');
        
        // Start "downloading"
        progressText.textContent = '⭳';
        progressRing.style.animation = 'iosProgress 3s linear forwards';
        
        setTimeout(() => {
            // Switch to "installing"
            message.textContent = 'Installing...';
            progressText.innerHTML = '⚙️';
            
            setTimeout(() => {
                // Show completion and auto-redirect
                progressText.innerHTML = '✓';
                message.textContent = 'Installation Complete!';
                progressRing.style.background = 'conic-gradient(#34C759 100%, #E5E5EA 0)';
                
                setTimeout(() => {
                    // Smooth transition to the actual app
                    installOverlay.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(installOverlay);
                        // Redirect to the app interface
                        window.location.href = 'app.html';
                    }, 500);
                }, 1000);
            }, 2000);
        }, 3000);
    }, 500);
}

// Simple device detection - Android vs iOS
function detectDevice() {
    const userAgent = navigator.userAgent;
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    
    return {
        isAndroid,
        isIOS,
        supportsPWA: isAndroid || isIOS // We'll handle both with different approaches
    };
}

// Handle unsupported browsers
function showUnsupportedBrowser(device) {
    let message = '';
    let recommendations = [];
    
    if (device.isAndroid) {
        if (device.isSamsungBrowser) {
            message = 'Samsung Browser doesn\'t support app installation.';
            recommendations = ['Chrome', 'Microsoft Edge'];
        } else if (device.isFirefox) {
            message = 'Firefox mobile doesn\'t support app installation.';
            recommendations = ['Chrome', 'Microsoft Edge'];
        } else if (device.isWebView) {
            message = 'WebView doesn\'t support app installation.';
            recommendations = ['Chrome', 'Microsoft Edge'];
        } else {
            message = 'This browser doesn\'t support app installation.';
            recommendations = ['Chrome', 'Microsoft Edge'];
        }
    } else if (device.isIOS) {
        if (!device.isSafari) {
            message = 'Only Safari supports app installation on iOS.';
            recommendations = ['Safari'];
        }
    } else {
        // Desktop or other platforms
        message = 'App installation is optimized for mobile devices.';
        recommendations = ['Chrome on Android', 'Safari on iOS'];
    }
    
    // Create unsupported browser modal
    const modal = document.createElement('div');
    modal.className = 'unsupported-browser-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🚫 Installation Not Available</h3>
                    <button class="close-btn" onclick="this.closest('.unsupported-browser-modal').remove()">×</button>
                </div>
                <div class="modal-body">
                    <p>${message}</p>
                    <div class="browser-recommendations">
                        <p><strong>Try these browsers instead:</strong></p>
                        <ul>
                            ${recommendations.map(browser => `<li>📱 ${browser}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="browser-instructions">
                        <p>💡 <strong>Quick tip:</strong> Copy this URL and open it in ${recommendations[0] || 'a supported browser'}!</p>
                        <div class="url-copy">
                            <input type="text" value="${window.location.href}" readonly>
                            <button onclick="navigator.clipboard.writeText('${window.location.href}'); this.textContent='Copied!'">Copy</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-primary" onclick="this.closest('.unsupported-browser-modal').remove()">
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Track unsupported browser
    if (typeof gtag !== 'undefined') {
        gtag('event', 'unsupported_browser', {
            'browser': device.isSamsungBrowser ? 'samsung' : device.isFirefox ? 'firefox' : 'other',
            'platform': device.isAndroid ? 'android' : device.isIOS ? 'ios' : 'desktop'
        });
    }
}

// Android-specific installation guidance
function showAndroidInstallGuidance() {
    const modal = document.createElement('div');
    modal.className = 'android-install-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>📱 Install Trader AI</h3>
                    <button class="close-btn" onclick="this.closest('.android-install-modal').remove()">×</button>
                </div>
                <div class="modal-body">
                    <p>To install Trader AI as an app on your Android device, you need to use <strong>Chrome</strong> or <strong>Microsoft Edge</strong>.</p>
                    
                    <div class="browser-options">
                        <div class="browser-option">
                            <div class="browser-icon">🌐</div>
                            <div class="browser-info">
                                <h4>Google Chrome</h4>
                                <p>Best support for app installation</p>
                                <button class="browser-btn" onclick="openInChrome()">Open in Chrome</button>
                            </div>
                        </div>
                        
                        <div class="browser-option">
                            <div class="browser-icon">🔷</div>
                            <div class="browser-info">
                                <h4>Microsoft Edge</h4>
                                <p>Also supports app installation</p>
                                <button class="browser-btn" onclick="openInEdge()">Open in Edge</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="quick-copy">
                        <p><strong>Quick option:</strong> Copy this URL and paste it in Chrome or Edge</p>
                        <div class="url-copy">
                            <input type="text" value="${window.location.href}" readonly>
                            <button onclick="copyURLForAndroid(this)">Copy URL</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-secondary" onclick="this.closest('.android-install-modal').remove()">
                        I'll use my current browser
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Track Android guidance shown
    if (typeof gtag !== 'undefined') {
        gtag('event', 'android_install_guidance_shown', {
            'user_agent': navigator.userAgent
        });
    }
}

// Helper functions for Android guidance
function openInChrome() {
    const chromeURL = `googlechrome://${window.location.href}`;
    const fallbackURL = `https://play.google.com/store/apps/details?id=com.android.chrome`;
    
    try {
        window.location.href = chromeURL;
        // If Chrome isn't installed, redirect to Play Store after a delay
        setTimeout(() => {
            window.open(fallbackURL, '_blank');
        }, 2000);
    } catch (error) {
        window.open(fallbackURL, '_blank');
    }
    
    // Track attempt
    if (typeof gtag !== 'undefined') {
        gtag('event', 'android_chrome_redirect_attempted');
    }
}

function openInEdge() {
    const edgeURL = `microsoft-edge:${window.location.href}`;
    const fallbackURL = `https://play.google.com/store/apps/details?id=com.microsoft.emmx`;
    
    try {
        window.location.href = edgeURL;
        // If Edge isn't installed, redirect to Play Store after a delay
        setTimeout(() => {
            window.open(fallbackURL, '_blank');
        }, 2000);
    } catch (error) {
        window.open(fallbackURL, '_blank');
    }
    
    // Track attempt
    if (typeof gtag !== 'undefined') {
        gtag('event', 'android_edge_redirect_attempted');
    }
}

function copyURLForAndroid(button) {
    const url = window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            button.textContent = 'Copied!';
            button.style.background = '#4CAF50';
            
            setTimeout(() => {
                button.textContent = 'Copy URL';
                button.style.background = '';
            }, 2000);
            
            showNotification('📋 URL copied! Now paste it in Chrome or Edge', 'success');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        button.textContent = 'Copied!';
        showNotification('📋 URL copied! Now paste it in Chrome or Edge', 'success');
    }
    
    // Track copy
    if (typeof gtag !== 'undefined') {
        gtag('event', 'android_url_copied');
    }
}

// Initialize the system
function initializeSystem() {
    detectUserDevice();
    generateLiveData();
    setupEventListeners();
    
    // Start with stage 1
    showStage(1);
    
    console.log('✅ System initialized - Ready for user access');
}

// Device detection for personalization
function detectUserDevice() {
    const userAgent = navigator.userAgent;
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isDesktop = !isAndroid && !isIOS;
    
    systemData.userProfile = {
        device: isAndroid ? 'Android' : isIOS ? 'iOS' : 'Desktop',
        browser: getBrowserName(),
        timestamp: new Date().toISOString(),
        sessionId: generateSessionId()
    };
    
    console.log('👤 User Profile:', systemData.userProfile);
}

function getBrowserName() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Unknown';
}

function generateSessionId() {
    return 'TRD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Matrix background effect
function startMatrixEffect() {
    const matrixBg = document.querySelector('.matrix-bg');
    if (!matrixBg) return;
    
    // Add floating particles
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createMatrixParticle();
        }, i * 200);
    }
}

function createMatrixParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: #00ff41;
        border-radius: 50%;
        pointer-events: none;
        z-index: 2;
        left: ${Math.random() * 100}vw;
        top: -10px;
        animation: matrixDrop ${3 + Math.random() * 4}s linear infinite;
        opacity: ${0.3 + Math.random() * 0.7};
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 7000);
}

// Add CSS for matrix drop animation
const style = document.createElement('style');
style.textContent = `
    @keyframes matrixDrop {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Update timestamp
function updateTimestamp() {
    const timestampEl = document.querySelector('.timestamp');
    if (timestampEl) {
        const now = new Date();
        timestampEl.textContent = now.toLocaleTimeString('en-US', { 
            hour12: false,
            timeZone: 'UTC' 
        }) + ' UTC';
    }
}

// Generate live market data
function generateLiveData() {
    const pairs = ['BTC/USD', 'ETH/USD', 'AAPL', 'TSLA', 'EUR/USD', 'GBP/USD'];
    
    pairs.forEach(pair => {
        systemData.liveData.marketPrices[pair] = {
            price: (Math.random() * 1000 + 100).toFixed(2),
            change: (Math.random() * 10 - 5).toFixed(2),
            trend: Math.random() > 0.5 ? 'up' : 'down'
        };
    });
    
    // Generate trading signals
    systemData.liveData.signals = [
        { pair: 'BTC/USD', action: 'BUY', confidence: 94, profit: '+$2,847' },
        { pair: 'ETH/USD', action: 'BUY', confidence: 87, profit: '+$1,203' },
        { pair: 'AAPL', action: 'SELL', confidence: 91, profit: '+$892' },
        { pair: 'TSLA', action: 'BUY', confidence: 83, profit: '+$1,456' }
    ];
    
    console.log('📊 Live data generated');
}

// Stage management
function showStage(stageNumber) {
    // Hide all stages
    document.querySelectorAll('.stage').forEach(stage => {
        stage.classList.remove('active');
    });
    
    // Show target stage
    const targetStage = document.getElementById(`stage${stageNumber}`);
    if (targetStage) {
        targetStage.classList.add('active');
        currentStage = stageNumber;
        
        // Initialize stage-specific functionality
        initializeStageFeatures(stageNumber);
        
        console.log(`🎯 Stage ${stageNumber} activated`);
    }
}

function initializeStageFeatures(stageNumber) {
    switch(stageNumber) {
        case 1:
            animateStats();
            break;
        case 2:
            startBiometricScan();
            break;
        case 3:
            initializeSliders();
            break;
        case 4:
            startLiveDataFeed();
            break;
    }
}

// Stage 1: Landing animations
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach((stat, index) => {
        setTimeout(() => {
            const targetValue = stat.textContent;
            animateNumber(stat, 0, parseInt(targetValue.replace(/[^0-9]/g, '')), targetValue.includes('%') ? '%' : '');
        }, index * 300);
    });
}

function animateNumber(element, start, end, suffix = '') {
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current.toLocaleString() + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Stage 2: Biometric scanning simulation
function startBiometricScan() {
    const progressFill = document.querySelector('.progress-fill');
    const statusText = document.querySelector('.status-text');
    
    if (!progressFill || !statusText) return;
    
    const phases = [
        { text: 'Initializing biometric scanner...', progress: 15 },
        { text: 'Detecting device capabilities...', progress: 35 },
        { text: 'Analyzing user patterns...', progress: 60 },
        { text: 'Verifying trading permissions...', progress: 85 },
        { text: 'Authentication complete!', progress: 100 }
    ];
    
    let currentPhase = 0;
    
    function nextPhase() {
        if (currentPhase < phases.length) {
            const phase = phases[currentPhase];
            statusText.textContent = phase.text;
            progressFill.style.width = phase.progress + '%';
            
            currentPhase++;
            
            if (currentPhase < phases.length) {
                setTimeout(nextPhase, 1500 + Math.random() * 1000);
            } else {
                setTimeout(() => {
                    showStage(3);
                }, 2000);
            }
        }
    }
    
    setTimeout(nextPhase, 1000);
    
    // Update device info
    updateDeviceInfo();
}

function updateDeviceInfo() {
    const deviceInfo = {
        'Device Type': systemData.userProfile.device,
        'Browser': systemData.userProfile.browser,
        'Session ID': systemData.userProfile.sessionId,
        'Security Level': 'VERIFIED',
        'Trading Status': 'AUTHORIZED'
    };
    
    const infoGrid = document.querySelector('.info-grid');
    if (infoGrid) {
        infoGrid.innerHTML = '';
        
        Object.entries(deviceInfo).forEach(([key, value]) => {
            const infoItem = document.createElement('div');
            infoItem.className = 'info-item';
            infoItem.innerHTML = `
                <span>${key}:</span>
                <span class="status-verified">${value}</span>
            `;
            infoGrid.appendChild(infoItem);
        });
    }
}

// Stage 3: Calibration sliders
function initializeSliders() {
    const sliders = document.querySelectorAll('.calibration-slider');
    
    sliders.forEach(slider => {
        slider.addEventListener('input', function() {
            updateSliderValue(this);
            updateProfitProjection();
        });
        
        // Initialize slider values
        updateSliderValue(slider);
    });
    
    updateProfitProjection();
}

function updateSliderValue(slider) {
    const valueDisplay = slider.parentNode.querySelector('.slider-value');
    const sliderId = slider.id;
    let displayValue = slider.value;
    
    // Update system data
    if (sliderId === 'riskLevel') {
        systemData.calibrationSettings.riskLevel = parseInt(slider.value);
        displayValue = ['Conservative', 'Moderate', 'Aggressive'][Math.floor(slider.value / 34)] || 'Aggressive';
    } else if (sliderId === 'investment') {
        systemData.calibrationSettings.investment = parseInt(slider.value);
        displayValue = '$' + parseInt(slider.value).toLocaleString();
    } else if (sliderId === 'tradingStyle') {
        systemData.calibrationSettings.tradingStyle = parseInt(slider.value);
        displayValue = ['Manual', 'Semi-Auto', 'Full Auto'][Math.floor(slider.value / 34)] || 'Full Auto';
    }
    
    if (valueDisplay) {
        valueDisplay.textContent = displayValue;
    }
}

function updateProfitProjection() {
    const { riskLevel, investment, tradingStyle } = systemData.calibrationSettings;
    
    // Calculate projections based on settings
    const baseMultiplier = 0.15 + (riskLevel / 100) * 0.35;
    const styleMultiplier = 1 + (tradingStyle / 100) * 0.5;
    
    const daily = Math.floor(investment * baseMultiplier * styleMultiplier * 0.02);
    const weekly = daily * 7;
    const monthly = daily * 30;
    
    // Update display
    const projectionItems = document.querySelectorAll('.projection-item');
    const projections = [
        { label: 'Daily Profit:', amount: `$${daily.toLocaleString()}` },
        { label: 'Weekly Profit:', amount: `$${weekly.toLocaleString()}` },
        { label: 'Monthly Profit:', amount: `$${monthly.toLocaleString()}` }
    ];
    
    projectionItems.forEach((item, index) => {
        if (projections[index]) {
            item.innerHTML = `
                <span>${projections[index].label}</span>
                <span class="profit-amount">${projections[index].amount}</span>
            `;
        }
    });
    
    systemData.liveData.profitProjection = monthly;
}

// Stage 4: Live data feed
function startLiveDataFeed() {
    updateMarketData();
    updateTradingSignals();
    
    // Update data every 3 seconds
    setInterval(updateMarketData, 3000);
    setInterval(updateTradingSignals, 5000);
}

function updateMarketData() {
    const marketDisplay = document.querySelector('.market-display');
    if (!marketDisplay) return;
    
    marketDisplay.innerHTML = '';
    
    Object.entries(systemData.liveData.marketPrices).forEach(([pair, data]) => {
        // Simulate price changes
        const change = (Math.random() - 0.5) * 2;
        data.price = (parseFloat(data.price) + change).toFixed(2);
        data.change = change.toFixed(2);
        data.trend = change >= 0 ? 'up' : 'down';
        
        const marketItem = document.createElement('div');
        marketItem.className = 'market-item';
        marketItem.innerHTML = `
            <span>${pair}</span>
            <span class="price-${data.trend}">$${data.price} (${data.change >= 0 ? '+' : ''}${data.change})</span>
        `;
        marketDisplay.appendChild(marketItem);
    });
}

function updateTradingSignals() {
    const signalsDisplay = document.querySelector('.signals-display');
    if (!signalsDisplay) return;
    
    signalsDisplay.innerHTML = '';
    
    systemData.liveData.signals.forEach(signal => {
        // Simulate confidence changes
        signal.confidence = Math.max(75, Math.min(98, signal.confidence + (Math.random() - 0.5) * 4));
        
        const signalItem = document.createElement('div');
        signalItem.className = `signal-item signal-${signal.action.toLowerCase()}`;
        signalItem.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <div class="signal-dot"></div>
                <span>${signal.pair} - ${signal.action}</span>
            </div>
            <div style="text-align: right;">
                <div class="confidence">${Math.floor(signal.confidence)}%</div>
                <div style="color: #00ff41; font-size: 0.9rem;">${signal.profit}</div>
            </div>
        `;
        signalsDisplay.appendChild(signalItem);
    });
}

// Event listeners setup
function setupEventListeners() {
    // Stage 1: Access button
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('access-btn')) {
            e.preventDefault();
            console.log('🔑 System access requested');
            showStage(2);
        }
        
        // Stage 3: Calibration complete
        if (e.target.classList.contains('calibration-btn')) {
            e.preventDefault();
            console.log('⚙️ Calibration completed');
            showStage(4);
        }
        
        // Stage 4: Final activation (redirect to affiliate)
        if (e.target.classList.contains('activate-btn')) {
            e.preventDefault();
            console.log('🚀 System activation - Redirecting to trading platform');
            
            // Add dramatic effect before redirect
            activateSystem();
        }
    });
}

// Final system activation with redirect
function activateSystem() {
    const btn = document.querySelector('.activate-btn');
    const btnText = btn.querySelector('.btn-text');
    
    // Change button text and add loading effect
    btnText.textContent = 'ACTIVATING SYSTEM...';
    btn.style.pointerEvents = 'none';
    
    // Add pulsing effect
    btn.classList.add('activating');
    
    // Simulate system activation
    setTimeout(() => {
        btnText.textContent = 'ACCESSING TRADING PLATFORM...';
    }, 1500);
    
    setTimeout(() => {
        btnText.textContent = 'REDIRECTING...';
    }, 3000);
    
    // Redirect to affiliate URL after dramatic pause
    setTimeout(() => {
        console.log('🎯 Redirecting to affiliate platform');
        
        // Get affiliate URL from config
        fetch('./config.js')
            .then(response => response.text())
            .then(configText => {
                // Extract affiliate URL from config
                const urlMatch = configText.match(/affiliateUrl:\s*['"`]([^'"`]+)['"`]/);
                const affiliateUrl = urlMatch ? urlMatch[1] : 'https://default-affiliate-url.com';
                
                // Create seamless transition
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '0';
                
                setTimeout(() => {
                    window.location.href = affiliateUrl;
                }, 500);
            })
            .catch(() => {
                // Fallback URL
                window.location.href = 'https://default-affiliate-url.com';
            });
    }, 4500);
}

// Add CSS for activation effect
const activationStyle = document.createElement('style');
activationStyle.textContent = `
    .activate-btn.activating {
        animation: systemActivation 2s infinite;
    }
    
    @keyframes systemActivation {
        0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 0, 128, 0.4), 0 0 40px rgba(0, 255, 65, 0.2); 
        }
        50% { 
            box-shadow: 0 0 40px rgba(255, 0, 128, 0.8), 0 0 80px rgba(0, 255, 65, 0.4); 
        }
    }
`;
document.head.appendChild(activationStyle);

// Console branding
console.log(`
████████╗██████╗  █████╗ ██████╗ ███████╗██████╗      █████╗ ██╗
╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗    ██╔══██╗██║
   ██║   ██████╔╝███████║██║  ██║█████╗  ██████╔╝    ███████║██║
   ██║   ██╔══██╗██╔══██║██║  ██║██╔══╝  ██╔══██╗    ██╔══██║██║
   ██║   ██║  ██║██║  ██║██████╔╝███████╗██║  ██║    ██║  ██║██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝

🚀 EXCLUSIVE SYSTEM ACCESS PORTAL v2.1
🔒 Secure Trading Algorithm Interface
💰 Advanced Profit Optimization Engine
`);

// Performance monitoring
window.addEventListener('load', () => {
    console.log('⚡ System fully loaded and operational');
    console.log('📊 Performance metrics:', {
        loadTime: performance.now(),
        userAgent: navigator.userAgent,
        viewport: `${window.innerWidth}x${window.innerHeight}`
    });
});

// AutoWealth AI - Progressive Web App with Multi-Language Support
class AutoWealthApp {
    constructor() {
        this.currentLanguage = 'en';
        this.currentCurrency = 'USD';
        this.exchangeRate = 0.85; // USD to EUR approximate rate
        
        this.detectLanguage();
        this.init();
        this.setupEventListeners();
        this.startLiveCounters();
        this.setupPWA();
        this.translatePage();
    }

    // Language detection and setup
    detectLanguage() {
        // Get browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        console.log('Browser language detected:', browserLang);
        console.log('Language code:', langCode);
        
        // Check URL parameters for manual language override (for testing)
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        
        if (urlLang && ['en', 'nl', 'de'].includes(urlLang)) {
            this.currentLanguage = urlLang;
            console.log('Language set from URL parameter:', urlLang);
        } else {
            // Supported languages
            const supportedLangs = ['en', 'nl', 'de'];
            
            if (supportedLangs.includes(langCode)) {
                this.currentLanguage = langCode;
            } else {
                this.currentLanguage = 'en'; // Default to English
            }
        }
        
        // Set currency based on language
        if (this.currentLanguage === 'nl' || this.currentLanguage === 'de') {
            this.currentCurrency = 'EUR';
        } else {
            this.currentCurrency = 'USD';
        }
        
        console.log(`Final language: ${this.currentLanguage}, Currency: ${this.currentCurrency}`);
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;
    }

    // Translation data
    getTranslations() {
        return {
            en: {
                brand: "AutoWealth AI",
                secure: "Bank-Level Security",
                verified: "Verified Platform",
                active_users: "Active Users",
                announcement: "Limited Time: Free access to our AI trading system - Join 847,000+ users earning weekly profits",
                new: "NEW",
                featured_in: "As featured in:",
                hero_title: "New AI Does Your Trading While You Sleep",
                hero_subtitle_1: "Join 847,000+ people earning an average of",
                per_week: "per week",
                hero_subtitle_2: "with our automated wealth assistant. No experience needed.",
                feature_automated: "100% Automated Trading",
                feature_withdrawals: "Daily Profit Withdrawals",
                feature_security: "Bank-Level Security",
                cta_main: "Get Free Access Now",
                cta_subtitle: "Setup takes 2 minutes",
                cta_note: "Your information is 100% secure. No credit card required.",
                dashboard_title: "Your AutoWealth Dashboard",
                ai_active: "AI Active",
                today_profit: "Today's Profit",
                since_morning: "+$127.45 since morning",
                recent_trades: "Recent Trades",
                live: "LIVE",
                how_it_works_title: "How It Works - Simple as 1, 2, 3",
                step1_title: "Sign Up & Get Verified",
                step1_desc: "Quick 2-minute registration. Our team calls to verify your account and ensure you're qualified for the program.",
                step2_title: "AI Starts Trading",
                step2_desc: "Our advanced AI analyzes markets 24/7 and executes profitable trades automatically. No experience needed.",
                step3_title: "Withdraw Your Profits",
                step3_desc: "Watch your account grow daily. Withdraw your profits anytime - most users see results in the first week.",
                testimonials_title: "What Our Users Are Saying",
                testimonial1: "I was skeptical at first, but AutoWealth AI has completely changed my financial situation. I'm making more in a week than I used to make in a month!",
                testimonial2: "The best part is I don't have to do anything. The AI handles everything while I focus on my family and other interests. Passive income at its finest!",
                testimonial3: "I've tried other trading platforms before, but nothing comes close to AutoWealth AI. The results speak for themselves!",
                location_teacher: "Teacher, Berlin",
                location_engineer: "Engineer, Amsterdam", 
                location_nurse: "Nurse, Munich",
                this_week: "this week",
                this_month: "this month",
                avg_weekly: "Average Weekly Earnings",
                success_rate: "Success Rate",
                ai_trading: "AI Trading",
                final_cta_title: "Ready to Start Earning?",
                final_cta_desc: "Join thousands of people who are already using AutoWealth AI to build their financial future.",
                limited_spots: "⚡ Limited spots available - ",
                spots_left: "spots left today",
                copyright: "© 2024 AutoWealth AI. All rights reserved.",
                risk_warning: "Risk Warning: Trading involves risk. Past performance does not guarantee future results.",
                installing: "Installing AutoWealth AI...",
                initializing: "Initializing secure connection...",
                encryption_enabled: "Bank-level encryption enabled",
                algorithms_loaded: "AI trading algorithms loaded",
                market_data_connected: "Real-time market data connected"
            },
            nl: {
                brand: "AutoWealth AI",
                secure: "Bank-niveau Beveiliging",
                verified: "Geverifieerd Platform",
                active_users: "Actieve Gebruikers",
                announcement: "Beperkte Tijd: Gratis toegang tot ons AI handelssysteem - Sluit je aan bij 847.000+ gebruikers die wekelijks winst maken",
                new: "NIEUW",
                featured_in: "Zoals vermeld in:",
                hero_title: "Nieuwe AI Handelt Terwijl Jij Slaapt",
                hero_subtitle_1: "Sluit je aan bij 847.000+ mensen die gemiddeld",
                per_week: "per week",
                hero_subtitle_2: "verdienen met onze geautomatiseerde welvaart assistent. Geen ervaring nodig.",
                feature_automated: "100% Geautomatiseerd Handelen",
                feature_withdrawals: "Dagelijkse Winst Opnames",
                feature_security: "Bank-niveau Beveiliging",
                cta_main: "Krijg Nu Gratis Toegang",
                cta_subtitle: "Installatie duurt 2 minuten",
                cta_note: "Jouw informatie is 100% veilig. Geen creditcard vereist.",
                dashboard_title: "Jouw AutoWealth Dashboard",
                ai_active: "AI Actief",
                today_profit: "Winst Vandaag",
                since_morning: "+€108,33 sinds vanmorgen",
                recent_trades: "Recente Trades",
                live: "LIVE",
                how_it_works_title: "Hoe Het Werkt - Simpel als 1, 2, 3",
                step1_title: "Registreer & Word Geverifieerd",
                step1_desc: "Snelle 2-minuten registratie. Ons team belt om je account te verifiëren en ervoor te zorgen dat je gekwalificeerd bent voor het programma.",
                step2_title: "AI Begint Met Handelen",
                step2_desc: "Onze geavanceerde AI analyseert markten 24/7 en voert automatisch winstgevende trades uit. Geen ervaring nodig.",
                step3_title: "Trek Je Winsten Op",
                step3_desc: "Kijk hoe je account dagelijks groeit. Trek je winsten op elk moment op - de meeste gebruikers zien resultaten in de eerste week.",
                testimonials_title: "Wat Onze Gebruikers Zeggen",
                testimonial1: "Ik was eerst sceptisch, maar AutoWealth AI heeft mijn financiële situatie volledig veranderd. Ik verdien meer in een week dan ik vroeger in een maand verdiende!",
                testimonial2: "Het beste deel is dat ik niets hoef te doen. De AI regelt alles terwijl ik me focus op mijn familie en andere interesses. Passief inkomen op zijn best!",
                testimonial3: "Ik heb eerder andere handelsplatforms geprobeerd, maar niets komt in de buurt van AutoWealth AI. De resultaten spreken voor zich!",
                location_teacher: "Leraar, Berlijn",
                location_engineer: "Ingenieur, Amsterdam",
                location_nurse: "Verpleegster, München",
                this_week: "deze week",
                this_month: "deze maand",
                avg_weekly: "Gemiddelde Wekelijkse Verdiensten",
                success_rate: "Succespercentage",
                ai_trading: "AI Handelen",
                final_cta_title: "Klaar Om Te Beginnen Met Verdienen?",
                final_cta_desc: "Sluit je aan bij duizenden mensen die AutoWealth AI al gebruiken om hun financiële toekomst op te bouwen.",
                limited_spots: "⚡ Beperkte plekken beschikbaar - ",
                spots_left: "plekken over vandaag",
                copyright: "© 2024 AutoWealth AI. Alle rechten voorbehouden.",
                risk_warning: "Risicowaarschuwing: Handelen brengt risico's met zich mee. Prestaties uit het verleden garanderen geen toekomstige resultaten.",
                installing: "AutoWealth AI Installeren...",
                initializing: "Beveiligde verbinding initialiseren...",
                encryption_enabled: "Bank-niveau encryptie ingeschakeld",
                algorithms_loaded: "AI handelsalgoritmes geladen",
                market_data_connected: "Real-time marktdata verbonden"
            },
            de: {
                brand: "AutoWealth AI",
                secure: "Bank-Level Sicherheit",
                verified: "Verifizierte Plattform",
                active_users: "Aktive Benutzer",
                announcement: "Begrenzte Zeit: Kostenloser Zugang zu unserem KI-Handelssystem - Schließen Sie sich 847.000+ Benutzern an, die wöchentliche Gewinne erzielen",
                new: "NEU",
                featured_in: "Wie erwähnt in:",
                hero_title: "Neue KI Handelt Während Du Schläfst",
                hero_subtitle_1: "Schließen Sie sich 847.000+ Menschen an, die durchschnittlich",
                per_week: "pro Woche",
                hero_subtitle_2: "mit unserem automatisierten Wohlstands-Assistenten verdienen. Keine Erfahrung erforderlich.",
                feature_automated: "100% Automatisierter Handel",
                feature_withdrawals: "Tägliche Gewinn-Abhebungen",
                feature_security: "Bank-Level Sicherheit",
                cta_main: "Jetzt Kostenlosen Zugang Erhalten",
                cta_subtitle: "Einrichtung dauert 2 Minuten",
                cta_note: "Ihre Informationen sind 100% sicher. Keine Kreditkarte erforderlich.",
                dashboard_title: "Ihr AutoWealth Dashboard",
                ai_active: "KI Aktiv",
                today_profit: "Heutiger Gewinn",
                since_morning: "+€108,33 seit dem Morgen",
                recent_trades: "Aktuelle Trades",
                live: "LIVE",
                how_it_works_title: "Wie Es Funktioniert - Einfach wie 1, 2, 3",
                step1_title: "Anmelden & Verifiziert Werden",
                step1_desc: "Schnelle 2-Minuten Registrierung. Unser Team ruft an, um Ihr Konto zu verifizieren und sicherzustellen, dass Sie für das Programm qualifiziert sind.",
                step2_title: "KI Beginnt Mit Dem Handel",
                step2_desc: "Unsere fortschrittliche KI analysiert Märkte 24/7 und führt automatisch profitable Trades aus. Keine Erfahrung erforderlich.",
                step3_title: "Ziehen Sie Ihre Gewinne Ab",
                step3_desc: "Beobachten Sie, wie Ihr Konto täglich wächst. Ziehen Sie Ihre Gewinne jederzeit ab - die meisten Benutzer sehen Ergebnisse in der ersten Woche.",
                testimonials_title: "Was Unsere Benutzer Sagen",
                testimonial1: "Ich war zunächst skeptisch, aber AutoWealth AI hat meine finanzielle Situation vollständig verändert. Ich verdiene mehr in einer Woche als früher in einem Monat!",
                testimonial2: "Das Beste daran ist, dass ich nichts tun muss. Die KI kümmert sich um alles, während ich mich auf meine Familie und andere Interessen konzentriere. Passives Einkommen vom Feinsten!",
                testimonial3: "Ich habe schon andere Handelsplattformen ausprobiert, aber nichts kommt an AutoWealth AI heran. Die Ergebnisse sprechen für sich!",
                location_teacher: "Lehrerin, Berlin",
                location_engineer: "Ingenieur, Amsterdam",
                location_nurse: "Krankenschwester, München",
                this_week: "diese Woche",
                this_month: "diesen Monat",
                avg_weekly: "Durchschnittliche Wöchentliche Verdienste",
                success_rate: "Erfolgsrate",
                ai_trading: "KI Handel",
                final_cta_title: "Bereit Anzufangen Zu Verdienen?",
                final_cta_desc: "Schließen Sie sich Tausenden von Menschen an, die AutoWealth AI bereits nutzen, um ihre finanzielle Zukunft aufzubauen.",
                limited_spots: "⚡ Begrenzte Plätze verfügbar - ",
                spots_left: "Plätze heute übrig",
                copyright: "© 2024 AutoWealth AI. Alle Rechte vorbehalten.",
                risk_warning: "Risikowarnung: Handel birgt Risiken. Vergangene Leistungen garantieren keine zukünftigen Ergebnisse.",
                installing: "AutoWealth AI Installieren...",
                initializing: "Sichere Verbindung initialisieren...",
                encryption_enabled: "Bank-Level Verschlüsselung aktiviert",
                algorithms_loaded: "KI-Handelsalgorithmen geladen",
                market_data_connected: "Echtzeit-Marktdaten verbunden"
            }
        };
    }

    // Translate the page
    translatePage() {
        const translations = this.getTranslations();
        const currentTranslations = translations[this.currentLanguage];
        
        console.log('Translating page to:', this.currentLanguage);
        
        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTranslations[key]) {
                element.textContent = currentTranslations[key];
                console.log(`Translated ${key}:`, currentTranslations[key]);
            } else {
                console.warn(`Translation missing for key: ${key}`);
            }
        });
        
        // Update currency amounts
        this.updateCurrencyAmounts();
    }

    // Convert and format currency amounts
    updateCurrencyAmounts() {
        console.log('Updating currency amounts to:', this.currentCurrency);
        
        document.querySelectorAll('.currency-amount').forEach(element => {
            const amount = parseFloat(element.getAttribute('data-amount'));
            if (!isNaN(amount)) {
                let convertedAmount = amount;
                
                if (this.currentCurrency === 'EUR') {
                    convertedAmount = amount * this.exchangeRate;
                }
                
                // Format number with proper locale
                const locale = this.currentLanguage === 'en' ? 'en-US' : 
                             this.currentLanguage === 'nl' ? 'nl-NL' : 'de-DE';
                
                const formatted = new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: this.currentCurrency,
                    minimumFractionDigits: amount >= 1000 ? 0 : 2,
                    maximumFractionDigits: amount >= 1000 ? 0 : 2
                }).format(convertedAmount);
                
                element.textContent = formatted;
                console.log(`Currency converted: ${amount} -> ${formatted}`);
            }
        });
    }

    init() {
        console.log('AutoWealth AI initialized');
        this.animateNumbers();
        this.updateLiveStats();
    }

    setupEventListeners() {
        // CTA Button clicks
        const ctaButtons = document.querySelectorAll('#mainCTA, #finalCTA');
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', () => this.handleCTAClick());
        });

        // Modal close
        const closeModal = document.getElementById('closeModal');
        if (closeModal) {
            closeModal.addEventListener('click', () => this.closeInstallModal());
        }

        // PWA install prompt
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            console.log('PWA install prompt available');
        });

        // Handle app installed
        window.addEventListener('appinstalled', () => {
            console.log('AutoWealth AI was installed');
            this.deferredPrompt = null;
        });

        // Add language testing buttons (for development)
        this.addLanguageTestButtons();
    }

    // Add language test buttons for development
    addLanguageTestButtons() {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            const testButtons = document.createElement('div');
            testButtons.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                z-index: 10000;
                background: rgba(0,0,0,0.8);
                padding: 10px;
                border-radius: 5px;
                display: flex;
                gap: 5px;
            `;
            
            ['en', 'nl', 'de'].forEach(lang => {
                const btn = document.createElement('button');
                btn.textContent = lang.toUpperCase();
                btn.style.cssText = `
                    padding: 5px 10px;
                    background: ${this.currentLanguage === lang ? '#4299e1' : '#666'};
                    color: white;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                `;
                btn.onclick = () => {
                    this.currentLanguage = lang;
                    this.currentCurrency = (lang === 'nl' || lang === 'de') ? 'EUR' : 'USD';
                    this.translatePage();
                    // Update button colors
                    testButtons.querySelectorAll('button').forEach(b => {
                        b.style.background = '#666';
                    });
                    btn.style.background = '#4299e1';
                };
                testButtons.appendChild(btn);
            });
            
            document.body.appendChild(testButtons);
        }
    }

    handleCTAClick() {
        console.log('CTA clicked - Starting installation process');
        this.showInstallModal();
        this.startInstallProcess();
    }

    showInstallModal() {
        const modal = document.getElementById('installModal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    closeInstallModal() {
        const modal = document.getElementById('installModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    startInstallProcess() {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (!progressFill || !progressText) return;

        const translations = this.getTranslations();
        const currentTranslations = translations[this.currentLanguage];

        const steps = [
            { progress: 20, text: currentTranslations.initializing || 'Verifying account eligibility...' },
            { progress: 40, text: 'Connecting to trading servers...' },
            { progress: 60, text: 'Loading AI algorithms...' },
            { progress: 80, text: 'Initializing secure wallet...' },
            { progress: 100, text: 'Installation complete!' }
        ];

        let currentStep = 0;

        const updateProgress = () => {
            if (currentStep < steps.length) {
                const step = steps[currentStep];
                progressFill.style.width = step.progress + '%';
                progressText.textContent = step.text;
                currentStep++;
                
                if (currentStep < steps.length) {
                    setTimeout(updateProgress, 2000);
                } else {
                    // Installation complete - redirect to affiliate
                    setTimeout(() => {
                        this.redirectToAffiliate();
                    }, 1500);
                }
            }
        };

        updateProgress();
    }

    redirectToAffiliate() {
        // Replace with your actual affiliate URL
        const affiliateURL = 'https://your-affiliate-link.com';
        
        // Add language parameter to affiliate URL
        const url = new URL(affiliateURL);
        url.searchParams.set('lang', this.currentLanguage);
        url.searchParams.set('currency', this.currentCurrency);
        url.searchParams.set('source', 'autowealth-ai');
        
        console.log('Redirecting to affiliate:', url.toString());
        window.location.href = url.toString();
    }

    startLiveCounters() {
        // Live earnings counter
        this.animateCounter('liveEarnings', 847293, 950000, 30000);
        
        // Active users counter
        this.animateCounter('activeUsers', 23847, 25000, 1000);
        
        // Today's profit animation
        this.animateProfitCounter();
        
        // Update trading list
        this.updateTradingList();
    }

    animateCounter(elementId, start, max, interval) {
        const element = document.getElementById(elementId);
        if (!element) return;

        let current = start;
        
        setInterval(() => {
            const increase = Math.floor(Math.random() * 100 + 50);
            current = Math.min(current + increase, max);
            element.textContent = current.toLocaleString();
        }, interval);
    }

    animateProfitCounter() {
        const profitElement = document.getElementById('todayProfit');
        if (!profitElement) return;

        let currentProfit = 847.32;
        
        setInterval(() => {
            // Random profit increase between $0.50 - $5.00
            const increase = (Math.random() * 4.5 + 0.5);
            currentProfit += increase;
            
            // Update with proper currency formatting
            const amount = this.currentCurrency === 'EUR' ? currentProfit * this.exchangeRate : currentProfit;
            const symbol = this.currentCurrency === 'EUR' ? '€' : '$';
            
            profitElement.textContent = symbol + amount.toFixed(2);
        }, 8000 + Math.random() * 12000); // Random interval 8-20 seconds
    }

    updateTradingList() {
        const tradesList = document.querySelector('.trades-list');
        if (!tradesList) return;

        const pairs = ['EUR/USD', 'GBP/JPY', 'BTC/USD', 'ETH/USD', 'AUD/CAD', 'USD/CHF', 'NZD/USD'];
        
        setInterval(() => {
            const randomPair = pairs[Math.floor(Math.random() * pairs.length)];
            const profit = (Math.random() * 100 + 20).toFixed(2);
            
            // Convert to appropriate currency
            const convertedProfit = this.currentCurrency === 'EUR' ? 
                (parseFloat(profit) * this.exchangeRate).toFixed(2) : profit;
            const symbol = this.currentCurrency === 'EUR' ? '€' : '$';
            
            // Create new trade item
            const newTrade = document.createElement('div');
            newTrade.className = 'trade-item';
            newTrade.style.opacity = '0';
            newTrade.style.transform = 'translateY(-20px)';
            
            newTrade.innerHTML = `
                <div class="trade-info">
                    <span class="trade-pair">${randomPair}</span>
                    <span class="trade-time">just now</span>
                </div>
                <div class="trade-profit positive">+${symbol}${convertedProfit}</div>
            `;
            
            // Add to top of list
            tradesList.insertBefore(newTrade, tradesList.firstChild);
            
            // Animate in
            setTimeout(() => {
                newTrade.style.transition = 'all 0.3s ease';
                newTrade.style.opacity = '1';
                newTrade.style.transform = 'translateY(0)';
            }, 100);
            
            // Remove oldest trade if more than 3
            const trades = tradesList.querySelectorAll('.trade-item');
            if (trades.length > 3) {
                const oldestTrade = trades[trades.length - 1];
                oldestTrade.style.transition = 'all 0.3s ease';
                oldestTrade.style.opacity = '0';
                oldestTrade.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    if (oldestTrade.parentNode) {
                        oldestTrade.parentNode.removeChild(oldestTrade);
                    }
                }, 300);
            }
            
        }, 15000 + Math.random() * 10000); // Random interval 15-25 seconds
    }

    updateLiveStats() {
        // Update live stats every few seconds
        setInterval(() => {
            const liveEarnings = document.getElementById('liveEarnings');
            const activeUsers = document.getElementById('activeUsers');
            
            if (liveEarnings) {
                const current = parseInt(liveEarnings.textContent.replace(/[,$€]/g, ''));
                const increase = Math.floor(Math.random() * 1000 + 500);
                const newAmount = current + increase;
                
                if (this.currentCurrency === 'EUR') {
                    liveEarnings.textContent = '€' + (newAmount * this.exchangeRate).toLocaleString();
                } else {
                    liveEarnings.textContent = '$' + newAmount.toLocaleString();
                }
            }
            
            if (activeUsers) {
                const current = parseInt(activeUsers.textContent.replace(/[,]/g, ''));
                const change = Math.floor(Math.random() * 20 - 10); // +/- 10 users
                activeUsers.textContent = (current + change).toLocaleString();
            }
        }, 30000); // Update every 30 seconds
    }

    setupPWA() {
        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('SW registered:', registration);
                })
                .catch(error => {
                    console.log('SW registration failed:', error);
                });
        }

        // Handle PWA installation
        this.handlePWAInstall();
    }

    handlePWAInstall() {
        // Check if app is already installed
        if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
            console.log('App is running in standalone mode');
            return;
        }

        // Check if app can be installed
        if (this.deferredPrompt) {
            console.log('PWA can be installed');
        }
    }

    // Animate number counters
    animateNumbers() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const finalNumber = parseInt(element.textContent.replace(/[^\d]/g, ''));
                    this.countUp(element, 0, finalNumber, 2000);
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Observe stat numbers
        document.querySelectorAll('.stat-number').forEach(el => {
            if (!el.textContent.includes('%') && !el.textContent.includes('/')) {
                observer.observe(el);
            }
        });
    }

    countUp(element, start, end, duration) {
        const startTime = performance.now();
        const originalText = element.textContent;
        const isPercentage = originalText.includes('%');
        const isCurrency = originalText.includes('$') || originalText.includes('€');
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            
            if (isCurrency) {
                const symbol = this.currentCurrency === 'EUR' ? '€' : '$';
                const amount = this.currentCurrency === 'EUR' ? current * this.exchangeRate : current;
                element.textContent = symbol + Math.floor(amount).toLocaleString();
            } else if (isPercentage) {
                element.textContent = current + '%';
            } else {
                element.textContent = current.toLocaleString();
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.autoWealthApp = new AutoWealthApp();
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add scroll animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.step, .testimonial, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Export for module usage
export default AutoWealthApp;