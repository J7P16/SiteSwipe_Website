// Mobile Menu Icon Button Toggle Function
document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        // Navigation Toggle Function
        nav.classList.toggle('nav-active');

        // Link Animations
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Mobile Menu Icon Animation
        burger.classList.toggle('toggle');

    });
});

// Smooth Scroll Functionality
const navLinksSmooth = document.querySelectorAll('.nav-links a');

for (const link of navLinksSmooth) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {

    e.preventDefault();
    const href = this.getAttribute('href');

    if (href.startsWith('#')) {
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        window.location.href = href;
    }
    
}
