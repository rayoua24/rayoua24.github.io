// Changer la langue
document.getElementById('langToggle').addEventListener('click', function () {
    const isFrench = document.documentElement.lang === 'fr';

    if (isFrench) {
        document.documentElement.lang = 'en'; // Change to English

        // Update text to English
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'About Us';
        document.getElementById('contactLink').textContent = 'Contact';
        document.getElementById('heroTitle').textContent = 'Repair your devices quickly and efficiently';
        document.getElementById('heroDescription').textContent = 'Laptops, gaming consoles, and more. We repair all your devices with care and professionalism.';
        document.getElementById('ctaButton').textContent = 'Request a Repair';
        document.getElementById('servicesTitle').textContent = 'Our Services';
        document.getElementById('aboutTitle').textContent = 'About FixMyDevice';
        document.getElementById('aboutDescription').textContent = 'We specialize in laptop and gaming console repair. Fast, reliable service.';
        document.getElementById('langToggle').textContent = 'FR'; // Switch button to FR

        // Services section
        document.querySelector('.service-card:nth-child(1) h3').textContent = 'Laptops';
        document.querySelector('.service-card:nth-child(1) p').textContent = 'Repair and optimization for all types of laptops.';
        document.querySelector('.service-card:nth-child(2) h3').textContent = 'Gaming Consoles';
        document.querySelector('.service-card:nth-child(2) p').textContent = 'Quick repairs for PlayStation, Xbox, Nintendo Switch, and more.';
        document.querySelector('.service-card:nth-child(3) h3').textContent = 'Maintenance & Optimization';
        document.querySelector('.service-card:nth-child(3) p').textContent = 'Services to boost the performance of your devices.';

        // Contact form
        document.querySelector('label[for="name"]').textContent = 'Name';
        document.querySelector('label[for="email"]').textContent = 'Email';
        document.querySelector('label[for="message"]').textContent = 'Message';
        document.querySelector('button[type="submit"]').textContent = 'Send';

        // Footer
        document.getElementById('footerText').textContent = '© 2025 FixMyDevice - All rights reserved.';

    } else {
        document.documentElement.lang = 'fr'; // Change to French

        // Update text to French
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'À propos';
        document.getElementById('contactLink').textContent = 'Contact';
        document.getElementById('heroTitle').textContent = 'Réparez vos appareils, rapidement et efficacement';
        document.getElementById('heroDescription').textContent = 'Ordinateurs portables, consoles de jeux, et plus encore. Nous réparons tous vos appareils avec soin et professionnalisme.';
        document.getElementById('ctaButton').textContent = 'Demander une réparation';
        document.getElementById('servicesTitle').textContent = 'Nos Services';
        document.getElementById('aboutTitle').textContent = 'À propos de FixMyDevice';
        document.getElementById('aboutDescription').textContent = 'Nous sommes spécialisés dans la réparation d\'ordinateurs portables et de consoles de jeux. Grâce à notre expertise et à nos services de qualité, nous vous garantissons une réparation rapide et efficace.';
        document.getElementById('langToggle').textContent = 'EN'; // Switch button to EN

        // Services section
        document.querySelector('.service-card:nth-child(1) h3').textContent = 'Ordinateurs portables';
        document.querySelector('.service-card:nth-child(1) p').textContent = 'Réparation et optimisation pour tous types de laptops.';
        document.querySelector('.service-card:nth-child(2) h3').textContent = 'Consoles de jeux';
        document.querySelector('.service-card:nth-child(2) p').textContent = 'Réparation rapide pour PlayStation, Xbox, Nintendo Switch, et plus.';
        document.querySelector('.service-card:nth-child(3) h3').textContent = 'Maintenance & Optimisation';
        document.querySelector('.service-card:nth-child(3) p').textContent = 'Des services pour améliorer la performance de vos appareils.';

        // Contact form
        document.querySelector('label[for="name"]').textContent = 'Nom';
        document.querySelector('label[for="email"]').textContent = 'Email';
        document.querySelector('label[for="message"]').textContent = 'Message';
        document.querySelector('button[type="submit"]').textContent = 'Envoyer';

        // Footer
        document.getElementById('footerText').textContent = '© 2025 FixMyDevice - Tous droits réservés.';
    }
});
