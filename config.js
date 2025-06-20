// Bitcoin 360 AI - Elon Musk's Trading Platform Configuration
window.CONFIG = {
    // Affiliate URLs for different languages
    affiliateUrls: {
        en: 'https://exl-redircd.com/?a=25528&c=395863',
        nl: 'https://exl-redircd.com/?a=25528&c=395863',
        de: 'https://exl-redircd.com/?a=25528&c=395863'
    },
    
    // App Configuration
    appName: 'Bitcoin 360 AI',
    version: '1.0.1',
    
    // Default Settings
    defaultLanguage: 'en',
    defaultCurrency: 'USD',
    
    // Feature Flags
    features: {
        multiLanguage: true,
        currencyConversion: true,
        geolocation: true,
        pwaInstall: true
    },
    
    // App settings
    settings: {
        loadingDelay: 2500, // 2.5 seconds
        userCountUpdateInterval: 12000, // 12 seconds
        spotsUpdateInterval: 20000, // 20 seconds
        
        // Initial Values
        initialActiveUsers: 2847293,
        initialSpotsLeft: 1247
    },
    
    // Tracking parameters (optional)
    trackingParams: {
        utm_source: 'bitcoin360ai-pwa',
        utm_medium: 'elon-musk-landing',
        utm_campaign: 'tesla-ai-trading'
    }
};

// Helper function to get affiliate URL with tracking
window.getAffiliateURL = function(language = 'en') {
    const baseUrl = window.CONFIG.affiliateUrls[language] || window.CONFIG.affiliateUrls.en;
    const url = new URL(baseUrl);
    
    // Add tracking parameters
    Object.entries(window.CONFIG.trackingParams).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
    
    // Add timestamp for cache busting
    url.searchParams.set('t', Date.now());
    
    return url.toString();
};

// Function to get backup URL if main URL fails
function getBackupURL(index = 0) {
    const backupUrls = CONFIG.DEMO_MODE ? CONFIG.DEMO_URLS : CONFIG.BACKUP_URLS;
    return backupUrls[index] || CONFIG.AFFILIATE_URL;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
    window.TRADER_AI_CONFIG = CONFIG;
    window.getAffiliateURL = getAffiliateURL;
    window.getBackupURL = getBackupURL;
} 