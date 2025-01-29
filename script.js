const translations = {
  fr: {
    title: "FIX MY DEVICE",
    subtitle: "Service de réparation pour ordinateurs, consoles de jeux vidéo et plus encore.",
    description: "Nous offrons des réparations rapides et fiables pour tous vos appareils électroniques.",
    laptops: "Ordinateurs Portables",
    laptopsDesc: "Que ce soit un écran fissuré, un clavier défectueux ou des problèmes de performance, nous réparons toutes les marques et modèles d'ordinateurs portables.",
    consoles: "Consoles de Jeux Vidéo",
    consolesDesc: "Votre console surchauffe ou plante pendant vos parties? Nous réparons les PlayStation, Xbox, Nintendo et plus encore.",
    pcs: "Ordinateurs de Bureau",
    pcsDesc: "Des mises à niveau de matériel à la résolution de problèmes logiciels, nous réparons tout pour que votre ordinateur fonctionne comme neuf.",
    button: "Obtenir une Estimation",
    contact: "Contactez-Nous",
    processTitle: "Notre Processus",
    processSteps: [
      { title: "Demander un Devis", desc: "Remplissez notre formulaire en ligne, et recevez une estimation par email en quelques heures." },
      { title: "Envoyez Votre Appareil", desc: "Si le prix vous convient, envoyez-nous votre appareil pour réparation." },
      { title: "Réparation Rapide", desc: "Votre appareil est réparé en 1 à 3 jours et expédié dès le lendemain après paiement." }
    ],
    form: {
      title: "Obtenez une Estimation",
      name: "Nom:",
      email: "Email:",
      device: "Type d'Appareil:",
      issue: "Décrivez le Problème:",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre email",
      issuePlaceholder: "Décrivez brièvement le problème",
      submit: "Soumettre",
      deviceOptions: {
        laptop: "Ordinateur Portable",
        console: "Console",
        pc: "Ordinateur de Bureau",
        other: "Autre",
      }
    },
  },
  en: {
    title: "FIX MY DEVICE",
    subtitle: "Repair service for laptops, video game consoles, and more.",
    description: "We provide fast and reliable repairs for all your electronic devices.",
    laptops: "Laptops",
    laptopsDesc: "Whether it’s a cracked screen, a faulty keyboard, or performance issues, we repair all laptop brands and models to get you back to work or play in no time.",
    consoles: "Video Game Consoles",
    consolesDesc: "Is your console overheating, crashing, or failing to load your favorite games? We specialize in repairing PlayStation, Xbox, Nintendo, and more.",
    pcs: "Desktop Computers",
    pcsDesc: "From hardware upgrades to resolving software issues, we provide comprehensive repair solutions to ensure your desktop computer runs like new.",
    button: "Get a Quote",
    contact: "Contact Us",
    processTitle: "Our Process",
    processSteps: [
      { title: "Request a Quote", desc: "Complete our online booking form, and you'll receive an estimate in your email within a few hours." },
      { title: "Send Your Device", desc: "If you agree with the price and timeframe, send your broken device to us for repair." },
      { title: "Fast Repair", desc: "Your device is typically fixed within 1-3 days. After payment, we'll ship it back on the next business day." }
    ],
    form: {
      title: "Get a Quote",
      name: "Name:",
      email: "Email:",
      device: "Device Type:",
      issue: "Describe the Issue:",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      issuePlaceholder: "Briefly describe the problem",
      submit: "Submit",
      deviceOptions: {
        laptop: "Laptop",
        console: "Console",
        pc: "Desktop Computer",
        other: "Other",
      }
    },
  },
};

// Function to update text based on selected language
function updateLanguage(lang) {
  const t = translations[lang];

  // Update Page Text
  document.getElementById("title").textContent = t.title;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("description").textContent = t.description;
  document.getElementById("laptops").textContent = t.laptops;
  document.getElementById("laptops-desc").textContent = t.laptopsDesc;
  document.getElementById("consoles").textContent = t.consoles;
  document.getElementById("consoles-desc").textContent = t.consolesDesc;
  document.getElementById("pcs").textContent = t.pcs;
  document.getElementById("pcs-desc").textContent = t.pcsDesc;
  document.getElementById("cta-button").textContent = t.button;
  document.getElementById("contact").textContent = t.contact;

  // Update "Our Process" section
  document.getElementById("process-title").textContent = t.processTitle;
  document.getElementById("process-step1-title").textContent = t.processSteps[0].title;
  document.getElementById("process-step1-desc").textContent = t.processSteps[0].desc;
  document.getElementById("process-step2-title").textContent = t.processSteps[1].title;
  document.getElementById("process-step2-desc").textContent = t.processSteps[1].desc;
  document.getElementById("process-step3-title").textContent = t.processSteps[2].title;
  document.getElementById("process-step3-desc").textContent = t.processSteps[2].desc;

  // Update Form Text
  document.getElementById("form-title").textContent = t.form.title;
  document.getElementById("name-label").textContent = t.form.name;
  document.getElementById("email-label").textContent = t.form.email;
  document.getElementById("device-label").textContent = t.form.device;
  document.getElementById("issue-label").textContent = t.form.issue;
  document.getElementById("name").placeholder = t.form.namePlaceholder;
  document.getElementById("email").placeholder = t.form.emailPlaceholder;
  document.getElementById("issue").placeholder = t.form.issuePlaceholder;
  document.getElementById("submit-button").textContent = t.form.submit;

  // Update Device Dropdown Options
  document.getElementById("option-laptop").textContent = t.form.deviceOptions.laptop;
  document.getElementById("option-console").textContent = t.form.deviceOptions.console;
  document.getElementById("option-pc").textContent = t.form.deviceOptions.pc;
  document.getElementById("option-other").textContent = t.form.deviceOptions.other;
}

// Set initial language from localStorage or default to French
const userLang = localStorage.getItem("selectedLang") || "fr";
document.getElementById("language-selector").value = userLang;
updateLanguage(userLang);

// Listen for language changes
document.getElementById("language-selector").addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  localStorage.setItem("selectedLang", selectedLanguage); // Save selection
  updateLanguage(selectedLanguage);
});

// Show/Hide Form on Button Click
document.getElementById("cta-button").addEventListener("click", () => {
  document.getElementById("quote-form").classList.toggle("hidden");
});

// Form Submission Handling
document.getElementById("get-quote-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { "Accept": "application/json" }
  }).then(response => {
    if (response.ok) {
      document.getElementById("form-status").innerHTML = "✅ Message sent successfully!";
      form.reset();
    } else {
      document.getElementById("form-status").innerHTML = "❌ An error occurred. Try again.";
    }
  }).catch(() => {
    document.getElementById("form-status").innerHTML = "❌ Connection error!";
  });
});
