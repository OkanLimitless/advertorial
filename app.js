// Bitcoin 360 AI - Elon Musk's Trading Platform
class ElonBitcoinAI {
    constructor() {
        this.config = window.CONFIG || {};
        this.userLocation = null;
        this.currentLanguage = 'en';
        this.translations = {};
        this.userCountTimer = null;
        
        this.init();
    }

    async init() {
        await this.detectLocation();
        await this.loadTranslations();
        this.initializeElements();
        this.startUserCounter();
        this.setupEventListeners();
    }

    async detectLocation() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            this.userLocation = {
                country: data.country_code,
                currency: ['NL', 'DE', 'FR', 'ES', 'IT'].includes(data.country_code) ? 'EUR' : 'USD'
            };
            
            // Set language based on country
            if (data.country_code === 'NL') {
                this.currentLanguage = 'nl';
            } else if (data.country_code === 'DE') {
                this.currentLanguage = 'de';
            }
        } catch (error) {
            console.log('Location detection failed, using defaults');
            this.userLocation = { country: 'US', currency: 'USD' };
        }
    }

    async loadTranslations() {
        this.translations = {
            en: {
                app_name: "Bitcoin 360 AI",
                by_elon: "by Elon Musk",
                by_elon_short: "by Elon Musk",
                active_users: "Active Users",
                elon_quote: "\"After revolutionizing electric vehicles and space travel, I'm now democratizing wealth creation. Bitcoin 360 AI uses the same neural networks that power Tesla's Full Self-Driving.\"",
                elon_signature: "- Elon Musk, CEO of Tesla, SpaceX & Bitcoin 360 AI",
                hero_title: "The AI That's Making Tesla Investors Even Richer",
                hero_subtitle: "Same advanced neural networks. Same precision. Now applied to Bitcoin trading. Join 2.8 million users already earning an average of $8,247 per week.",
                avg_weekly: "Average Weekly Earnings",
                success_rate: "Success Rate",
                automated: "Fully Automated",
                tech_title: "Tesla-Grade AI Technology",
                tech_subtitle: "The same neural networks that enable Tesla's Autopilot to make split-second decisions are now analyzing Bitcoin markets 24/7.",
                neural_title: "Neural Networks",
                neural_desc: "Advanced AI processes 10,000+ market signals per second",
                tesla_title: "Tesla Integration",
                tesla_desc: "Leverages Tesla's computing infrastructure for lightning-fast execution",
                spacex_title: "SpaceX Precision",
                spacex_desc: "Rocket-level precision applied to market timing",
                results_title: "Real Results from Real Users",
                results_subtitle: "Tesla investors were the first to access Bitcoin 360 AI. Here's what they're saying:",
                in_3_months: "in 3 months",
                in_2_months: "in 2 months",
                in_4_months: "in 4 months",
                testimonial_1: "\"As a Tesla shareholder, I got early access to Bitcoin 360 AI. The returns have been extraordinary - better than my Tesla stock gains.\"",
                testimonial_2: "\"I've been following Elon since PayPal days. Bitcoin 360 AI is his most brilliant creation yet. The AI literally trades while I sleep.\"",
                testimonial_3: "\"The same precision that lands SpaceX rockets is now making me money every single day. Elon's vision is incredible.\"",
                tesla_investor: "Tesla Investor since 2018",
                early_adopter: "Early Tesla Adopter",
                spacex_engineer: "Former SpaceX Engineer",
                how_title: "How It Works",
                how_subtitle: "Three simple steps to start earning with Elon's AI",
                step1_title: "Get Access",
                step1_desc: "Secure your spot in Elon's exclusive trading program",
                step2_title: "AI Activates",
                step2_desc: "Tesla-grade neural networks begin analyzing markets",
                step3_title: "Earn Daily",
                step3_desc: "Watch your account grow while the AI trades 24/7",
                press_title: "Featured In",
                cta_title: "Join Elon's Trading Revolution",
                cta_subtitle: "Limited access available. Tesla and SpaceX investors get priority.",
                spots_available: "Spots Available",
                avg_weekly_short: "Avg. Weekly",
                join_now: "Get Access to Bitcoin 360 AI",
                cta_note: "✓ Same AI technology as Tesla Autopilot",
                cta_note_2: "✓ Backed by Elon Musk",
                cta_note_3: "✓ 97.3% Success Rate",
                footer_text: "Revolutionary AI Trading Technology",
                loading_title: "Connecting to Bitcoin 360 AI",
                loading_text: "Securing your access to Elon's trading platform..."
            },
            nl: {
                app_name: "Bitcoin 360 AI",
                by_elon: "door Elon Musk",
                by_elon_short: "door Elon Musk",
                active_users: "Actieve Gebruikers",
                elon_quote: "\"Na het revolutioneren van elektrische voertuigen en ruimtereizen, democratiseer ik nu wealthcreatie. Bitcoin 360 AI gebruikt dezelfde neurale netwerken die Tesla's Full Self-Driving aandrijven.\"",
                elon_signature: "- Elon Musk, CEO van Tesla, SpaceX & Bitcoin 360 AI",
                hero_title: "De AI Die Tesla Investeerders Nog Rijker Maakt",
                hero_subtitle: "Dezelfde geavanceerde neurale netwerken. Dezelfde precisie. Nu toegepast op Bitcoin trading. Sluit je aan bij 2,8 miljoen gebruikers die al gemiddeld €7.010 per week verdienen.",
                avg_weekly: "Gemiddelde Wekelijkse Inkomsten",
                success_rate: "Succespercentage",
                automated: "Volledig Geautomatiseerd",
                tech_title: "Tesla-Grade AI Technologie",
                tech_subtitle: "Dezelfde neurale netwerken die Tesla's Autopilot in staat stellen om split-second beslissingen te nemen, analyseren nu 24/7 Bitcoin markten.",
                neural_title: "Neurale Netwerken",
                neural_desc: "Geavanceerde AI verwerkt 10.000+ marktsignalen per seconde",
                tesla_title: "Tesla Integratie",
                tesla_desc: "Maakt gebruik van Tesla's computing infrastructuur voor bliksemsnelle uitvoering",
                spacex_title: "SpaceX Precisie",
                spacex_desc: "Raket-niveau precisie toegepast op market timing",
                results_title: "Echte Resultaten van Echte Gebruikers",
                results_subtitle: "Tesla investeerders hadden als eerste toegang tot Bitcoin 360 AI. Dit is wat ze zeggen:",
                in_3_months: "in 3 maanden",
                in_2_months: "in 2 maanden",
                in_4_months: "in 4 maanden",
                testimonial_1: "\"Als Tesla aandeelhouder kreeg ik vroege toegang tot Bitcoin 360 AI. De rendementen zijn buitengewoon - beter dan mijn Tesla aandelen winsten.\"",
                testimonial_2: "\"Ik volg Elon sinds de PayPal dagen. Bitcoin 360 AI is zijn meest briljante creatie tot nu toe. De AI handelt letterlijk terwijl ik slaap.\"",
                testimonial_3: "\"Dezelfde precisie die SpaceX raketten laat landen, verdient nu elke dag geld voor mij. Elon's visie is ongelooflijk.\"",
                tesla_investor: "Tesla Investeerder sinds 2018",
                early_adopter: "Vroege Tesla Adopter",
                spacex_engineer: "Voormalig SpaceX Ingenieur",
                how_title: "Hoe Het Werkt",
                how_subtitle: "Drie eenvoudige stappen om te beginnen met verdienen met Elon's AI",
                step1_title: "Krijg Toegang",
                step1_desc: "Beveilig je plek in Elon's exclusieve trading programma",
                step2_title: "AI Activeert",
                step2_desc: "Tesla-grade neurale netwerken beginnen markten te analyseren",
                step3_title: "Verdien Dagelijks",
                step3_desc: "Kijk hoe je account groeit terwijl de AI 24/7 handelt",
                press_title: "Vermeld In",
                cta_title: "Sluit Je Aan Bij Elon's Trading Revolutie",
                cta_subtitle: "Beperkte toegang beschikbaar. Tesla en SpaceX investeerders krijgen prioriteit.",
                spots_available: "Plekken Beschikbaar",
                avg_weekly_short: "Gem. Wekelijks",
                join_now: "Krijg Toegang Tot Bitcoin 360 AI",
                cta_note: "✓ Dezelfde AI technologie als Tesla Autopilot",
                cta_note_2: "✓ Gesteund door Elon Musk",
                cta_note_3: "✓ 97,3% Succespercentage",
                footer_text: "Revolutionaire AI Trading Technologie",
                loading_title: "Verbinding Maken Met Bitcoin 360 AI",
                loading_text: "Je toegang tot Elon's trading platform beveiligen..."
            },
            de: {
                app_name: "Bitcoin 360 AI",
                by_elon: "von Elon Musk",
                by_elon_short: "von Elon Musk",
                active_users: "Aktive Nutzer",
                elon_quote: "\"Nach der Revolutionierung von Elektrofahrzeugen und Raumfahrt demokratisiere ich nun die Vermögensbildung. Bitcoin 360 AI nutzt dieselben neuronalen Netzwerke, die Tesla's Full Self-Driving antreiben.\"",
                elon_signature: "- Elon Musk, CEO von Tesla, SpaceX & Bitcoin 360 AI",
                hero_title: "Die KI Die Tesla Investoren Noch Reicher Macht",
                hero_subtitle: "Dieselben fortschrittlichen neuronalen Netzwerke. Dieselbe Präzision. Jetzt angewandt auf Bitcoin Trading. Schließen Sie sich 2,8 Millionen Nutzern an, die bereits durchschnittlich €7.010 pro Woche verdienen.",
                avg_weekly: "Durchschnittliche Wöchentliche Einnahmen",
                success_rate: "Erfolgsrate",
                automated: "Vollständig Automatisiert",
                tech_title: "Tesla-Grade KI Technologie",
                tech_subtitle: "Dieselben neuronalen Netzwerke, die Tesla's Autopilot Sekundenbruchteile-Entscheidungen ermöglichen, analysieren jetzt 24/7 Bitcoin Märkte.",
                neural_title: "Neuronale Netzwerke",
                neural_desc: "Fortschrittliche KI verarbeitet 10.000+ Marktsignale pro Sekunde",
                tesla_title: "Tesla Integration",
                tesla_desc: "Nutzt Tesla's Computing-Infrastruktur für blitzschnelle Ausführung",
                spacex_title: "SpaceX Präzision",
                spacex_desc: "Raketen-Niveau Präzision angewandt auf Market Timing",
                results_title: "Echte Ergebnisse von Echten Nutzern",
                results_subtitle: "Tesla Investoren hatten als erste Zugang zu Bitcoin 360 AI. Das sagen sie:",
                in_3_months: "in 3 Monaten",
                in_2_months: "in 2 Monaten",
                in_4_months: "in 4 Monaten",
                testimonial_1: "\"Als Tesla Aktionär bekam ich frühen Zugang zu Bitcoin 360 AI. Die Renditen waren außergewöhnlich - besser als meine Tesla Aktiengewinne.\"",
                testimonial_2: "\"Ich folge Elon seit den PayPal Tagen. Bitcoin 360 AI ist seine brillanteste Schöpfung bisher. Die KI handelt buchstäblich während ich schlafe.\"",
                testimonial_3: "\"Dieselbe Präzision, die SpaceX Raketen landen lässt, verdient jetzt jeden Tag Geld für mich. Elon's Vision ist unglaublich.\"",
                tesla_investor: "Tesla Investor seit 2018",
                early_adopter: "Früher Tesla Adopter",
                spacex_engineer: "Ehemaliger SpaceX Ingenieur",
                how_title: "Wie Es Funktioniert",
                how_subtitle: "Drei einfache Schritte um mit Elon's KI zu verdienen",
                step1_title: "Zugang Erhalten",
                step1_desc: "Sichern Sie sich Ihren Platz in Elon's exklusivem Trading Programm",
                step2_title: "KI Aktiviert",
                step2_desc: "Tesla-Grade neuronale Netzwerke beginnen Märkte zu analysieren",
                step3_title: "Täglich Verdienen",
                step3_desc: "Sehen Sie zu wie Ihr Konto wächst während die KI 24/7 handelt",
                press_title: "Erwähnt In",
                cta_title: "Schließen Sie Sich Elon's Trading Revolution An",
                cta_subtitle: "Begrenzter Zugang verfügbar. Tesla und SpaceX Investoren erhalten Priorität.",
                spots_available: "Plätze Verfügbar",
                avg_weekly_short: "Durchschn. Wöchentlich",
                join_now: "Zugang Zu Bitcoin 360 AI Erhalten",
                cta_note: "✓ Dieselbe KI Technologie wie Tesla Autopilot",
                cta_note_2: "✓ Unterstützt von Elon Musk",
                cta_note_3: "✓ 97,3% Erfolgsrate",
                footer_text: "Revolutionäre KI Trading Technologie",
                loading_title: "Verbindung Zu Bitcoin 360 AI",
                loading_text: "Ihr Zugang zu Elon's Trading Plattform wird gesichert..."
            }
        };
    }

    initializeElements() {
        this.updateContent();
        this.updateCurrency();
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
                element.textContent = this.translations[this.currentLanguage][key];
            }
        });
    }

    updateCurrency() {
        const currencyElements = document.querySelectorAll('.currency-amount');
        currencyElements.forEach(element => {
            const usdAmount = parseInt(element.getAttribute('data-amount'));
            if (this.userLocation?.currency === 'EUR') {
                const eurAmount = Math.round(usdAmount * 0.85); // Approximate conversion
                element.textContent = `€${eurAmount.toLocaleString()}`;
            } else {
                element.textContent = `$${usdAmount.toLocaleString()}`;
            }
        });
    }

    startUserCounter() {
        const activeUsersElement = document.getElementById('activeUsers');
        const spotsLeftElement = document.getElementById('spotsLeft');
        
        if (activeUsersElement) {
            let currentCount = 2847293;
            
            const updateCount = () => {
                currentCount += Math.floor(Math.random() * 5) + 1; // Add 1-5 users
                activeUsersElement.textContent = currentCount.toLocaleString();
            };
            
            this.userCountTimer = setInterval(updateCount, 12000); // Every 12 seconds
        }
        
        if (spotsLeftElement) {
            let spotsLeft = 1247;
            
            const updateSpots = () => {
                if (Math.random() < 0.2 && spotsLeft > 500) { // 20% chance to decrease
                    spotsLeft -= Math.floor(Math.random() * 3) + 1;
                    spotsLeftElement.textContent = spotsLeft.toLocaleString();
                }
            };
            
            setInterval(updateSpots, 20000); // Every 20 seconds
        }
    }

    setupEventListeners() {
        const joinButton = document.getElementById('joinNow');
        if (joinButton) {
            joinButton.addEventListener('click', (event) => {
                console.log('Button clicked!');
                event.preventDefault(); // Prevent any default form submission
                this.handleJoin();
            });
        }
    }

    handleJoin() {
        console.log('handleJoin called');
        // Simple direct redirect - no loading modal to avoid infinite loading
        this.redirectToAffiliate();
    }

    redirectToAffiliate() {
        // Simple direct redirect with multiple fallback methods
        const affiliateUrl = 'https://exl-redircd.com/?a=25528&c=395863';
        
        console.log('Redirecting to:', affiliateUrl);
        
        try {
            // Method 1: Standard redirect
            window.location.href = affiliateUrl;
        } catch (error) {
            console.log('Method 1 failed, trying method 2');
            try {
                // Method 2: Replace current location
                window.location.replace(affiliateUrl);
            } catch (error2) {
                console.log('Method 2 failed, trying method 3');
                // Method 3: Open in new window as last resort
                window.open(affiliateUrl, '_self');
            }
        }
    }

    destroy() {
        if (this.userCountTimer) {
            clearInterval(this.userCountTimer);
        }
    }
}

// PWA Installation Handler
class PWAInstaller {
    constructor() {
        this.deferredPrompt = null;
        this.init();
    }

    init() {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
        });
    }

    async install() {
        if (!this.deferredPrompt) return false;
        this.deferredPrompt.prompt();
        const { outcome } = await this.deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            this.deferredPrompt = null;
            return true;
        }
        return false;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.elonBitcoinAI = new ElonBitcoinAI();
    window.pwaInstaller = new PWAInstaller();
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

