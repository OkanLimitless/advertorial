// Configuration
const CONFIG = {
    GEOLOCATION_API: 'https://ipapi.co/json/',
    AFFILIATE_URL: 'https://example.com/affiliate-link' // Will be updated with real URL
};

// Quiz Questions
const quizQuestions = {
    en: [
        {
            question: "What's your main goal with Bitcoin trading?",
            answers: [
                "Generate passive income while I sleep",
                "Learn about cryptocurrency markets", 
                "Replace my full-time job income",
                "Build long-term wealth"
            ],
            correct: 0
        },
        {
            question: "How much time do you want to spend monitoring trades?",
            answers: [
                "I want completely automated trading",
                "A few minutes per day",
                "1-2 hours daily",
                "I prefer hands-on trading"
            ],
            correct: 0
        },
        {
            question: "What's your experience with Bitcoin and crypto?",
            answers: [
                "Complete beginner - need AI to handle everything",
                "I know the basics",
                "Intermediate knowledge",
                "Advanced trader"
            ],
            correct: 0
        }
    ],
    nl: [
        {
            question: "Wat is uw hoofddoel met Bitcoin trading?",
            answers: [
                "Passief inkomen genereren terwijl ik slaap",
                "Leren over cryptocurrency markten",
                "Mijn voltijds baan inkomen vervangen", 
                "Langetermijn vermogen opbouwen"
            ],
            correct: 0
        },
        {
            question: "Hoeveel tijd wilt u besteden aan het monitoren van trades?",
            answers: [
                "Ik wil volledig geautomatiseerde trading",
                "Een paar minuten per dag",
                "1-2 uur per dag",
                "Ik verkies hands-on trading"
            ],
            correct: 0
        },
        {
            question: "Wat is uw ervaring met Bitcoin en crypto?",
            answers: [
                "Complete beginner - heb AI nodig om alles te regelen",
                "Ik ken de basis",
                "Gemiddelde kennis",
                "Gevorderde trader"
            ],
            correct: 0
        }
    ],
    de: [
        {
            question: "Was ist Ihr Hauptziel beim Bitcoin-Trading?",
            answers: [
                "Passives Einkommen generieren während ich schlafe",
                "Über Kryptowährungsmärkte lernen",
                "Mein Vollzeit-Gehalt ersetzen",
                "Langfristigen Wohlstand aufbauen"
            ],
            correct: 0
        },
        {
            question: "Wie viel Zeit möchten Sie mit der Überwachung von Trades verbringen?",
            answers: [
                "Ich möchte vollständig automatisierten Handel",
                "Ein paar Minuten pro Tag",
                "1-2 Stunden täglich", 
                "Ich bevorzuge hands-on Trading"
            ],
            correct: 0
        },
        {
            question: "Wie ist Ihre Erfahrung mit Bitcoin und Krypto?",
            answers: [
                "Kompletter Anfänger - brauche KI für alles",
                "Ich kenne die Grundlagen",
                "Mittlere Kenntnisse",
                "Fortgeschrittener Trader"
            ],
            correct: 0
        }
    ]
};

// Translations
const translations = {
    en: {
        // Welcome Screen
        app_name: "Bitcoin 360 AI",
        currency_symbol: "$",
        earning_period: "Average Weekly Earnings",
        user_count: "Join 847,000+ Users",
        feature_ai: "AI Does Everything",
        feature_passive: "Earn While You Sleep",
        feature_simple: "100% Automated",
        cta_button: "Get Started - It's Free",
        cta_note: "No experience needed • Takes 2 minutes",

        // Demo Screen
        demo_wallet: "Your Bitcoin Trading Wallet",
        demo_subtitle: "Watch your crypto portfolio grow in real-time",
        portfolio_value: "Portfolio Value",
        live: "LIVE",
        ai_trading: "AI Trading Active",
        recent_trades: "Recent AI Trades",
        pause_demo: "Pause Demo",
        looks_good: "Looks Profitable! Continue",

        // Quiz Screen
        quick_assessment: "Quick Crypto Assessment",
        assessment_desc: "Help us optimize your trading strategy",
        select_answer: "Select an answer",

        // Signup Screen
        congratulations: "Congratulations!",
        ready_to_earn: "You're ready to start earning with Bitcoin 360 AI",
        benefit_bitcoin: "Trade Bitcoin & top cryptocurrencies",
        benefit_ai: "AI handles all trading decisions",
        benefit_profit: "Keep 100% of your profits",
        benefit_secure: "Bank-level security & encryption",
        access_platform: "Access Bitcoin 360 AI Platform",
        disclaimer: "Click to access your exclusive Bitcoin trading platform. 100% secure and confidential.",

        // Loading Modal
        setting_up_account: "Setting Up Your Bitcoin 360 AI Account...",
        please_wait: "Please wait while we prepare your trading platform",
        step_verify: "Verifying crypto markets...",
        step_account: "Activating your account...",
        step_ai: "Initializing AI trading algorithms..."
    },
    nl: {
        // Welcome Screen
        app_name: "Bitcoin 360 AI",
        currency_symbol: "€",
        earning_period: "Gemiddelde Wekelijkse Verdiensten",
        user_count: "Doe mee met 847.000+ Gebruikers",
        feature_ai: "AI Doet Alles",
        feature_passive: "Verdien Terwijl U Slaapt",
        feature_simple: "100% Geautomatiseerd",
        cta_button: "Begin Nu - Het Is Gratis",
        cta_note: "Geen ervaring nodig • Duurt 2 minuten",

        // Demo Screen
        demo_wallet: "Uw Bitcoin Trading Wallet",
        demo_subtitle: "Zie uw crypto portfolio groeien in real-time",
        portfolio_value: "Portfolio Waarde",
        live: "LIVE",
        ai_trading: "AI Trading Actief",
        recent_trades: "Recente AI Trades",
        pause_demo: "Pauzeer Demo",
        looks_good: "Ziet er winstgevend uit! Doorgaan",

        // Quiz Screen
        quick_assessment: "Snelle Crypto Beoordeling",
        assessment_desc: "Help ons uw trading strategie te optimaliseren",
        select_answer: "Selecteer een antwoord",

        // Signup Screen
        congratulations: "Gefeliciteerd!",
        ready_to_earn: "U bent klaar om te verdienen met Bitcoin 360 AI",
        benefit_bitcoin: "Handel Bitcoin & top cryptocurrencies",
        benefit_ai: "AI regelt alle trading beslissingen",
        benefit_profit: "Behoud 100% van uw winsten",
        benefit_secure: "Bank-niveau beveiliging & encryptie",
        access_platform: "Toegang Bitcoin 360 AI Platform",
        disclaimer: "Klik om toegang te krijgen tot uw exclusieve Bitcoin trading platform. 100% veilig en vertrouwelijk.",

        // Loading Modal
        setting_up_account: "Uw Bitcoin 360 AI Account Instellen...",
        please_wait: "Wacht alstublieft terwijl we uw trading platform voorbereiden",
        step_verify: "Crypto markten verifiëren...",
        step_account: "Uw account activeren...",
        step_ai: "AI trading algoritmes initialiseren..."
    },
    de: {
        // Welcome Screen
        app_name: "Bitcoin 360 AI",
        currency_symbol: "€",
        earning_period: "Durchschnittliche Wöchentliche Gewinne",
        user_count: "Schließen Sie sich 847.000+ Nutzern an",
        feature_ai: "KI Macht Alles",
        feature_passive: "Verdienen Im Schlaf",
        feature_simple: "100% Automatisiert",
        cta_button: "Jetzt Starten - Kostenlos",
        cta_note: "Keine Erfahrung nötig • Dauert 2 Minuten",

        // Demo Screen
        demo_wallet: "Ihr Bitcoin Trading Wallet",
        demo_subtitle: "Sehen Sie Ihr Krypto-Portfolio in Echtzeit wachsen",
        portfolio_value: "Portfolio-Wert",
        live: "LIVE",
        ai_trading: "KI Trading Aktiv",
        recent_trades: "Aktuelle KI Trades",
        pause_demo: "Demo Pausieren",
        looks_good: "Sieht profitabel aus! Weiter",

        // Quiz Screen
        quick_assessment: "Schnelle Krypto-Bewertung",
        assessment_desc: "Helfen Sie uns, Ihre Trading-Strategie zu optimieren",
        select_answer: "Wählen Sie eine Antwort",

        // Signup Screen
        congratulations: "Herzlichen Glückwunsch!",
        ready_to_earn: "Sie sind bereit, mit Bitcoin 360 AI zu verdienen",
        benefit_bitcoin: "Handeln Sie Bitcoin & Top-Kryptowährungen",
        benefit_ai: "KI übernimmt alle Trading-Entscheidungen",
        benefit_profit: "Behalten Sie 100% Ihrer Gewinne",
        benefit_secure: "Bank-Level Sicherheit & Verschlüsselung",
        access_platform: "Zugang Bitcoin 360 AI Platform",
        disclaimer: "Klicken Sie, um Zugang zu Ihrer exklusiven Bitcoin-Trading-Plattform zu erhalten. 100% sicher und vertraulich.",

        // Loading Modal
        setting_up_account: "Ihr Bitcoin 360 AI Konto Einrichten...",
        please_wait: "Bitte warten Sie, während wir Ihre Trading-Plattform vorbereiten",
        step_verify: "Krypto-Märkte verifizieren...",
        step_account: "Ihr Konto aktivieren...",
        step_ai: "KI-Trading-Algorithmen initialisieren..."
    }
};

// Global variables
let currentLanguage = 'en';
let currentCurrency = 'USD';
let userCountry = null;
let demoBalance = 1000;
let currentQuestionIndex = 0;
let quizScore = 0;
let demoInterval = null;

// Crypto trading pairs for demo
const cryptoPairs = [
    { symbol: 'BTC/USD', name: 'Bitcoin', icon: '₿' },
    { symbol: 'ETH/USD', name: 'Ethereum', icon: 'Ξ' },
    { symbol: 'ADA/USD', name: 'Cardano', icon: '₳' },
    { symbol: 'DOT/USD', name: 'Polkadot', icon: '●' },
    { symbol: 'LINK/USD', name: 'Chainlink', icon: '🔗' },
    { symbol: 'BNB/USD', name: 'Binance', icon: '🔶' }
];

// Screen management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

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

function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLanguage][key];
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Handle placeholder translations
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translations[currentLanguage][key];
        if (translation) {
            element.placeholder = translation;
        }
    });
}

function updateCurrencyDisplay() {
    const currencyElements = document.querySelectorAll('.currency-amount');
    currencyElements.forEach(element => {
        const amount = element.getAttribute('data-amount');
        if (amount) {
            const convertedAmount = currentCurrency === 'EUR' ? (amount * 0.85).toFixed(0) : amount;
            element.textContent = convertedAmount;
        }
    });
    
    // Update currency symbol
    const currencySymbols = document.querySelectorAll('.currency-symbol');
    currencySymbols.forEach(element => {
        element.textContent = currentCurrency === 'EUR' ? '€' : '$';
    });
    
    // Update demo balance currency
    if (currentCurrency === 'EUR') {
        demoBalance = 850; // Convert to EUR
    }
}

// Demo functionality
function startDemo() {
    showScreen('demoScreen');
    updateDemoBalance();
    startDemoTrading();
}

function startDemoTrading() {
    let tradeCount = 0;
    const maxTrades = 8;
    
    // Clear any existing interval
    if (demoInterval) {
        clearInterval(demoInterval);
    }
    
    demoInterval = setInterval(() => {
        if (tradeCount >= maxTrades) {
            clearInterval(demoInterval);
            return;
        }
        
        const pair = cryptoPairs[Math.floor(Math.random() * cryptoPairs.length)];
        const profit = (Math.random() * 150 + 25).toFixed(2);
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        // Add profit to balance
        demoBalance += parseFloat(profit);
        updateDemoBalance();
        
        // Add trade to list
        const tradesList = document.getElementById('demoTradesList');
        const tradeElement = document.createElement('div');
        tradeElement.className = 'trade-item';
        tradeElement.innerHTML = `
            <div class="trade-info">
                <div class="trade-pair">${pair.icon} ${pair.symbol}</div>
                <div class="trade-time">${time}</div>
            </div>
            <div class="trade-profit positive">+${currentCurrency === 'EUR' ? '€' : '$'}${profit}</div>
        `;
        
        tradesList.insertBefore(tradeElement, tradesList.firstChild);
        
        // Keep only last 5 trades visible
        while (tradesList.children.length > 5) {
            tradesList.removeChild(tradesList.lastChild);
        }
        
        // Update trade counter
        tradeCount++;
        const aiTrades = document.getElementById('aiTrades');
        if (aiTrades) {
            const tradesText = currentLanguage === 'en' ? 'trades today' : 
                             currentLanguage === 'nl' ? 'trades vandaag' : 'Trades heute';
            aiTrades.textContent = `${tradeCount} ${tradesText}`;
        }
        
    }, 3000); // New trade every 3 seconds
}

function updateDemoBalance() {
    const balanceElement = document.getElementById('demoBalance');
    const changeElement = document.getElementById('balanceChange');
    
    const startBalance = currentCurrency === 'EUR' ? 850 : 1000;
    const change = demoBalance - startBalance;
    const changePercent = ((change / startBalance) * 100).toFixed(1);
    
    balanceElement.textContent = `${currentCurrency === 'EUR' ? '€' : '$'}${demoBalance.toFixed(2)}`;
    changeElement.innerHTML = `+${currentCurrency === 'EUR' ? '€' : '$'}${change.toFixed(2)} (+${changePercent}%) today`;
    changeElement.style.color = '#00d4aa';
}

function pauseDemo() {
    if (demoInterval) {
        clearInterval(demoInterval);
        demoInterval = null;
    }
    
    const pauseBtn = document.getElementById('pauseDemo');
    pauseBtn.textContent = 'Demo Paused';
    pauseBtn.style.background = '#fed7d7';
    pauseBtn.style.color = '#c53030';
}

// Quiz functionality
function startQuiz() {
    showScreen('quizScreen');
    currentQuestionIndex = 0;
    quizScore = 0;
    loadQuestion();
}

function loadQuestion() {
    const questions = quizQuestions[currentLanguage];
    const question = questions[currentQuestionIndex];
    const quizContent = document.getElementById('quizContent');
    const quizProgress = document.getElementById('quizProgress');
    const currentQuestionSpan = document.getElementById('currentQuestion');
    const quizAnswerBtn = document.getElementById('quizAnswer');
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    quizProgress.style.width = `${progress}%`;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    // Load question
    quizContent.innerHTML = `
        <div class="question">
            <h3>${question.question}</h3>
            <div class="answers">
                ${question.answers.map((answer, index) => `
                    <div class="answer" data-index="${index}">${answer}</div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Reset button
    quizAnswerBtn.disabled = true;
    quizAnswerBtn.textContent = translations[currentLanguage].select_answer;
    
    // Add click handlers to answers
    document.querySelectorAll('.answer').forEach(answer => {
        answer.addEventListener('click', function() {
            document.querySelectorAll('.answer').forEach(a => a.classList.remove('selected'));
            this.classList.add('selected');
            
            quizAnswerBtn.disabled = false;
            quizAnswerBtn.textContent = 'Next Question';
            quizAnswerBtn.onclick = () => nextQuestion(parseInt(this.dataset.index));
        });
    });
}

function nextQuestion(selectedAnswer) {
    const questions = quizQuestions[currentLanguage];
    const question = questions[currentQuestionIndex];
    
    if (selectedAnswer === question.correct) {
        quizScore++;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Quiz completed
        showScreen('signupScreen');
    }
}

// Signup functionality
function showLoadingModal() {
    const modal = document.getElementById('loadingModal');
    modal.classList.add('active');
    
    const steps = ['step1', 'step2', 'step3'];
    let currentStep = 0;
    
    const interval = setInterval(() => {
        if (currentStep > 0) {
            document.getElementById(steps[currentStep - 1]).classList.add('completed');
            document.getElementById(steps[currentStep - 1]).querySelector('.step-icon').textContent = '✓';
        }
        
        if (currentStep < steps.length) {
            document.getElementById(steps[currentStep]).classList.add('active');
            currentStep++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                modal.classList.remove('active');
                // Redirect to affiliate URL
                window.location.href = CONFIG.AFFILIATE_URL;
            }, 1000);
        }
    }, 1500);
}

// Event listeners
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM loaded, detecting location...');
    
    // Detect location and set language first
    await detectLocationAndSetLanguage();
    
    // Welcome screen button
    document.getElementById('startDemo').addEventListener('click', startDemo);
    
    // Back buttons
    document.getElementById('backToWelcome').addEventListener('click', () => {
        if (demoInterval) {
            clearInterval(demoInterval);
            demoInterval = null;
        }
        showScreen('welcomeScreen');
    });
    
    document.getElementById('backToDemo').addEventListener('click', () => {
        showScreen('demoScreen');
    });
    
    // Demo buttons
    document.getElementById('pauseDemo').addEventListener('click', pauseDemo);
    document.getElementById('startQuiz').addEventListener('click', startQuiz);
    
    // CTA button
    document.getElementById('finalCTA').addEventListener('click', function(e) {
        e.preventDefault();
        showLoadingModal();
    });
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