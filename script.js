// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scrolling for navigation links
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

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-400');
        link.classList.remove('text-brand');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-brand');
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-card, .project-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Form submission handling
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    // Start typing immediately without any initial delay
    type();
}

// Hero title displays immediately without typing animation
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('#home h1');
    if (heroTitle) {
        // Title displays immediately without any animation
        heroTitle.style.opacity = '1';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// Removed skills progress animation (replaced section with Pricing)

// Add enhanced hover effects for project cards and services cards
document.querySelectorAll('.project-card, .card-hover').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-12px) scale(1.08)';
        card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    // Add subtle mouse tracking for more dynamic effect
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        card.style.transform = `translateY(-12px) scale(1.08) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
    });
});

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('section');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    
    section.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    #home {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Initialize reveal animation
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);
