const translations = {
  fr: {
    title: "Réparez Mon Appareil",
    subtitle: "Service de réparation pour ordinateurs, consoles de jeux vidéo et plus encore.",
    description: "Nous offrons des réparations rapides et fiables pour tous vos appareils électroniques.",
    laptops: "Ordinateurs Portables",
    consoles: "Consoles de Jeux Vidéo",
    pcs: "Ordinateurs de Bureau",
    button: "Obtenir une Estimation",
    contact: "Contactez-Nous",
  },
  en: {
    title: "Fix My Device",
    subtitle: "Repair service for laptops, video game consoles, and more.",
    description: "We provide fast and reliable repairs for all your electronic devices.",
    laptops: "Laptops",
    consoles: "Video Game Consoles",
    pcs: "Desktop Computers",
    button: "Get a Quote",
    contact: "Contact Us",
  },
};

// DOM Elements
const languageSelector = document.getElementById("language-selector");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const description = document.getElementById("description");
const laptops = document.getElementById("laptops");
const consoles = document.getElementById("consoles");
const pcs = document.getElementById("pcs");
const button = document.getElementById("cta-button");
const contact = document.getElementById("contact");

// Event Listener for Language Change
languageSelector.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  const t = translations[selectedLanguage];

  // Update Text
  title.textContent = t.title;
  subtitle.textContent = t.subtitle;
  description.textContent = t.description;
  laptops.textContent = t.laptops;
  consoles.textContent = t.consoles;
  pcs.textContent = t.pcs;
  button.textContent = t.button;
  contact.textContent = t.contact;
});
