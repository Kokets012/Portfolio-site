// Custom JavaScript - script.js

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
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
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            navbar.style.backgroundColor = '#2c3e50';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});

//-----------------------------------------

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const toggleIcon = document.getElementById('toggleIcon');
const htmlElement = document.documentElement;

// Check for saved theme preference or prefer-color-scheme
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme
if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Toggle function
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    toggleIcon.className = 'bi bi-sun';
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    toggleIcon.className = 'bi bi-moon';
    localStorage.setItem('theme', 'light');
}

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) { // Only if user hasn't set a preference
        if (e.matches) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
});