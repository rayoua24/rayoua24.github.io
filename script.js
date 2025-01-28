document.addEventListener('DOMContentLoaded', () => {
    // Language System
    const translations = {
        'fr': {
            'home': 'Accueil',
            'services': 'Services',
            'about': 'À Propos',
            'contact': 'Contact',
            'heroTitle': 'Réparation Express<br>de vos Appareils',
            'heroText': 'Réparations garanties en 24h pour consoles et ordinateurs',
            'cta1': 'Diagnostic Gratuit',
            'servicesTitle': 'Nos Services Premium',
            'fastRepair': 'Réparation Express',
            'fastRepairText': '90% des réparations terminées en moins de 24h',
            'dataProtection': 'Protection des Données',
            'dataProtectionText': 'Récupération sécurisée de vos données sensibles',
            'contactTitle': 'Contact Rapide',
            'name': 'Nom Complet',
            'email': 'Adresse Email',
            'send': 'Envoyer la Demande'
        },
        'en': {
            'home': 'Home',
            'services': 'Services',
            'about': 'About',
            'contact': 'Contact',
            'heroTitle': 'Fast Repair<br>for Your Devices',
            'heroText': '24h guaranteed repairs for consoles and computers',
            'cta1': 'Free Diagnosis',
            'servicesTitle': 'Premium Services',
            'fastRepair': 'Fast Repair',
            'fastRepairText': '90% of repairs completed in under 24h',
            'dataProtection': 'Data Protection',
            'dataProtectionText': 'Secure recovery of sensitive data',
            'contactTitle': 'Quick Contact',
            'name': 'Full Name',
            'email': 'Email Address',
            'send': 'Send Request'
        }
    };

    // Language Toggle
    const langToggle = document.getElementById('languageToggle');
    let currentLang = 'fr';

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const keys = el.getAttribute('data-i18n').split('.');
            let value = translations[currentLang];
            keys.forEach(key => value = value[key]);
            el.innerHTML = value;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = translations[currentLang][el.getAttribute('data-i18n-placeholder')];
        });
    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        updateContent();
        langToggle.textContent = currentLang === 'fr' ? 'FR/EN' : 'EN/FR';
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Form Animation
    document.querySelectorAll('.form-group input').forEach(input => {
        input.addEventListener('input', () => {
            if (input.value !== '') {
                input.parentNode.classList.add('filled');
            } else {
                input.parentNode.classList.remove('filled');
            }
        });
    });
});
