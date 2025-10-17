// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, subject, message });
    
    // Show success message
    alert(`Thank you ${name}! Your ${subject} inquiry has been received. I'll get back to you soon.`);
    
    // Reset form
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add initial styles for animation
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add typing effect to hero text
    const heroTitle = document.querySelector('.hero-text h1');
    const originalText = heroTitle.textContent;
    
    // Only apply typing effect if the text is not too long
    if (originalText.length < 50) {
        typeWriter(heroTitle, originalText, 80);
    }
});

// Typing effect function
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) rotate(2deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0)';
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add scroll progress indicator (optional)
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--tech-gradient);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Uncomment the line below if you want to add a scroll progress bar
// createScrollProgress();

// Add theme toggle functionality (optional)
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--tech-gradient);
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        const icon = this.querySelector('i');
        if (document.body.classList.contains('light-theme')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
    
    document.body.appendChild(themeToggle);
}

// Uncomment the line below if you want to add a theme toggle
// createThemeToggle();

// Add CSS for light theme (optional)
const lightThemeStyles = `
    .light-theme {
        --dark: #f8f9fa;
        --dark-light: #e9ecef;
        --light: #10002b;
        --gray: #495057;
    }
    
    .light-theme .geometric-bg {
        opacity: 0.1;
    }
    
    .light-theme header {
        background-color: rgba(248, 249, 250, 0.9);
        border-bottom: 1px solid rgba(157, 78, 221, 0.1);
    }
    
    .light-theme .nav-links a {
        color: var(--light);
    }
    
    .light-theme .skill-category,
    .light-theme .project-card,
    .light-theme .contact-form,
    .light-theme .contact-item,
    .light-theme .timeline-item {
        background: rgba(233, 236, 239, 0.7);
    }
    
    .light-theme footer {
        background: rgba(248, 249, 250, 0.9);
    }
    
    .light-theme .form-control {
        background: rgba(248, 249, 250, 0.7);
        color: var(--light);
        border: 2px solid rgba(157, 78, 221, 0.2);
    }
`;

// Add light theme styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = lightThemeStyles;
document.head.appendChild(styleSheet);

// Add particle effect (optional)
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(particlesContainer);
    
    // Create particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary);
            border-radius: 50%;
            opacity: 0.3;
            animation: float-particle ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 10}s;
        `;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add particle animation
    const particleAnimation = `
        @keyframes float-particle {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-20px) translateX(10px);
            }
            50% {
                transform: translateY(-40px) translateX(-10px);
            }
            75% {
                transform: translateY(-20px) translateX(-5px);
            }
        }
    `;
    
    const particleStyle = document.createElement('style');
    particleStyle.textContent = particleAnimation;
    document.head.appendChild(particleStyle);
}

// Uncomment the line below if you want to add particles
// createParticles();

// Console greeting
console.log(`
%cAnn Tricha Mhay A. Montecalvo - Portfolio
%cWelcome to my portfolio! 👩‍💻
%cFeel free to explore the code and get in touch if you'd like to collaborate.
`,
'color: #00f5d4; font-size: 18px; font-weight: bold;',
'color: #9d4edd; font-size: 14px;',
'color: #adb5bd; font-size: 12px;'
);

// ... (keep all previous JavaScript the same) ...

// Add tech orbs around profile picture
function createTechOrbs() {
    const profileContainer = document.querySelector('.profile-container');
    if (!profileContainer) return;
    
    const techIcons = ['fa-code', 'fa-cloud', 'fa-shield-alt', 'fa-database'];
    
    techIcons.forEach((icon, index) => {
        const orb = document.createElement('div');
        orb.className = 'tech-orb';
        orb.innerHTML = `<i class="fas ${icon}"></i>`;
        orb.style.animationDelay = `-${index * 5}s`;
        profileContainer.appendChild(orb);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add initial styles for animation
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
  
});

// ... (keep all remaining JavaScript the same) ...


// Add this to your existing script.js file

// Project data for dynamic updates
const projects = [
    {
        title: "Travel landing page",
        description: "An intelligent data processing system that uses machine learning to provide actionable business insights and predictive analytics.",
        technologies: ["Python", "TensorFlow", "React", "AWS"],
        githubUrl: "https://github.com/trichamonteccalvo/TravelFinal",
        demoUrl: "#",
        icon: "fa-robot"
    },
    {
        title: "Personal Portfolio",
        description: "A distributed computing platform that leverages blockchain technology to create a secure, transparent cloud infrastructure.",
        technologies: ["Blockchain", "Node.js", "Solidity", "Docker"],
        githubUrl: "https://github.com/trichamonteccalvo/Personal-Profile",
        demoUrl: "#",
        icon: "fa-network-wired"
    },
    {
        title: "Paws & Tasks",
        description: "A virtual reality application that transforms complex educational concepts into interactive 3D experiences for enhanced learning.",
        technologies: ["Unity", "C#", "WebGL", "Three.js"],
        githubUrl: "https://task-reminder-seven.vercel.app/",
        demoUrl: "#",
        icon: "fa-vr-cardboard"
    }
];

// Function to update project links with actual GitHub URLs
function updateProjectLinks() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        if (projects[index]) {
            const githubLink = card.querySelector('.btn-github');
            const demoLink = card.querySelector('.btn-secondary');
            
            if (githubLink) {
                githubLink.href = projects[index].githubUrl;
            }
            
            if (demoLink && projects[index].demoUrl !== "#") {
                demoLink.href = projects[index].demoUrl;
            } else {
                demoLink.style.display = 'none';
            }
        }
    });
}

// GitHub link analytics (optional)
function trackGitHubClicks() {
    const githubLinks = document.querySelectorAll('.btn-github');
    
    githubLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const projectName = this.closest('.project-card').querySelector('h3').textContent;
            console.log(`GitHub link clicked for: ${projectName}`);
            
            // You can add Google Analytics or other tracking here
            // gtag('event', 'github_click', {
            //     'project_name': projectName,
            //     'link_url': this.href
            // });
        });
    });
}

// Initialize project functionality
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Update project links
    updateProjectLinks();
    
    // Track GitHub clicks
    trackGitHubClicks();
    
    // Add loading states for external links
    addExternalLinkHandlers();
});

// Add loading states for external links
function addExternalLinkHandlers() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add loading indicator
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.style.opacity = '0.7';
            
            // Reset after delay (in case page takes time to load)
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.opacity = '1';
            }, 2000);
        });
    });
}