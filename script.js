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

// Form submission handling - REMOVED to prevent conflict with StaticForms
// The contact form is now handled in the HTML file with StaticForms integration

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
        card.style.transform = 'translateY(-8px) scale(1.03)';
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
        
        card.style.transform = `translateY(-8px) scale(1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
    });
});



// Modal functionality for all cards
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

// Function to open modal
function openModal(content) {
    modalBody.innerHTML = content;
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Add animation
    modalContent.style.transform = 'scale(0.9)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
    }, 10);
}

// Function to close modal
function closeModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking overlay or close button
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

modalClose.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
        closeModal();
    }
});

// Project card modal functionality
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const title = img.alt;
        const description = '';
        const technologies = [];
        
        // Define project-specific details for the modal
        let features = [];
        let liveLink = '';
        let allTechnologies = [];
        
        // Set features, live link, and all technologies based on project title
        if (title.includes('Next Venture')) {
            features = [
                'High-Performance Architecture',
                'Headless CMS Integration',
                'Seamless Authentication',
                'Polished & Accessible UI'
            ];
            liveLink = 'https://ab-next-venture.vercel.app/';
            allTechnologies = [
                'Next.js 15',
                'TypeScript',
                'Tailwind CSS',
                'Shadcn UI',
                'Motion.dev',
                'Auth.js',
                'Sanity CMS',
                'GROQ'
            ];
        } else if (title.includes('Zenith Academy')) {
            features = [
                'Content Lifecycle – Create, Consume, Rate',
                'Secure Authentication with JWT & Bcrypt',
                'Razorpay-Powered Payments',
                'Cloud-Based Media Management',
                'Animated UI with Motion.dev'
            ];
            liveLink = 'https://academy.aayushbharti.in/';
            allTechnologies = [
                'Express.js',
                'MongoDB',
                'Mongoose',
                'JWT',
                'Bcrypt',
                'Razorpay',
                'Cloud Storage',
                'Motion.dev',
                'RESTful API',
                'Turborepo'
            ];
        } else if (title.includes('Snippix')) {
            features = [
                'Themes & Fonts',
                'Language Detection',
                'Export Options',
                'Deep Customization',
                'Resizable Canvas & Shortcuts'
            ];
            liveLink = 'https://snippix.vercel.app/';
            allTechnologies = [
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Vercel',
                'Canvas API',
                'Syntax Highlighting',
                'Export Functionality',
                'Responsive Design'
            ];
        }
        
        // Enhanced descriptions for each project
        let enhancedDescription = '';
        let projectType = '';
        let developmentTime = '';
        let targetAudience = '';
        
        if (title.includes('Next Venture')) {
            enhancedDescription = 'A comprehensive startup pitch platform built with modern web technologies. This full-stack application provides entrepreneurs with a professional platform to showcase their business ideas, connect with investors, and manage their startup journey. Features include user authentication, content management, and a responsive design optimized for all devices.';
            projectType = 'Full-Stack Web Application';
            developmentTime = '4-6 weeks';
            targetAudience = 'Entrepreneurs, Startups, Investors';
        } else if (title.includes('Zenith Academy')) {
            enhancedDescription = 'An innovative EdTech platform that revolutionizes online learning through interactive content and seamless user experience. Built with a robust backend and modern frontend technologies, it provides a comprehensive learning management system with secure payments, content creation tools, and progress tracking.';
            projectType = 'Educational Technology Platform';
            developmentTime = '6-8 weeks';
            targetAudience = 'Students, Educators, Learning Institutions';
        } else if (title.includes('Snippix')) {
            enhancedDescription = 'A developer-focused tool for creating and sharing beautiful code snippets across social media platforms. Built with React and TypeScript, it offers extensive customization options including multiple themes, language detection, and various export formats. Perfect for developers who want to showcase their code with style.';
            projectType = 'Developer Tool';
            developmentTime = '3-4 weeks';
            targetAudience = 'Developers, Programmers, Tech Content Creators';
        }
        
        const modalContent = `
            <div class="space-y-6">
                <div class="text-center">
                    <h2 class="text-2xl font-bold text-brand mb-2">${title}</h2>
                    <div class="w-16 h-1 md:h-1 h-0.5 bg-brand mx-auto section-divider"></div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-3 text-white">Project Overview</h3>
                    <p class="text-gray-300 leading-relaxed">${enhancedDescription}</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-lg font-semibold mb-3 text-white">Project Details</h3>
                        <div class="space-y-3">
                            <div class="flex items-center">
                                <i class="fas fa-layer-group text-brand mr-3 w-5"></i>
                                <div>
                                    <p class="text-sm text-gray-400">Project Type</p>
                                    <p class="text-gray-300">${projectType}</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-clock text-brand mr-3 w-5"></i>
                                <div>
                                    <p class="text-sm text-gray-400">Development Time</p>
                                    <p class="text-gray-300">${developmentTime}</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-users text-brand mr-3 w-5"></i>
                                <div>
                                    <p class="text-sm text-gray-400">Target Audience</p>
                                    <p class="text-gray-300">${targetAudience}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-3 text-white">Technologies Used</h3>
                        <div class="flex flex-wrap gap-2">
                            ${allTechnologies.map(tech => `<span class="px-3 py-1 bg-gray-700 text-white text-sm rounded-full">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-3 text-white">Key Features</h3>
                    <ul class="space-y-2">
                        ${features.map(feature => `<li class="text-gray-300 flex items-start"><i class="fas fa-check text-brand mr-2 mt-1"></i>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="text-center pt-4">
                    <a href="${liveLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-brand text-gray-900 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
                        <i class="fas fa-external-link-alt mr-2"></i> View Live Project
                    </a>
                </div>
            </div>
        `;
        
        openModal(modalContent);
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
    // Mark page as loaded and hide loader overlay
    document.documentElement.classList.add('page-loaded');
});

// Add CSS for loading animation
// Remove previous body opacity loader to avoid black flash

// Count-up animation for hero metrics
function animateCountUp(element, target, duration = 1200) {
    const start = 0;
    const startTime = performance.now();
    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const value = Math.floor(start + (target - start) * eased);
        element.textContent = value.toString();
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.countup');
    if (counters.length) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-target') || '0', 10);
                    animateCountUp(el, target);
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.6 });
        counters.forEach(c => io.observe(c));
    }
});
