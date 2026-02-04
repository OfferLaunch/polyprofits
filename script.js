// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const playbookForm = document.getElementById('playbookForm');
const formMessage = document.getElementById('formMessage');

// Active Navigation Detection
function setActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Determine which page we're on and set active class
    if (currentPath === '/' || currentPath === '/index.html' || currentPath === '/index') {
        // Home page
        const homeLink = document.querySelector('.nav-menu a[href="/"]');
        if (homeLink) homeLink.classList.add('active');
    } else if (currentPath.includes('process')) {
        const processLink = document.querySelector('.nav-menu a[href*="process"]');
        if (processLink) processLink.classList.add('active');
    } else if (currentPath.includes('about')) {
        const aboutLink = document.querySelector('.nav-menu a[href*="about"]');
        if (aboutLink) aboutLink.classList.add('active');
    } else if (currentPath.includes('results')) {
        const resultsLink = document.querySelector('.nav-menu a[href*="results"]');
        if (resultsLink) resultsLink.classList.add('active');
    }
}

// Initialize AOS (Animate On Scroll) - Will be loaded asynchronously
// AOS initialization is now handled in the performance optimization script

// Set active navigation on page load
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavigation();
});

// Mobile Menu Toggle (Transcend-style: overlay + slide panel)
function closeMobileMenu() {
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    const overlay = document.getElementById('navOverlay');
    if (overlay) overlay.setAttribute('aria-hidden', 'true');
}

function openMobileMenu() {
    if (hamburger) hamburger.classList.add('active');
    if (navMenu) navMenu.classList.add('active');
    document.body.classList.add('menu-open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    const overlay = document.getElementById('navOverlay');
    if (overlay) overlay.setAttribute('aria-hidden', 'false');
}

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = document.body.classList.contains('menu-open');
        if (isOpen) closeMobileMenu();
        else openMobileMenu();
    });

    const overlay = document.getElementById('navOverlay');
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 72; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== The PolyProfits System section: scroll-to-section tabs + path layout ==========
(function initPolyProfitsSystem() {
    const section = document.getElementById('polyprofits-system');
    if (!section) return;

    const tabs = section.querySelectorAll('.system-phase-tab');
    const cards = section.querySelectorAll('.system-card');
    const phaseIds = ['setup', 'run', 'hands-off'];

    function setActiveTab(index) {
        tabs.forEach(function(t, i) {
            const isActive = i === index;
            t.classList.toggle('active', isActive);
            t.setAttribute('aria-selected', isActive);
        });
    }

    // Tab click: smooth scroll to that section
    tabs.forEach(function(tab, i) {
        tab.addEventListener('click', function() {
            const target = cards[i];
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveTab(i);
            }
        });
    });

    // Which section is in view → update active tab
    const scrollObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) return;
            const card = entry.target;
            const index = Array.prototype.indexOf.call(cards, card);
            if (index !== -1) setActiveTab(index);
        });
    }, { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' });
    cards.forEach(function(card) { scrollObserver.observe(card); });

    // Section entrance: add system-visible when section enters view
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) section.classList.add('system-visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    sectionObserver.observe(section);

    // Card scroll reveal: add system-card-visible when each card enters view
    const cardRevealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('system-card-visible');
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    cards.forEach(function(card) { cardRevealObserver.observe(card); });
})();

// Form handling
if (playbookForm) {
    playbookForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (!email) {
            showMessage('Please enter your email address.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showMessage('Thank you! Your playbook is being sent to your email.', 'success');
        this.reset();
        
        // Track conversion (if analytics is set up)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                'event_category': 'engagement',
                'event_label': 'playbook_download'
            });
        }
    });
}

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showMessage('Thank you! We\'ll get back to you soon.', 'success');
        this.reset();
    });
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .result-item, .step, .case-study-card, .resource-card').forEach(el => {
    observer.observe(el);
});

// Parallax effect for hero section - DISABLED to prevent interference with Silk background
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const heroBackground = document.querySelector('.hero-background');
//     
//     if (heroBackground) {
//         heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Stats counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .result-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    statsObserver.observe(statsSection);
}

// Lazy loading for images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Navbar scroll effect
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Parallax effect - DISABLED to prevent interference with Silk background
    // const scrolled = window.pageYOffset;
    // const heroBackground = document.querySelector('.hero-background');
    // if (heroBackground) {
    //     heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    // }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Focus management for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        'assets/images/logos/logo-primary.png',
        'assets/images/emblems/emblem-blue.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadCriticalResources();

// Service Worker registration (for PWA capabilities)
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

// Analytics tracking (if Google Analytics is loaded)
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const text = btn.textContent.trim();
        trackEvent('engagement', 'button_click', text);
    });
});

// Ensure resources button always works
document.addEventListener('DOMContentLoaded', function() {
    const resourcesBtn = document.getElementById('access-resources-btn');
    if (resourcesBtn) {
        resourcesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'resources.html';
        });
    }
});

// Track form interactions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        const formType = form.classList.contains('playbook-form') ? 'playbook' : 'contact';
        trackEvent('form', 'submit', formType);
    });
});

// Hero 3D pillars – mouse-follow rise effect (home page only)
(function initHeroPillars() {
    const heroSection = document.getElementById('heroSection');
    const container = document.getElementById('heroPillars');
    if (!heroSection || !container) return;

    const total = 30 * 12;

    for (let i = 0; i < total; i++) {
        const pillar = document.createElement('div');
        pillar.className = 'hero-pillar';
        container.appendChild(pillar);
    }

    const pillars = container.querySelectorAll('.hero-pillar');
    const radius = 50;
    let mouseX = -1000;
    let mouseY = -1000;
    let rafId = null;

    function updatePillars() {
        const heroRect = heroSection.getBoundingClientRect();
        pillars.forEach(function(pillar) {
            const r = pillar.getBoundingClientRect();
            const cx = r.left + r.width / 2;
            const cy = r.top + r.height / 2;
            const dx = mouseX - cx;
            const dy = mouseY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const rise = dist < radius ? Math.max(0, 1 - dist / radius) : 0;
            pillar.style.setProperty('--rise', rise);
        });
        rafId = null;
    }

    function scheduleUpdate() {
        if (rafId === null) rafId = requestAnimationFrame(updatePillars);
    }

    heroSection.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        scheduleUpdate();
    });

    heroSection.addEventListener('mouseleave', function() {
        mouseX = -1000;
        mouseY = -1000;
        scheduleUpdate();
    });
})();

// PolyProfits

