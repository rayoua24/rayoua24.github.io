// Fonction pour changer la langue
document.getElementById('langToggle').addEventListener('click', () => {
    const isFrench = document.documentElement.lang === 'fr';
    
    // Toggle language
    if (isFrench) {
        document.documentElement.lang = 'en';
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'About Us';
        document.getElementById('contactLink').textContent = 'Contact';
        document.querySelector('h2').textContent = 'Our Services';
        document.querySelectorAll('p')[0].textContent = 'We repair laptops and gaming consoles.';
        document.querySelectorAll('h2')[1].textContent = 'About Us';
        document.querySelectorAll('p')[1].textContent = 'FixMyDevice is a reliable and fast repair service.';
        document.querySelectorAll('h2')[2].textContent = 'Contact';
        document.querySelector('label[for="name"]').textContent = 'Name';
        document.querySelector('label[for="email"]').textContent = 'Email';
        document.querySelector('button[type="submit"]').textContent = 'Send';
        document.querySelector('footer p').textContent = '© 2025 FixMyDevice - All rights reserved.';
        document.getElementById('langToggle').textContent = 'FR';
    } else {
        document.documentElement.lang = 'fr';
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'À propos';
        document.getElementById('contactLink').textContent = 'Contact';
        document.querySelector('h2').textContent = 'Nos Services';
        document.querySelectorAll('p')[0].textContent = 'Nous réparons les ordinateurs portables et les consoles de jeux vidéo.';
        document.querySelectorAll('h2')[1].textContent = 'À propos';
        document.querySelectorAll('p')[1].textContent = 'FixMyDevice est un service de réparation fiable et rapide.';
        document.querySelectorAll('h2')[2].textContent = 'Contact';
        document.querySelector('label[for="name"]').textContent = 'Nom';
        document.querySelector('label[for="email"]').textContent = 'Email';
        document.querySelector('button[type="submit"]').textContent = 'Envoyer';
        document.querySelector('footer p').textContent = '© 2025 FixMyDevice - Tous droits réservés.';
        document.getElementById('langToggle').textContent = 'EN';
    }
});
