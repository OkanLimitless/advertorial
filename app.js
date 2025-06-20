// Configuration
const CONFIG = {
    APP_NAME: 'AutoWealth AI',
    AFFILIATE_URL: 'https://example.com/affiliate-link',
    INSTALL_DELAY: 3000,
    GEOLOCATION_API: 'https://ipapi.co/json/'
};

// Translation data
const translations = {
    en: {
        // Header & Navigation
        live: "LIVE",
        earned_24h: "earned by users in the last 24 hours",
        users_earning: "users currently earning",
        brand: "AutoWealth AI",
        active_users: "Active Users",
        avg_weekly: "Avg Weekly",

        // Hero Section
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

        // Dashboard
        dashboard_title: "Your AutoWealth Dashboard",
        ai_active: "AI Active",
        today_profit: "Today's Profit",
        since_morning: "since morning",
        recent_trades: "Recent Trades",

        // How It Works
        how_it_works_title: "How It Works - Simple as 1, 2, 3",
        step1_title: "Sign Up & Get Verified",
        step1_desc: "Quick 2-minute registration. Our team calls to verify your account and ensure you're qualified for the program.",
        step2_title: "AI Starts Trading",
        step2_desc: "Our advanced AI analyzes markets 24/7 and executes profitable trades automatically. No experience needed.",
        step3_title: "Withdraw Your Profits",
        step3_desc: "Watch your account grow daily. Withdraw your profits anytime - most users see results in the first week.",

        // Testimonials
        testimonials_title: "What Our Users Are Saying",
        testimonial1: "I was skeptical at first, but AutoWealth AI has completely changed my financial situation. I'm making more in a week than I used to make in a month!",
        testimonial2: "The best part is I don't have to do anything. The AI handles everything while I focus on my family and other interests. Passive income at its finest!",
        testimonial3: "I've tried other trading platforms before, but nothing comes close to AutoWealth AI. The results speak for themselves!",
        location_teacher: "Teacher, Berlin",
        location_engineer: "Engineer, Amsterdam", 
        location_nurse: "Nurse, Munich",
        this_week: "this week",
        this_month: "this month",

        // Stats
        success_rate: "Success Rate",
        ai_trading: "AI Trading",

        // Final CTA
        final_cta_title: "Ready to Start Earning?",
        final_cta_desc: "Join thousands of people who are already using AutoWealth AI to build their financial future.",
        limited_spots: "⚡ Limited spots available - ",
        spots_left: "spots left today",

        // Footer
        copyright: "© 2024 AutoWealth AI. All rights reserved.",
        risk_warning: "Risk Warning: Trading involves risk. Past performance does not guarantee future results.",

        // Installation Modal
        installing: "Installing AutoWealth AI...",
        initializing: "Initializing secure connection...",
        encryption_enabled: "Bank-level encryption enabled",
        algorithms_loaded: "AI trading algorithms loaded",
        market_data_connected: "Real-time market data connected"
    },
    nl: {
        // Header & Navigation
        live: "LIVE",
        earned_24h: "verdiend door gebruikers in de afgelopen 24 uur",
        users_earning: "gebruikers verdienen momenteel",
        brand: "AutoWealth AI",
        active_users: "Actieve Gebruikers",
        avg_weekly: "Gem. Wekelijks",

        // Hero Section
        hero_title: "Nieuwe AI Doet Uw Trading Terwijl U Slaapt",
        hero_subtitle_1: "Sluit u aan bij 847.000+ mensen die gemiddeld",
        per_week: "per week verdienen",
        hero_subtitle_2: "met onze geautomatiseerde welvaart assistent. Geen ervaring nodig.",
        feature_automated: "100% Geautomatiseerde Trading",
        feature_withdrawals: "Dagelijkse Winst Opnames",
        feature_security: "Bank-Niveau Beveiliging",
        cta_main: "Krijg Nu Gratis Toegang",
        cta_subtitle: "Installatie duurt 2 minuten",
        cta_note: "Uw informatie is 100% veilig. Geen creditcard vereist.",

        // Dashboard
        dashboard_title: "Uw AutoWealth Dashboard",
        ai_active: "AI Actief",
        today_profit: "Winst van Vandaag",
        since_morning: "sinds vanmorgen",
        recent_trades: "Recente Trades",

        // How It Works
        how_it_works_title: "Hoe Het Werkt - Simpel als 1, 2, 3",
        step1_title: "Registreer & Word Geverifieerd",
        step1_desc: "Snelle 2-minuten registratie. Ons team belt om uw account te verifiëren en ervoor te zorgen dat u gekwalificeerd bent voor het programma.",
        step2_title: "AI Begint Trading",
        step2_desc: "Onze geavanceerde AI analyseert markten 24/7 en voert automatisch winstgevende trades uit. Geen ervaring nodig.",
        step3_title: "Trek Uw Winsten Op",
        step3_desc: "Zie uw account dagelijks groeien. Trek uw winsten op elk moment op - de meeste gebruikers zien resultaten in de eerste week.",

        // Testimonials
        testimonials_title: "Wat Onze Gebruikers Zeggen",
        testimonial1: "Ik was eerst sceptisch, maar AutoWealth AI heeft mijn financiële situatie volledig veranderd. Ik verdien meer in een week dan ik vroeger in een maand verdiende!",
        testimonial2: "Het beste deel is dat ik niets hoef te doen. De AI regelt alles terwijl ik me focus op mijn familie en andere interesses. Passief inkomen op zijn best!",
        testimonial3: "Ik heb eerder andere trading platforms geprobeerd, maar niets komt in de buurt van AutoWealth AI. De resultaten spreken voor zich!",
        location_teacher: "Leraar, Berlijn",
        location_engineer: "Ingenieur, Amsterdam",
        location_nurse: "Verpleegster, München",
        this_week: "deze week",
        this_month: "deze maand",

        // Stats
        success_rate: "Succespercentage",
        ai_trading: "AI Trading",

        // Final CTA
        final_cta_title: "Klaar om te Beginnen met Verdienen?",
        final_cta_desc: "Sluit u aan bij duizenden mensen die AutoWealth AI al gebruiken om hun financiële toekomst op te bouwen.",
        limited_spots: "⚡ Beperkte plekken beschikbaar - ",
        spots_left: "plekken over vandaag",

        // Footer
        copyright: "© 2024 AutoWealth AI. Alle rechten voorbehouden.",
        risk_warning: "Risicowaarschuwing: Trading brengt risico's met zich mee. Prestaties uit het verleden garanderen geen toekomstige resultaten.",

        // Installation Modal
        installing: "AutoWealth AI Installeren...",
        initializing: "Veilige verbinding initialiseren...",
        encryption_enabled: "Bank-niveau encryptie ingeschakeld",
        algorithms_loaded: "AI trading algoritmes geladen",
        market_data_connected: "Real-time marktdata verbonden"
    },
    de: {
        // Header & Navigation
        live: "LIVE",
        earned_24h: "von Nutzern in den letzten 24 Stunden verdient",
        users_earning: "Nutzer verdienen derzeit",
        brand: "AutoWealth AI",
        active_users: "Aktive Nutzer",
        avg_weekly: "Durchschn. Wöchentlich",

        // Hero Section
        hero_title: "Neue KI Macht Ihr Trading Während Sie Schlafen",
        hero_subtitle_1: "Schließen Sie sich 847.000+ Menschen an, die durchschnittlich",
        per_week: "pro Woche verdienen",
        hero_subtitle_2: "mit unserem automatisierten Wohlstands-Assistenten. Keine Erfahrung erforderlich.",
        feature_automated: "100% Automatisiertes Trading",
        feature_withdrawals: "Tägliche Gewinn-Abhebungen",
        feature_security: "Bank-Level Sicherheit",
        cta_main: "Jetzt Kostenlosen Zugang Erhalten",
        cta_subtitle: "Einrichtung dauert 2 Minuten",
        cta_note: "Ihre Informationen sind 100% sicher. Keine Kreditkarte erforderlich.",

        // Dashboard
        dashboard_title: "Ihr AutoWealth Dashboard",
        ai_active: "KI Aktiv",
        today_profit: "Heutiger Gewinn",
        since_morning: "seit heute Morgen",
        recent_trades: "Aktuelle Trades",

        // How It Works
        how_it_works_title: "Wie Es Funktioniert - Einfach wie 1, 2, 3",
        step1_title: "Registrieren & Verifiziert Werden",
        step1_desc: "Schnelle 2-Minuten Registrierung. Unser Team ruft an, um Ihr Konto zu verifizieren und sicherzustellen, dass Sie für das Programm qualifiziert sind.",
        step2_title: "KI Beginnt Trading",
        step2_desc: "Unsere fortschrittliche KI analysiert Märkte 24/7 und führt automatisch profitable Trades aus. Keine Erfahrung erforderlich.",
        step3_title: "Gewinne Abheben",
        step3_desc: "Sehen Sie Ihr Konto täglich wachsen. Heben Sie Ihre Gewinne jederzeit ab - die meisten Nutzer sehen Ergebnisse in der ersten Woche.",

        // Testimonials
        testimonials_title: "Was Unsere Nutzer Sagen",
        testimonial1: "Ich war zuerst skeptisch, aber AutoWealth AI hat meine finanzielle Situation völlig verändert. Ich verdiene mehr in einer Woche als ich früher in einem Monat verdient habe!",
        testimonial2: "Das Beste daran ist, dass ich nichts tun muss. Die KI kümmert sich um alles, während ich mich auf meine Familie und andere Interessen konzentriere. Passives Einkommen vom Feinsten!",
        testimonial3: "Ich habe schon andere Trading-Plattformen ausprobiert, aber nichts kommt an AutoWealth AI heran. Die Ergebnisse sprechen für sich!",
        location_teacher: "Lehrer, Berlin",
        location_engineer: "Ingenieur, Amsterdam",
        location_nurse: "Krankenschwester, München",
        this_week: "diese Woche",
        this_month: "diesen Monat",

        // Stats
        success_rate: "Erfolgsrate",
        ai_trading: "KI Trading",

        // Final CTA
        final_cta_title: "Bereit zum Verdienen?",
        final_cta_desc: "Schließen Sie sich Tausenden von Menschen an, die AutoWealth AI bereits nutzen, um ihre finanzielle Zukunft aufzubauen.",
        limited_spots: "⚡ Begrenzte Plätze verfügbar - ",
        spots_left: "Plätze heute übrig",

        // Footer
        copyright: "© 2024 AutoWealth AI. Alle Rechte vorbehalten.",
        risk_warning: "Risikowarnung: Trading birgt Risiken. Vergangene Performance garantiert keine zukünftigen Ergebnisse.",

        // Installation Modal
        installing: "AutoWealth AI Installieren...",
        initializing: "Sichere Verbindung initialisieren...",
        encryption_enabled: "Bank-Level Verschlüsselung aktiviert",
        algorithms_loaded: "KI Trading-Algorithmen geladen",
        market_data_connected: "Echtzeit-Marktdaten verbunden"
    }
};

// Global variables
let currentLanguage = 'en';
let currentCurrency = 'USD';
let userCountry = null;

// Detect user location and set language/currency
async function detectLocationAndSetLanguage() {
    try {
        console.log('Detecting user location...');
        const response = await fetch(CONFIG.GEOLOCATION_API);
        const data = await response.json();
        
        console.log('Location data:', data);
        userCountry = data.country_code?.toLowerCase();
        
        // Set language and currency based on country
        if (userCountry === 'nl') {
            currentLanguage = 'nl';
            currentCurrency = 'EUR';
        } else if (userCountry === 'de') {
            currentLanguage = 'de'; 
            currentCurrency = 'EUR';
        } else {
            currentLanguage = 'en';
            currentCurrency = 'USD';
        }
        
        console.log(`Detected: ${userCountry} -> Language: ${currentLanguage}, Currency: ${currentCurrency}`);
        
        // Apply translations and currency
        applyTranslations();
        updateCurrencyDisplay();
        
    } catch (error) {
        console.error('Failed to detect location:', error);
        // Fallback to English/USD
        currentLanguage = 'en';
        currentCurrency = 'USD';
        applyTranslations();
        updateCurrencyDisplay();
    }
}

// Apply translations to the page
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update document title and meta description
    if (currentLanguage === 'nl') {
        document.title = 'AutoWealth AI - Geautomatiseerde Trading Assistent';
        document.querySelector('meta[name="description"]').content = 'AI-aangedreven trading assistent die passief inkomen genereert terwijl u slaapt. Sluit u aan bij 847.000+ gebruikers die gemiddeld €2.847 per week verdienen.';
    } else if (currentLanguage === 'de') {
        document.title = 'AutoWealth AI - Automatisierter Trading-Assistent';
        document.querySelector('meta[name="description"]').content = 'KI-gestützter Trading-Assistent, der passives Einkommen generiert, während Sie schlafen. Schließen Sie sich 847.000+ Nutzern an, die durchschnittlich €2.847 pro Woche verdienen.';
    }
}

// Update currency display
function updateCurrencyDisplay() {
    const currencyElements = document.querySelectorAll('.currency-amount');
    currencyElements.forEach(element => {
        const amount = parseFloat(element.getAttribute('data-amount'));
        if (!isNaN(amount)) {
            let convertedAmount = amount;
            let symbol = '$';
            
            if (currentCurrency === 'EUR') {
                // Convert USD to EUR (approximate rate)
                convertedAmount = Math.round(amount * 0.85);
                symbol = '€';
            }
            
            // Format with proper locale
            const locale = currentLanguage === 'en' ? 'en-US' : 
                          currentLanguage === 'nl' ? 'nl-NL' : 'de-DE';
            
            if (convertedAmount >= 1000) {
                element.textContent = symbol + convertedAmount.toLocaleString(locale);
            } else {
                element.textContent = symbol + convertedAmount.toFixed(2);
            }
        }
    });
}

// Live counters and animations
function startLiveCounters() {
    // Live earnings counter
    const liveEarnings = document.getElementById('liveEarnings');
    const todayProfit = document.getElementById('todayProfit');
    const activeUsers = document.getElementById('activeUsers');
    const spotsRemaining = document.getElementById('spotsRemaining');
    
    if (liveEarnings) {
        let earnings = currentCurrency === 'EUR' ? 720000 : 847293;
        setInterval(() => {
            earnings += Math.floor(Math.random() * 50) + 10;
            const symbol = currentCurrency === 'EUR' ? '€' : '$';
            liveEarnings.textContent = symbol + earnings.toLocaleString();
        }, 3000);
    }
    
    if (todayProfit) {
        let profit = currentCurrency === 'EUR' ? 720.12 : 847.32;
        setInterval(() => {
            profit += Math.random() * 5;
            const symbol = currentCurrency === 'EUR' ? '€' : '$';
            todayProfit.textContent = symbol + profit.toFixed(2);
        }, 5000);
    }
    
    if (activeUsers) {
        let users = 23847;
        setInterval(() => {
            users += Math.floor(Math.random() * 3);
            activeUsers.textContent = users.toLocaleString();
        }, 7000);
    }
    
    if (spotsRemaining) {
        let spots = 127;
        setInterval(() => {
            if (spots > 50 && Math.random() > 0.7) {
                spots--;
                spotsRemaining.textContent = spots;
            }
        }, 15000);
    }
}

// Installation modal functionality
function showInstallModal() {
    const modal = document.getElementById('installModal');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (!modal) return;
    
    modal.style.display = 'flex';
    
    // Progress messages based on language
    const progressMessages = {
        en: [
            "Initializing secure connection...",
            "Verifying account eligibility...", 
            "Loading AI trading algorithms...",
            "Connecting to market data feeds...",
            "Finalizing installation..."
        ],
        nl: [
            "Veilige verbinding initialiseren...",
            "Account geschiktheid verifiëren...",
            "AI trading algoritmes laden...",
            "Verbinden met marktdata feeds...",
            "Installatie afronden..."
        ],
        de: [
            "Sichere Verbindung initialisieren...",
            "Konto-Berechtigung überprüfen...",
            "KI Trading-Algorithmen laden...",
            "Mit Marktdaten-Feeds verbinden...",
            "Installation abschließen..."
        ]
    };
    
    const messages = progressMessages[currentLanguage] || progressMessages.en;
    let progress = 0;
    let messageIndex = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress > 100) progress = 100;
        
        progressFill.style.width = progress + '%';
        
        if (messageIndex < messages.length - 1 && progress > (messageIndex + 1) * 20) {
            messageIndex++;
            progressText.textContent = messages[messageIndex];
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                modal.style.display = 'none';
                // Redirect to affiliate URL
                window.location.href = CONFIG.AFFILIATE_URL;
            }, 1000);
        }
    }, 200);
}

// Event listeners
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM loaded, detecting location...');
    
    // Detect location and set language first
    await detectLocationAndSetLanguage();
    
    // Start live counters
    startLiveCounters();
    
    // CTA button handlers
    const ctaButtons = document.querySelectorAll('#mainCTA, #finalCTA');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showInstallModal();
        });
    });
    
    // Close modal handler
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            document.getElementById('installModal').style.display = 'none';
        });
    }
    
    // Close modal on outside click
    const modal = document.getElementById('installModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

// PWA Installation (fallback)
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(registration => console.log('SW registered'))
        .catch(error => console.log('SW registration failed'));
}