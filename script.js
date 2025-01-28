// Changer la langue
document.getElementById('langToggle').addEventListener('click', function () {
    const isFrench = document.documentElement.lang === 'fr';

    if (isFrench) {
        document.documentElement.lang = 'en';

        // Changer le texte en anglais
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'About Us';
        document.getElementById('testimonialsLink').textContent = 'Testimonials';
        document.getElementById('contactLink').textContent = 'Contact';
        document.getElementById('heroTitle').textContent = 'Repair your devices quickly and efficiently';
        document.getElementById('heroDescription').textContent = 'Laptops, gaming consoles, and more. We repair all your devices with care and professionalism.';
        document.getElementById('ctaButton').textContent = 'Request a Repair';
        document.getElementById('servicesTitle').textContent = 'Our Services';
        document.getElementById('aboutTitle').textContent = 'About FixMyDevice';
        document.getElementById('aboutDescription').textContent = 'We specialize in laptop and gaming console repair. Fast, reliable service.';
        document.getElementById('testimonialsTitle').textContent = 'What Our Clients Say';
        document.getElementById('testimonial1').textContent = '"The service is fast and professional. Highly recommend!"';
        document.getElementById('testimonial2').textContent = '"Perfect console repair, affordable pricing, very satisfied!"';
        document.getElementById('testimonial3').textContent = '"FixMyDevice is my go-to for all my repairs. Very responsive!"';
        document.querySelector('button[type="submit"]').textContent = 'Send';
        document.getElementById('footerText').textContent = '© 2025 FixMyDevice - All rights reserved.';
        document.getElementById('langToggle').textContent = 'FR';

        // Translate contact form labels
        document.querySelector('label[for="name"]').textContent = 'Name';
        document.querySelector('label[for="email"]').textContent = 'Email';
        document.querySelector('label[for="message"]').textContent = 'Message';

    } else {
        document.documentElement.lang = 'fr';

        // Changer le texte en français
        document.getElementById('serviceLink').textContent = 'Services';
        document.getElementById('aboutLink').textContent = 'À propos';
        document.getElementById('testimonialsLink').textContent = 'Témoignages';
        document.getElementById('contactLink').textContent = 'Contact';
        document.getElementById('heroTitle').textContent = 'Réparez vos appareils, rapidement et efficacement';
        document.getElementById('heroDescription').textContent = 'Ordinateurs portables, consoles de jeux, et plus encore. Nous réparons tous vos appareils avec soin et professionnalisme.';
        document.getElementById('ctaButton').textContent = 'Demander une réparation';
        document.getElementById('servicesTitle').textContent = 'Nos Services';
        document.getElementById('aboutTitle').textContent = 'À propos de FixMyDevice';
        document.getElementById('aboutDescription').textContent = 'Nous sommes spécialisés dans la réparation d\'ordinateurs portables et de consoles de jeux. Grâce à notre expertise et à nos services de qualité, nous vous garantissons une réparation rapide et efficace.';
        document.getElementById('testimonialsTitle').textContent = 'Ce que nos clients disent';
        document.getElementById('testimonial1').textContent = '"Le service est rapide et professionnel. Je recommande !"';
        document.getElementById('testimonial2').textContent = '"Réparation de ma console parfaite, prix abordables, très satisfait !"';
        document.getElementById('testimonial3').textContent = '"FixMyDevice est mon go-to pour toutes mes réparations. Très réactifs!"';
        document.querySelector('button[type="submit"]').textContent = 'Envoyer';
        document.getElementById('footerText').textContent = '© 2025 FixMyDevice - Tous droits réservés.';
        document.getElementById('langToggle').textContent = 'EN';

        // Translate contact form labels
        document.querySelector('label[for="name"]').textContent = 'Nom';
        document.querySelector('label[for="email"]').textContent = 'Email';
        document.querySelector('label[for="message"]').textContent = 'Message';
    }
});
