document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("langToggle");

    const translations = {
        en: {
            heroTitle: "Welcome to FixMyDevice",
            heroText: "Your trusted tech repair service.",
            servicesTitle: "Our Services",
            aboutTitle: "About Us",
            aboutDescription: "FixMyDevice has been repairing devices with top-quality service since 2010.",
            contactButton: "Send Message",
            langButton: "Français"
        },
        fr: {
            heroTitle: "Bienvenue chez FixMyDevice",
            heroText: "Votre service de réparation technologique de confiance.",
            servicesTitle: "Nos Services",
            aboutTitle: "À propos de nous",
            aboutDescription: "FixMyDevice répare vos appareils avec un service de qualité depuis 2010.",
            contactButton: "Envoyer le message",
            langButton: "English"
        }
    };

    let currentLang = "en";

    langToggle.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "fr" : "en";
        document.getElementById("hero").querySelector("h2").innerText = translations[currentLang].heroTitle;
        document.getElementById("hero").querySelector("p").innerText = translations[currentLang].heroText;
        document.getElementById("servicesTitle").innerText = translations[currentLang].servicesTitle;
        document.getElementById("aboutTitle").innerText = translations[currentLang].aboutTitle;
        document.getElementById("aboutDescription").innerText = translations[currentLang].aboutDescription;
        document.querySelector("button[type='submit']").innerText = translations[currentLang].contactButton;
        langToggle.innerText = translations[currentLang].langButton;
    });
});
