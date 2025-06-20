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
        app_name: "Bitcoin 360 AI",
        subtitle: "Exclusive Member Portal",
        currency_symbol: "$",
        urgent_text: "Only 23 Spots Left Today!",
        profit_header: "Our Members Made Today:",
        daily_avg: "Daily Average",
        monthly_avg: "Monthly Average", 
        profit_disclaimer: "*Based on verified member accounts",
        activity_header: "Live Member Activity:",
        members_online: "Members Online Now",
        countdown_text: "Your Reserved Spot Expires In:",
        bridge_cta: "CLAIM MY SPOT NOW - FREE",
        benefit_instant: "Instant Access - No Waiting",
        benefit_free: "100% Free - No Hidden Fees",
        benefit_start: "Start Earning Within Minutes",
        urgency_note: "⚠️ This offer expires when timer reaches zero",
        loading_title: "Securing Your Spot...",
        loading_text: "Connecting to Bitcoin 360 AI servers",
        step1: "Verifying availability",
        step2: "Reserving your spot", 
        step3: "Redirecting to platform"
    },
    nl: {
        app_name: "Bitcoin 360 AI",
        subtitle: "Exclusief Leden Portaal",
        currency_symbol: "€",
        urgent_text: "Slechts 23 Plekken Over Vandaag!",
        profit_header: "Onze Leden Verdienden Vandaag:",
        daily_avg: "Dagelijks Gemiddelde",
        monthly_avg: "Maandelijks Gemiddelde",
        profit_disclaimer: "*Gebaseerd op geverifieerde leden accounts",
        activity_header: "Live Leden Activiteit:",
        members_online: "Leden Nu Online",
        countdown_text: "Uw Gereserveerde Plek Verloopt Over:",
        bridge_cta: "CLAIM MIJN PLEK NU - GRATIS",
        benefit_instant: "Directe Toegang - Geen Wachten",
        benefit_free: "100% Gratis - Geen Verborgen Kosten",
        benefit_start: "Begin Binnen Minuten Te Verdienen",
        urgency_note: "⚠️ Dit aanbod verloopt wanneer de timer nul bereikt",
        loading_title: "Uw Plek Beveiligen...",
        loading_text: "Verbinden met Bitcoin 360 AI servers",
        step1: "Beschikbaarheid verifiëren",
        step2: "Uw plek reserveren",
        step3: "Doorverwijzen naar platform"
    },
    de: {
        app_name: "Bitcoin 360 AI", 
        subtitle: "Exklusives Mitglieder Portal",
        currency_symbol: "€",
        urgent_text: "Nur noch 23 Plätze heute verfügbar!",
        profit_header: "Unsere Mitglieder verdienten heute:",
        daily_avg: "Täglicher Durchschnitt",
        monthly_avg: "Monatlicher Durchschnitt",
        profit_disclaimer: "*Basierend auf verifizierten Mitglieder-Konten",
        activity_header: "Live Mitglieder Aktivität:",
        members_online: "Mitglieder Jetzt Online",
        countdown_text: "Ihr reservierter Platz läuft ab in:",
        bridge_cta: "MEINEN PLATZ JETZT SICHERN - KOSTENLOS",
        benefit_instant: "Sofortiger Zugang - Kein Warten",
        benefit_free: "100% Kostenlos - Keine versteckten Gebühren", 
        benefit_start: "Beginnen Sie innerhalb von Minuten zu verdienen",
        urgency_note: "⚠️ Dieses Angebot läuft ab, wenn der Timer Null erreicht",
        loading_title: "Ihren Platz Sichern...",
        loading_text: "Verbindung zu Bitcoin 360 AI Servern",
        step1: "Verfügbarkeit prüfen",
        step2: "Ihren Platz reservieren",
        step3: "Weiterleitung zur Plattform"
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
let countdownInterval;
let liveUsersInterval;
let signupTickerInterval;
let countdownMinutes = 14;
let countdownSeconds = 37;

// Crypto trading pairs for demo
const cryptoPairs = [
    { symbol: 'BTC/USD', name: 'Bitcoin', icon: '₿' },
    { symbol: 'ETH/USD', name: 'Ethereum', icon: 'Ξ' },
    { symbol: 'ADA/USD', name: 'Cardano', icon: '₳' },
    { symbol: 'DOT/USD', name: 'Polkadot', icon: '●' },
    { symbol: 'LINK/USD', name: 'Chainlink', icon: '🔗' },
    { symbol: 'BNB/USD', name: 'Binance', icon: '🔶' }
];

// DOM Elements
const bridgeScreen = document.getElementById('bridgeScreen');
const claimSpotBtn = document.getElementById('claimSpot');
const loadingModal = document.getElementById('loadingModal');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const miniTimerEl = document.getElementById('miniTimer');
const liveUsersEl = document.getElementById('liveUsers');
const signupTickerEl = document.getElementById('signupTicker');

// Fake user data for signup ticker
const fakeUsers = {
    en: [
        { name: "Michael R.", location: "Texas", time: "3 seconds ago" },
        { name: "Sarah K.", location: "California", time: "8 seconds ago" },
        { name: "David M.", location: "New York", time: "12 seconds ago" },
        { name: "Jennifer L.", location: "Florida", time: "18 seconds ago" },
        { name: "Robert W.", location: "Illinois", time: "23 seconds ago" },
        { name: "Lisa H.", location: "Ohio", time: "31 seconds ago" },
        { name: "James P.", location: "Michigan", time: "37 seconds ago" },
        { name: "Maria G.", location: "Georgia", time: "44 seconds ago" }
    ],
    nl: [
        { name: "Pieter V.", location: "Amsterdam", time: "3 seconden geleden" },
        { name: "Emma D.", location: "Rotterdam", time: "8 seconden geleden" },
        { name: "Lars M.", location: "Utrecht", time: "12 seconden geleden" },
        { name: "Sophie B.", location: "Den Haag", time: "18 seconden geleden" },
        { name: "Thijs K.", location: "Eindhoven", time: "23 seconden geleden" },
        { name: "Lotte S.", location: "Tilburg", time: "31 seconden geleden" },
        { name: "Bram H.", location: "Groningen", time: "37 seconden geleden" },
        { name: "Anouk R.", location: "Breda", time: "44 seconden geleden" }
    ],
    de: [
        { name: "Stefan M.", location: "Berlin", time: "vor 3 Sekunden" },
        { name: "Anna K.", location: "München", time: "vor 8 Sekunden" },
        { name: "Thomas W.", location: "Hamburg", time: "vor 12 Sekunden" },
        { name: "Julia S.", location: "Köln", time: "vor 18 Sekunden" },
        { name: "Markus B.", location: "Frankfurt", time: "vor 23 Sekunden" },
        { name: "Sandra H.", location: "Stuttgart", time: "vor 31 Sekunden" },
        { name: "Daniel R.", location: "Düsseldorf", time: "vor 37 Sekunden" },
        { name: "Petra L.", location: "Leipzig", time: "vor 44 Sekunden" }
    ]
};

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

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    detectLocationAndSetLanguage();
    startCountdownTimer();
    startLiveUsersCounter();
    startSignupTicker();
    
    // Add click handler for CTA button
    if (claimSpotBtn) {
        claimSpotBtn.addEventListener('click', handleClaimSpot);
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

// Start countdown timer
function startCountdownTimer() {
    countdownInterval = setInterval(() => {
        countdownSeconds--;
        
        if (countdownSeconds < 0) {
            countdownMinutes--;
            countdownSeconds = 59;
        }
        
        if (countdownMinutes < 0) {
            countdownMinutes = 14;
            countdownSeconds = 37;
        }
        
        // Update main timer
        if (minutesEl) minutesEl.textContent = countdownMinutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = countdownSeconds.toString().padStart(2, '0');
        
        // Update mini timer
        if (miniTimerEl) {
            miniTimerEl.textContent = `${countdownMinutes}:${countdownSeconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

// Start live users counter with realistic fluctuation
function startLiveUsersCounter() {
    let baseUsers = 2847293;
    
    liveUsersInterval = setInterval(() => {
        const change = Math.floor(Math.random() * 20) - 10; // -10 to +10
        baseUsers += change;
        
        if (baseUsers < 2800000) baseUsers = 2800000;
        if (baseUsers > 2900000) baseUsers = 2900000;
        
        if (liveUsersEl) {
            liveUsersEl.textContent = baseUsers.toLocaleString();
        }
    }, 3000);
}

// Start signup ticker with fake user signups
function startSignupTicker() {
    let currentUserIndex = 0;
    const users = fakeUsers[currentLanguage] || fakeUsers.en;
    
    signupTickerInterval = setInterval(() => {
        const user = users[currentUserIndex];
        
        if (signupTickerEl) {
            signupTickerEl.innerHTML = `
                <div class="signup-item">
                    <span class="user-info">${user.name} from ${user.location}</span>
                    <span class="signup-time">joined ${user.time}</span>
                </div>
            `;
        }
        
        currentUserIndex = (currentUserIndex + 1) % users.length;
    }, 4000);
}

// Handle claim spot button click
function handleClaimSpot() {
    showLoadingModal();
    
    // Simulate loading steps
    setTimeout(() => {
        document.getElementById('step1').classList.remove('active');
        document.getElementById('step1').classList.add('completed');
        document.getElementById('step2').classList.add('active');
    }, 1500);
    
    setTimeout(() => {
        document.getElementById('step2').classList.remove('active');
        document.getElementById('step2').classList.add('completed');
        document.getElementById('step3').classList.add('active');
    }, 3000);
    
    setTimeout(() => {
        document.getElementById('step3').classList.remove('active');
        document.getElementById('step3').classList.add('completed');
        
        // Redirect to affiliate URL
        window.location.href = CONFIG.AFFILIATE_URL;
    }, 4500);
}

// Clean up intervals when page unloads
window.addEventListener('beforeunload', () => {
    if (countdownInterval) clearInterval(countdownInterval);
    if (liveUsersInterval) clearInterval(liveUsersInterval);
    if (signupTickerInterval) clearInterval(signupTickerInterval);
});

