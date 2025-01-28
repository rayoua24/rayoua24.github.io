// Fonction pour changer de langue
document.getElementById('langToggle').addEventListener('click', function () {
    const isFrench = document.documentElement.lang === 'fr';

    // Toggle language
    if (isFrench) {
        document.documentElement.lang = 'en';
        
        // Changer les textes en anglais
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'About Us';
        document.getElementById('testimonialsLink').textContent = 'Testimonials';
        document.getElementById('contactLink').textContent = 'Contact';
        
        document.getElementById('servicesTitle').textContent = 'Our Services';
        document.getElementById('aboutTitle').textContent = 'About FixMyDevice';
        document.getElementById('aboutDescription').textContent = 'FixMyDevice is your expert in laptop and gaming console repairs. We offer fast, reliable, and professional service for all your electronic devices.';
        
        document.getElementById('testimonialsTitle').textContent = 'What Our Clients Say';
        
        document.querySelector('button[type="submit"]').textContent = 'Send';
        document.getElementById('footerText').textContent = '© 2025 FixMyDevice - All rights reserved.';
        
        document.getElementById('langToggle').textContent = 'FR';
    } else {
        document.documentElement.lang = 'fr';
        
        // Revenir en français
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'À propos';
        document.getElementById('testimonialsLink').textContent = 'Témoignages';
        document.getElementById('contactLink').textContent = 'Contact';
        
        document.getElementById('servicesTitle').textContent = 'Nos Services';
        document.getElementById('aboutTitle').textContent = 'À propos de FixMyDevice';
        document.getElementById('aboutDescription').textContent = 'FixMyDevice est votre expert en réparation d\'ordinateurs portables et de consoles de jeux. Nous offrons un service rapide, fiable, et professionnel pour tous vos appareils électroniques.';
        
        document.getElementById('testimonialsTitle').textContent = 'Ce que nos clients disent';
        
        document.querySelector('button[type="submit"]').textContent = 'Envoyer';
        document.getElementById('footerText').textContent = '© 2025 FixMyDevice - Tous droits réservés.';
        
        document.getElementById('langToggle').textContent = 'EN';
    }
});
