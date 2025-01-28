// Function to toggle between French and English
document.getElementById('langToggle').addEventListener('click', function () {
    const isFrench = document.documentElement.lang === 'fr';

    // Toggle language
    if (isFrench) {
        document.documentElement.lang = 'en';
        
        // Change texts to English
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'About Us';
        document.getElementById('contactLink').textContent = 'Contact';
        
        document.getElementById('servicesTitle').textContent = 'Our Services';
        document.getElementById('servicesDescription').textContent = 'We repair laptops and gaming consoles.';
        
        document.getElementById('aboutTitle').textContent = 'About Us';
        document.getElementById('aboutDescription').textContent = 'FixMyDevice is a reliable and fast repair service.';
        
        document.getElementById('nameLabel').textContent = 'Name';
        document.getElementById('emailLabel').textContent = 'Email';
        
        document.querySelector('button[type="submit"]').textContent = 'Send';
        document.getElementById('footerText').textContent = '© 2025 FixMyDevice - All rights reserved.';
        
        // Change the language toggle button text
        document.getElementById('langToggle').textContent = 'FR';
    } else {
        document.documentElement.lang = 'fr';
        
        // Change texts to French
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'À propos';
        document.getElementById('contactLink').textContent = 'Contact';
        
        document.getElementById('servicesTitle').textContent = 'Nos Services';
        document.getElementById('servicesDescription').textContent = 'Nous réparons les ordinateurs portables et les consoles de jeux vidéo.';
        
        document.getElementById('aboutTitle').textContent = 'À propos';
        document.getElementById('aboutDescription').textContent = 'FixMyDevice est un service de réparation fiable et rapide.';
        
        document.getElementById('nameLabel').textContent = 'Nom';
        document.getElementById('emailLabel').textContent = 'Email';
        
        document.querySelector('button[type="submit"]').textContent = 'Envoyer';
        document.getElementById('footerText').textContent = '© 2025 FixMyDevice - Tous droits réservés.';
        
        // Change the language toggle button text
        document.getElementById('langToggle').textContent = 'EN';
    }
});
