// Delta Air Lines Landing Page Configuration
window.CONFIG = {
    // Phone number for customer service
    phoneNumber: '+18557920748',
    displayPhone: '1-855-792-0748',
    
    // App Configuration
    appName: 'Delta Air Lines Customer Service',
    companyName: 'Delta Air Lines',
    version: '2.0.0',
    
    // Feature Flags
    features: {
        phoneTracking: true,
        engagementTracking: true,
        scrollAnimations: true,
        hoverEffects: true,
        abTesting: true
    },
    
    // App settings
    settings: {
        waitTimeUpdateInterval: 15000, // 15 seconds
        pulseInterval: 2000, // 2 seconds
        
        // Wait time variations for urgency
        waitTimes: [
            '2-3 minutes',
            '3-4 minutes', 
            '2-3 minutes',
            '1-2 minutes',
            '3-5 minutes'
        ]
    },
    
    // Tracking parameters (optional)
    trackingParams: {
        utm_source: 'delta-airlines-pwa',
        utm_medium: 'customer-service-landing',
        utm_campaign: 'phone-support'
    }
};

// Helper function to get phone number with tracking
window.getPhoneNumber = function() {
    return window.CONFIG.phoneNumber;
};

// Helper function to get display phone number
window.getDisplayPhone = function() {
    return window.CONFIG.displayPhone;
};

// Function to track phone calls
window.trackPhoneCall = function() {
    console.log('Phone call tracked:', window.CONFIG.displayPhone);
    
    // Send tracking event if analytics available
    if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_call', {
            event_category: 'engagement',
            event_label: 'delta_customer_service',
            value: 1
        });
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
    window.DELTA_CONFIG = CONFIG;
    window.getPhoneNumber = getPhoneNumber;
    window.getDisplayPhone = getDisplayPhone;
    window.trackPhoneCall = trackPhoneCall;
} 