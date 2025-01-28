document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('languageToggle');
    let currentLang = 'en';

    // Language toggle function
    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        document.documentElement.lang = currentLang;
        
        document.querySelectorAll('.lang-switch').forEach(element => {
            if(element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = element.getAttribute(`data-${currentLang}`);
            } else {
                element.textContent = element.getAttribute(`data-${currentLang}`);
            }
        });
    }

    languageToggle.addEventListener('click', toggleLanguage);

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert(currentLang === 'en' ? 'Thank you! We will contact you soon.' : 'Merci! Nous vous contacterons bientôt.');
        e.target.reset();
    });
});
