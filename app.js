// Configuration
const CONFIG = {
    APP_NAME: 'AutoWealth AI',
    AFFILIATE_URL: 'https://example.com/affiliate-link',
    INSTALL_DELAY: 3000,
    GEOLOCATION_API: 'https://ipapi.co/json/'
};

// Quiz questions
const quizQuestions = {
    en: [
        {
            question: "What's your main goal with money?",
            answers: [
                "Pay off debts and bills",
                "Save for the future", 
                "Generate passive income",
                "All of the above"
            ],
            correct: 3
        },
        {
            question: "How much time do you want to spend managing investments?",
            answers: [
                "Several hours per day",
                "A few hours per week",
                "Just a few minutes to check",
                "Zero time - let AI handle it"
            ],
            correct: 3
        },
        {
            question: "What's most important to you in an investment platform?",
            answers: [
                "High returns potential",
                "Complete automation",
                "Safety and security", 
                "All of the above"
            ],
            correct: 3
        }
    ],
    nl: [
        {
            question: "Wat is uw hoofddoel met geld?",
            answers: [
                "Schulden en rekeningen afbetalen",
                "Sparen voor de toekomst",
                "Passief inkomen genereren", 
                "Alle bovenstaande"
            ],
            correct: 3
        },
        {
            question: "Hoeveel tijd wilt u besteden aan het beheren van investeringen?",
            answers: [
                "Meerdere uren per dag",
                "Een paar uur per week",
                "Slechts een paar minuten om te controleren",
                "Geen tijd - laat AI het afhandelen"
            ],
            correct: 3
        },
        {
            question: "Wat is het belangrijkst voor u in een investeringsplatform?",
            answers: [
                "Hoog rendementspotentieel",
                "Volledige automatisering",
                "Veiligheid en beveiliging",
                "Alle bovenstaande"
            ],
            correct: 3
        }
    ],
    de: [
        {
            question: "Was ist Ihr Hauptziel mit Geld?",
            answers: [
                "Schulden und Rechnungen bezahlen",
                "Für die Zukunft sparen",
                "Passives Einkommen generieren",
                "Alles oben Genannte"
            ],
            correct: 3
        },
        {
            question: "Wie viel Zeit möchten Sie für die Verwaltung von Investitionen aufwenden?",
            answers: [
                "Mehrere Stunden pro Tag",
                "Ein paar Stunden pro Woche", 
                "Nur ein paar Minuten zum Überprüfen",
                "Null Zeit - KI soll es handhaben"
            ],
            correct: 3
        },
        {
            question: "Was ist für Sie bei einer Investitionsplattform am wichtigsten?",
            answers: [
                "Hohes Ertragspotential",
                "Vollständige Automatisierung",
                "Sicherheit und Schutz",
                "Alles oben Genannte"
            ],
            correct: 3
        }
    ]
};

// Translation data
const translations = {
    en: {
        // Welcome Screen
        welcome_title: "TRADER AI",
        welcome_subtitle: "Your Personal Money Assistant",
        feature1_title: "AI Does Everything",
        feature1_desc: "No trading knowledge needed. Our AI handles all the complex stuff.",
        feature2_title: "Earn While You Sleep",
        feature2_desc: "Make money 24/7. Even when you're sleeping or working.",
        feature3_title: "Simple as Instagram",
        feature3_desc: "If you can use social media, you can use this app.",
        users_earning: "Users Earning",
        avg_weekly: "Avg Weekly",
        success_rate: "Success Rate",
        start_demo: "Try Free Demo",
        no_signup_required: "No signup required • See how it works first",

        // Demo Screen
        demo_title: "Your Demo Wallet",
        demo_subtitle: "Watch your money grow in real-time",
        demo_balance: "Demo Balance",
        ai_working: "AI Working",
        live_trades: "Live Trades",
        live: "LIVE",
        pause_demo: "Pause Demo",
        looks_good: "Looks Good! Continue",

        // Quiz Screen
        select_answer: "Select an answer",

        // Signup Screen
        congrats_title: "Congratulations!",
        congrats_subtitle: "You're ready to start earning real money",
        benefit1: "Start with $250 minimum deposit",
        benefit2: "Personal account manager assigned",
        benefit3: "Withdraw profits anytime",
        benefit4: "24/7 AI trading activated",
        full_name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        get_started: "Get Started Now",
        get_started_now: "Get Started Now - Free Access",
        disclaimer: "Click to access your exclusive trading platform. 100% secure and confidential.",

        // Loading Modal
        setting_up: "Setting Up Your Account...",
        please_wait: "Please wait while we prepare everything for you",
        step_verify: "Verifying information...",
        step_account: "Creating your account...",
        step_ai: "Activating AI trading..."
    },
    nl: {
        // Welcome Screen
        welcome_title: "TRADER AI",
        welcome_subtitle: "Uw Persoonlijke Geld Assistent",
        feature1_title: "AI Doet Alles",
        feature1_desc: "Geen handelskennis nodig. Onze AI regelt alle complexe zaken.",
        feature2_title: "Verdien Terwijl U Slaapt",
        feature2_desc: "Verdien geld 24/7. Zelfs als u slaapt of werkt.",
        feature3_title: "Simpel als Instagram",
        feature3_desc: "Als u sociale media kunt gebruiken, kunt u deze app gebruiken.",
        users_earning: "Gebruikers Verdienen",
        avg_weekly: "Gem. Wekelijks",
        success_rate: "Succespercentage",
        start_demo: "Probeer Gratis Demo",
        no_signup_required: "Geen registratie vereist • Zie eerst hoe het werkt",

        // Demo Screen
        demo_title: "Uw Demo Portemonnee",
        demo_subtitle: "Zie uw geld groeien in real-time",
        demo_balance: "Demo Saldo",
        ai_working: "AI Werkt",
        live_trades: "Live Trades",
        live: "LIVE",
        pause_demo: "Pauzeer Demo",
        looks_good: "Ziet er goed uit! Doorgaan",

        // Quiz Screen
        select_answer: "Selecteer een antwoord",

        // Signup Screen
        congrats_title: "Gefeliciteerd!",
        congrats_subtitle: "U bent klaar om echt geld te verdienen",
        benefit1: "Begin met €250 minimum storting",
        benefit2: "Persoonlijke accountmanager toegewezen",
        benefit3: "Trek winsten op elk moment op",
        benefit4: "24/7 AI trading geactiveerd",
        full_name: "Volledige Naam",
        email: "E-mailadres",
        phone: "Telefoonnummer",
        get_started: "Nu Beginnen",
        get_started_now: "Nu Beginnen - Gratis Toegang",
        disclaimer: "Klik om toegang te krijgen tot uw exclusieve handelsplatform. 100% veilig en vertrouwelijk.",

        // Loading Modal
        setting_up: "Uw Account Instellen...",
        please_wait: "Wacht alstublieft terwijl we alles voor u voorbereiden",
        step_verify: "Informatie verifiëren...",
        step_account: "Uw account aanmaken...",
        step_ai: "AI trading activeren..."
    },
    de: {
        // Welcome Screen
        welcome_title: "TRADER AI",
        welcome_subtitle: "Ihr Persönlicher Geld-Assistent",
        feature1_title: "KI Macht Alles",
        feature1_desc: "Keine Handelskenntnisse erforderlich. Unsere KI kümmert sich um alle komplexen Sachen.",
        feature2_title: "Verdienen Während Sie Schlafen",
        feature2_desc: "Verdienen Sie 24/7 Geld. Auch wenn Sie schlafen oder arbeiten.",
        feature3_title: "Einfach wie Instagram",
        feature3_desc: "Wenn Sie soziale Medien nutzen können, können Sie diese App nutzen.",
        users_earning: "Nutzer Verdienen",
        avg_weekly: "Durchschn. Wöchentlich",
        success_rate: "Erfolgsrate",
        start_demo: "Kostenlose Demo Testen",
        no_signup_required: "Keine Registrierung erforderlich • Sehen Sie zuerst, wie es funktioniert",

        // Demo Screen
        demo_title: "Ihr Demo-Wallet",
        demo_subtitle: "Sehen Sie Ihr Geld in Echtzeit wachsen",
        demo_balance: "Demo-Guthaben",
        ai_working: "KI Arbeitet",
        live_trades: "Live Trades",
        live: "LIVE",
        pause_demo: "Demo Pausieren",
        looks_good: "Sieht gut aus! Weiter",

        // Quiz Screen
        select_answer: "Wählen Sie eine Antwort",

        // Signup Screen
        congrats_title: "Herzlichen Glückwunsch!",
        congrats_subtitle: "Sie sind bereit, echtes Geld zu verdienen",
        benefit1: "Beginnen Sie mit €250 Mindesteinzahlung",
        benefit2: "Persönlicher Kontomanager zugewiesen",
        benefit3: "Gewinne jederzeit abheben",
        benefit4: "24/7 KI-Trading aktiviert",
        full_name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        get_started: "Jetzt Loslegen",
        get_started_now: "Jetzt Loslegen - Kostenloser Zugang",
        disclaimer: "Klicken Sie, um Zugang zu Ihrer exklusiven Handelsplattform zu erhalten. 100% sicher und vertraulich.",

        // Loading Modal
        setting_up: "Ihr Konto Einrichten...",
        please_wait: "Bitte warten Sie, während wir alles für Sie vorbereiten",
        step_verify: "Informationen überprüfen...",
        step_account: "Ihr Konto erstellen...",
        step_ai: "KI-Trading aktivieren..."
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

// Apply translations to the page
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
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

// Demo functionality
function startDemo() {
    showScreen('demoScreen');
    
    // Reset demo balance
    demoBalance = currentCurrency === 'EUR' ? 850 : 1000;
    updateDemoBalance();
    
    // Start demo trading simulation
    let tradeCount = 0;
    const tradesList = document.getElementById('demoTradesList');
    const aiTrades = document.getElementById('aiTrades');
    
    // Clear existing trades
    tradesList.innerHTML = '';
    
    demoInterval = setInterval(() => {
        const pairs = ['EUR/USD', 'GBP/JPY', 'BTC/USD', 'ETH/USD', 'XAU/USD', 'SPY', 'TSLA'];
        const pair = pairs[Math.floor(Math.random() * pairs.length)];
        const profit = Math.random() * 200 + 50; // $50-$250 profit
        
        tradeCount++;
        
        // Add new trade to the list
        const tradeElement = document.createElement('div');
        tradeElement.className = 'trade-item';
        tradeElement.innerHTML = `
            <div class="trade-info">
                <div class="trade-pair">${pair}</div>
                <div class="trade-time">Just now</div>
            </div>
            <div class="trade-profit positive currency-amount" data-amount="${profit}">+${currentCurrency === 'EUR' ? '€' : '$'}${profit.toFixed(2)}</div>
        `;
        
        tradesList.insertBefore(tradeElement, tradesList.firstChild);
        
        // Keep only last 3 trades visible
        while (tradesList.children.length > 3) {
            tradesList.removeChild(tradesList.lastChild);
        }
        
        // Update balance
        demoBalance += profit;
        updateDemoBalance();
        
        // Update trade count
        aiTrades.textContent = `${tradeCount} trades today`;
        
        // Update times for existing trades
        const timeElements = tradesList.querySelectorAll('.trade-time');
        timeElements.forEach((element, index) => {
            if (index === 0) {
                element.textContent = 'Just now';
            } else if (index === 1) {
                element.textContent = '2m ago';
            } else {
                element.textContent = '5m ago';
            }
        });
        
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
    changeElement.style.color = '#48bb78';
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
    
    // Auto-select country based on detected location
    if (userCountry) {
        const countrySelect = document.getElementById('countrySelect');
        const option = countrySelect.querySelector(`option[value="${userCountry.toUpperCase()}"]`);
        if (option) {
            countrySelect.value = userCountry.toUpperCase();
        }
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