// Burger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
});

// Smooth Scroll (Optional Enhancement)
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
