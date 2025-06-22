// Delta Air Lines Landing Page JavaScript

// Configuration
const PHONE_NUMBER = '+18557920748';
const DISPLAY_PHONE = '1-855-792-0748';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Delta Air Lines Landing Page Loaded');
    
    // Track phone clicks
    trackPhoneClicks();
    
    // Add hover effects to service cards
    addServiceCardEffects();
    
    // Add animation to benefit items
    addBenefitAnimations();
    
    // Track page engagement
    trackEngagement();
});

// Track all phone number clicks
function trackPhoneClicks() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Phone number clicked:', DISPLAY_PHONE);
            
            // Track the click event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call', {
                    event_category: 'engagement',
                    event_label: 'delta_customer_service',
                    value: 1
                });
            }
            
            // Flash effect on click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Add interactive effects to service cards
function addServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add staggered animations to benefit items
function addBenefitAnimations() {
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    benefitItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Track user engagement
function trackEngagement() {
    let engagementScore = 0;
    let timeOnPage = 0;
    
    // Track time on page
    const startTime = Date.now();
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            engagementScore += 1;
        }
    });
    
    // Track hover on important elements
    const importantElements = document.querySelectorAll('.call-button, .final-call-button, .phone-number, .phone-display');
    importantElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            engagementScore += 2;
            console.log('High-intent element hovered');
        });
    });
    
    // Track when user leaves page
    window.addEventListener('beforeunload', function() {
        timeOnPage = Math.round((Date.now() - startTime) / 1000);
        
        console.log('Engagement Summary:', {
            timeOnPage: timeOnPage + 's',
            engagementScore: engagementScore,
            maxScroll: maxScroll + '%'
        });
        
        // Send analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'engagement_summary', {
                event_category: 'user_behavior',
                custom_parameter_1: timeOnPage,
                custom_parameter_2: engagementScore,
                custom_parameter_3: maxScroll
            });
        }
    });
}

// Add pulsing effect to phone icons
function addPhonePulse() {
    const phoneIcons = document.querySelectorAll('.phone-icon');
    
    phoneIcons.forEach(icon => {
        setInterval(() => {
            icon.style.transform = 'scale(1.1)';
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 300);
        }, 2000);
    });
}

// Initialize phone pulse effect
setTimeout(addPhonePulse, 1000);

// Add urgency counter (fake high call volume)
function updateUrgencyCounter() {
    const urgencyNote = document.querySelector('.urgency-note');
    if (!urgencyNote) return;
    
    const waitTimes = ['2-3 minutes', '3-4 minutes', '2-3 minutes', '1-2 minutes', '3-5 minutes'];
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % waitTimes.length;
        urgencyNote.innerHTML = `⚠️ High call volume - Average wait time: ${waitTimes[currentIndex]}`;
    }, 15000); // Change every 15 seconds
}

// Start urgency counter
setTimeout(updateUrgencyCounter, 3000);

// Smooth scrolling for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add click tracking to all CTA buttons
document.querySelectorAll('.call-button, .final-call-button').forEach(button => {
    button.addEventListener('click', function() {
        console.log('CTA Button clicked:', this.textContent.trim());
        
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        this.style.boxShadow = '0 5px 15px rgba(255, 107, 53, 0.8)';
        
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        }, 200);
    });
});

// Simple A/B test for urgency messaging
function initABTest() {
    const testVariant = Math.random() < 0.5 ? 'A' : 'B';
    
    if (testVariant === 'B') {
        const urgencyNote = document.querySelector('.urgency-note');
        if (urgencyNote) {
            urgencyNote.innerHTML = '🔥 Limited availability - Call now to secure assistance';
            urgencyNote.style.background = 'rgba(255, 69, 0, 0.1)';
            urgencyNote.style.borderColor = 'rgba(255, 69, 0, 0.3)';
            urgencyNote.style.color = '#ff4500';
        }
    }
    
    console.log('A/B Test Variant:', testVariant);
}

// Initialize A/B test
setTimeout(initABTest, 500);

// Add professional loading states
function addLoadingStates() {
    const buttons = document.querySelectorAll('.call-button, .final-call-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Connecting...';
            this.style.opacity = '0.8';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
            }, 1500);
        });
    });
}

// Initialize loading states
setTimeout(addLoadingStates, 1000);

// Console branding
console.log('%c🛫 Delta Air Lines Customer Service Portal', 'color: #003366; font-size: 16px; font-weight: bold;');
console.log('%cFor immediate assistance, call: ' + DISPLAY_PHONE, 'color: #0066cc; font-size: 14px;');

