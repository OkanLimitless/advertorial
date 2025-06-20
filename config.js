// AutoWealth AI PWA Configuration
// Replace these values with your actual affiliate URLs and settings

const CONFIG = {
    // Affiliate URLs for different languages
    affiliateUrls: {
        en: 'https://exl-redircd.com/?a=25528&c=395863',
        nl: 'https://exl-redircd.com/?a=25528&c=395863',
        de: 'https://exl-redircd.com/?a=25528&c=395863'
    },
    
    // App Configuration
    appName: 'Bitcoin 360 AI',
    version: '1.0.0',
    
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
    
    // Affiliate URL - Replace this with your actual affiliate link
    AFFILIATE_URL: 'https://your-affiliate-link.com',
    
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
        APP_NAME: 'AutoWealth AI',
        APP_DESCRIPTION: 'The Automated Trading System for 2025',
        APP_VERSION: '2.1.0',
        
        // Loading screen text
        LOADING_TEXT: 'Initializing AutoWealth AI',
        LOADING_SUBTEXT: 'Connecting to trading servers and loading your dashboard...',
        
        // Show demo mode (for testing)
        DEMO_MODE: false, // Set to true to use demo URLs instead of affiliate URLs
        
        // Analytics tracking ID (optional)
        ANALYTICS_ID: '', // e.g., 'GA_MEASUREMENT_ID' or 'GTM-XXXXXXX'
        
        // Affiliate tracking parameters
        TRACKING_PARAMS: {
            utm_source: 'autowealth-ai-pwa',
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
    },
    
    // Installation Settings
    INSTALLATION_DELAY: 3000, // 3 seconds
    
    // Animation Settings
    LIVE_COUNT_UPDATE_INTERVAL: 3000, // 3 seconds
    SPOTS_DECREASE_INTERVAL: 8000, // 8 seconds
    TRADING_DATA_UPDATE_INTERVAL: 5000, // 5 seconds
    
    // Initial Values
    INITIAL_LIVE_COUNT: 47293,
    INITIAL_SPOTS_REMAINING: 127,
    
    // Countdown Timer (hours:minutes:seconds)
    COUNTDOWN_START: {
        hours: 23,
        minutes: 45,
        seconds: 12
    },
    
    // Trading Data Simulation
    BASE_BALANCE: 47382.91,
    BASE_DAILY_CHANGE: 2847.33,
    
    // Company References (for social proof)
    FEATURED_COMPANIES: [
        'Goldman Sachs',
        'JP Morgan',
        'Morgan Stanley',
        'BlackRock'
    ],
    
    // Press Mentions
    PRESS_MENTIONS: [
        { outlet: 'TechCrunch', quote: 'AutoWealth AI is revolutionizing how people invest...' },
        { outlet: 'Forbes', quote: 'The future of automated trading is here...' },
        { outlet: 'Bloomberg', quote: 'AI trading platform sees 500% user growth...' },
        { outlet: 'CNBC', quote: 'Ordinary people making extraordinary profits...' }
    ]
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