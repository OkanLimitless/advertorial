// Trader AI PWA Configuration
// Replace these values with your actual affiliate URLs and settings

const CONFIG = {
    // Your main affiliate URL - users will be directed here after "installing" the app
    AFFILIATE_URL: 'https://your-affiliate-platform.com/signup?ref=your-id',
    
    // Alternative/backup URLs (optional)
    BACKUP_URLS: [
        'https://backup-affiliate-platform.com/signup?ref=your-id',
        'https://another-platform.com/register?affiliate=your-id'
    ],
    
    // Demo/testing URLs (for development)
    DEMO_URLS: [
        'https://demo.tradingview.com/widget/',
        'https://www.investing.com/charts/',
        'https://finance.yahoo.com/chart/'
    ],
    
    // App settings
    APP_SETTINGS: {
        // App branding
        APP_NAME: 'Trader AI',
        APP_DESCRIPTION: 'The Automated Trading System for 2025',
        
        // Loading screen text
        LOADING_TEXT: 'Initializing Trader AI',
        LOADING_SUBTEXT: 'Connecting to trading servers and loading your dashboard...',
        
        // Show demo mode (for testing)
        DEMO_MODE: false, // Set to true to use demo URLs instead of affiliate URLs
        
        // Analytics tracking ID (optional)
        ANALYTICS_ID: '', // e.g., 'GA_MEASUREMENT_ID' or 'GTM-XXXXXXX'
        
        // Affiliate tracking parameters
        TRACKING_PARAMS: {
            utm_source: 'trader-ai-pwa',
            utm_medium: 'app-install',
            utm_campaign: 'mobile-app'
        }
    },
    
    // Visual customization
    BRANDING: {
        PRIMARY_COLOR: '#0066ff',
        ACCENT_COLOR: '#00f5ff',
        BACKGROUND_COLOR: '#0f0f23',
        
        // Custom logo URL (optional)
        LOGO_URL: '', // Leave empty to use default AI logo
        
        // Company/affiliate name
        COMPANY_NAME: 'Your Trading Company'
    }
};

// Function to get the current affiliate URL with tracking parameters
function getAffiliateURL() {
    const baseUrl = CONFIG.DEMO_MODE ? CONFIG.DEMO_URLS[0] : CONFIG.AFFILIATE_URL;
    const url = new URL(baseUrl);
    
    // Add tracking parameters
    Object.entries(CONFIG.APP_SETTINGS.TRACKING_PARAMS).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
    
    // Add timestamp for cache busting
    url.searchParams.set('t', Date.now());
    
    return url.toString();
}

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