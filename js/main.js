// ==========================================
// CONFIGURATION & INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initNavigation();
    initCustomCursor();
    initScrollProgress();
    initParticles();
    initTypedText();
    initGSAPAnimations();
    initCounters();
    initSkillBars();
    initProjectFilters();
    initSmoothScroll();
    initCVDownload();
    initSkillsAnimations();
    initContactAnimations();
    initBackToTop();
    initIntersectionObserver();
});

// Update scroll progress for accessibility
window.addEventListener('scroll', updateScrollProgressAria);

// ==========================================
// LOADING SCREEN
// ==========================================

function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    });
}

// ==========================================
// NAVIGATION
// ==========================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================
// CUSTOM CURSOR
// ==========================================

function initCustomCursor() {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (!cursorDot || !cursorOutline) return;

    // Check if device has hover capability (not mobile)
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Cursor interactions with links and buttons
        const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card');
        
        interactiveElements.forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '50px';
                cursorOutline.style.height = '50px';
            });
            
            elem.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '32px';
                cursorOutline.style.height = '32px';
            });
        });
    }
}

// ==========================================
// SCROLL PROGRESS INDICATOR
// ==========================================

function initScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight);
        
        scrollProgress.style.transform = `scaleX(${scrollPercentage})`;
    });
}

// ==========================================
// PARTICLES.JS INITIALIZATION
// ==========================================

function initParticles() {
    if (typeof particlesJS === 'undefined') return;

    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00d4ff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00d4ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// ==========================================
// TYPED.JS INITIALIZATION
// ==========================================

function initTypedText() {
    const typedElement = document.querySelector('.typed-text');
    
    if (!typedElement) {
        console.error('typed-text element not found');
        return;
    }

    const texts = ['Data Analyst'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Backspace
            typedElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 60;
        } else {
            // Type forward
            typedElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        // Check if word is complete
        if (!isDeleting && charIndex === currentText.length) {
            // Word complete, wait before deleting
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Deletion complete, move to next word
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // Start the typing animation
    type();
}

// ==========================================
// GSAP ANIMATIONS
// ==========================================

function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    const sections = gsap.utils.toArray('.section');
    
    sections.forEach(section => {
        gsap.from(section.querySelectorAll('.section-title, .section-divider'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });
    });

    // About section animations
    gsap.from('.about-paragraph', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3
    });

    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // Skills section animations
    gsap.from('.skills-category', {
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 70%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3
    });

    // Projects section animations
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 70%'
        },
        y: 50,
        duration: 0.6,
        stagger: 0.15
    });

    // Contact section animations
    gsap.from('.contact-link', {
        scrollTrigger: {
            trigger: '.contact-links',
            start: 'top 80%'
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
    });

    gsap.from('.social-link', {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top 90%'
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    });

    // Parallax effect for hero scroll indicator
    gsap.to('.hero-scroll', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        opacity: 0
    });
}

// ==========================================
// COUNTER ANIMATIONS
// ==========================================

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    };

    // Intersection Observer for counters
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// ==========================================
// SKILL BARS ANIMATION
// ==========================================

function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const animateSkillBar = (bar) => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    };

    // Intersection Observer for skill bars
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBar(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));
}

// ==========================================
// PROJECT FILTERING
// ==========================================

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button and ARIA states
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');

            // Filter projects with smooth animation
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // Check if filter matches (support multiple categories)
                const shouldShow = filter === 'all' || category.split(' ').includes(filter);
                
                if (shouldShow) {
                    // Show card first, then animate in
                    card.classList.remove('hide');
                    gsap.fromTo(card, 
                        { opacity: 0, scale: 0.8 },
                        { 
                            opacity: 1,
                            scale: 1,
                            duration: 0.5,
                            ease: 'power2.out'
                        }
                    );
                } else {
                    // Animate out, then hide
                    gsap.to(card, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        ease: 'power2.in',
                        onComplete: () => {
                            card.classList.add('hide');
                        }
                    });
                }
            });
        });
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// MAGNETIC BUTTON EFFECT
// ==========================================

function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// Initialize magnetic buttons
document.addEventListener('DOMContentLoaded', initMagneticButtons);

// ==========================================
// PARALLAX MOUSE EFFECT
// ==========================================

function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    if (!hero) return;

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        gsap.to('.hero-text', {
            x: mouseX * 20,
            y: mouseY * 20,
            duration: 1
        });
    });
}

// Initialize parallax effect
if (typeof gsap !== 'undefined') {
    initParallaxEffect();
}

// ==========================================
// PERFORMANCE OPTIMIZATIONS
// ==========================================

// Debounce function for scroll/resize events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    // Additional scroll-based logic can go here
}));

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-base', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%c👨‍💻 Data Analyst Portfolio', 'font-size: 20px; font-weight: bold; color: #00d4ff;');
console.log('%cBuilt with passion and modern web technologies', 'font-size: 12px; color: #a1a1aa;');
console.log('%c🚀 GSAP | Particles.js | Typed.js', 'font-size: 12px; color: #6c5ce7;');

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Get viewport dimensions
function getViewportDimensions() {
    return {
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    };
}

// ==========================================
// CV DOWNLOAD FUNCTION
// ==========================================

function initCVDownload() {
    const downloadBtn = document.getElementById('download-cv-btn');
    
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const cvPath = 'cv/Marko Vuckovic CV.pdf';
        const fileName = 'Marko_Vuckovic_CV.pdf';
        
        // Use XMLHttpRequest for better browser compatibility
        const xhr = new XMLHttpRequest();
        xhr.open('GET', cvPath, true);
        xhr.responseType = 'blob';
        
        xhr.onload = function() {
            if (this.status === 200) {
                const blob = this.response;
                
                // For IE/Edge
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(blob, fileName);
                    return;
                }
                
                // For other browsers
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = fileName;
                
                // Force download by setting type
                a.setAttribute('download', fileName);
                a.setAttribute('target', '_blank');
                
                document.body.appendChild(a);
                
                // Trigger download
                a.click();
                
                // Cleanup
                setTimeout(() => {
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                }, 100);
            }
        };
        
        xhr.onerror = function() {
            console.error('Download failed, trying fallback');
            // Last resort fallback
            const link = document.createElement('a');
            link.href = cvPath;
            link.download = fileName;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
        
        xhr.send();
    });
}

// ==========================================
// SKILLS SECTION ANIMATIONS
// ==========================================

function initSkillsAnimations() {
    // 1. Intersection Observer for Entrance Animations
    const skillCategories = document.querySelectorAll('.skill-category');
    
    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -50px 0px'
    };
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optional: Stop observing after animation
                // skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all skill categories
    skillCategories.forEach(category => {
        skillObserver.observe(category);
    });
    
    // 2. 3D Tilt Effect
    skillCategories.forEach(category => {
        let bounds;
        
        category.addEventListener('mouseenter', () => {
            bounds = category.getBoundingClientRect();
            category.classList.add('tilt-active');
        });
        
        category.addEventListener('mousemove', (e) => {
            if (!bounds) return;
            
            // Calculate mouse position relative to card center
            const mouseX = e.clientX - bounds.left;
            const mouseY = e.clientY - bounds.top;
            
            const centerX = bounds.width / 2;
            const centerY = bounds.height / 2;
            
            // Calculate rotation (max ±10 degrees)
            const rotateX = ((mouseY - centerY) / centerY) * -10;
            const rotateY = ((mouseX - centerX) / centerX) * 10;
            
            // Apply 3D transform
            category.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.02, 1.02, 1.02)
            `;
        });
        
        category.addEventListener('mouseleave', () => {
            category.classList.remove('tilt-active');
            // Reset transform smoothly
            category.style.transform = '';
            bounds = null;
        });
    });
}

// ==========================================
// CONTACT SECTION ANIMATIONS
// ==========================================

function initContactAnimations() {
    const contactHero = document.querySelector('.contact-hero');
    const contactCards = document.querySelectorAll('.contact-card');
    
    if (!contactHero || contactCards.length === 0) return;
    
    // Entrance animations with ScrollTrigger
    gsap.fromTo(contactHero,
        { opacity: 0, y: 50 },
        {
            scrollTrigger: {
                trigger: contactHero,
                start: 'top 80%',
                toggleActions: 'play none none reset'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }
    );
    
    // Staggered card animations
    gsap.fromTo(contactCards,
        { opacity: 0, y: 50 },
        {
            scrollTrigger: {
                trigger: '.contact-cards',
                start: 'top 75%',
                toggleActions: 'play none none reset'
            },
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: 'power2.out'
        }
    );
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// INTERSECTION OBSERVER (Performance & Accessibility)
// ==========================================

function initIntersectionObserver() {
    // Observe sections for lazy loading and animations
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                // Optionally unobserve after first load for performance
                // sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// ==========================================
// SCROLL PROGRESS ARIA UPDATE (Accessibility)
// ==========================================

function updateScrollProgressAria() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;
    
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    scrollProgress.setAttribute('aria-valuenow', scrollPercent);
}

// Export functions for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        throttle,
        isInViewport,
        getViewportDimensions
    };
}
