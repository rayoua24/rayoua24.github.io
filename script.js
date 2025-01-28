document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("langToggle");

    const translations = {
        en: {
            heroTitle: "Welcome to FixMyDevice",
            servicesTitle: "Our Services",
            aboutTitle: "About Us",
            contactButton: "Send Message",
            langButton: "Français"
        },
        fr: {
            heroTitle: "Bienvenue chez FixMyDevice",
            servicesTitle: "Nos Services",
            aboutTitle: "À propos de nous",
            contactButton: "Envoyer le message",
            langButton: "English"
        }
    };

    let currentLang = "en";

    langToggle.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "fr" : "en";
        document.getElementById("hero").querySelector("h2").innerText = translations[currentLang].heroTitle;
        document.getElementById("services").querySelector("h2").innerText = translations[currentLang].servicesTitle;
        document.getElementById("about").querySelector("h2").innerText = translations[currentLang].aboutTitle;
        document.querySelector("button[type='submit']").innerText = translations[currentLang].contactButton;
        langToggle.innerText = translations[currentLang].langButton;
    });
});
