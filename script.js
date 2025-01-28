function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-en], [data-fr]');
    
    elements.forEach((element) => {
        if (language === 'fr') {
            element.textContent = element.getAttribute('data-fr');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
}
