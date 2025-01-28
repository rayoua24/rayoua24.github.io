// Changer la langue
document.getElementById('langToggle').addEventListener('click', function () {
    const isFrench = document.documentElement.lang === 'fr';

    if (isFrench) {
        document.documentElement.lang = 'en';
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'About Us';
        document.getElementById('testimonialsLink').textContent = 'Testimonials';
        document.getElementById('contactLink').textContent = 'Contact';
        document.getElementById('servicesTitle').textContent = 'Our Services';
        document.getElementById('aboutTitle').textContent = 'About FixMyDevice';
        document.getElementById('aboutDescription').textContent = 'We specialize in laptop and gaming console repair. Fast, reliable service.';
        document.getElementById('testimonialsTitle').textContent = 'What Our Clients Say';
        document.querySelector('button[type="submit"]').textContent = 'Send';
        document.getElementById('footerText').textContent = '© 2025 FixMyDevice - All rights reserved.';
        document.getElementById('langToggle').textContent = 'FR';
    } else {
        document.documentElement.lang = 'fr';
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'À propos';
        document.getElementById('testimonialsLink').textContent = 'Témoignages';
        document.getElementById('contactLink').textContent = 'Contact';
        document.getElementById('servicesTitle').textContent = 'Nos Services';
        document.getElementById('aboutTitle').textContent = 'À propos de FixMyDevice';
        document.getElementById('aboutDescription').textContent = 'Nous sommes spécialisés dans la réparation d\'ordinateurs portables et de consoles de jeux. Service rapide et fiable.';
        document.getElementById('testimonialsTitle').textContent = 'Ce que nos clients disent';
        document.querySelector('button[type="submit"]').textContent = 'Envoyer';
        document.getElementById('footerText').textContent = '© 2025 FixMyDevice - Tous droits réservés.';
        document.getElementById('langToggle').textContent = 'EN';
    }
});
