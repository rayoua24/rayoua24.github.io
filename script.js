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
    },
  },
};

// DOM Elements
const languageSelector = document.getElementById("language-selector");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const description = document.getElementById("description");
const laptops = document.getElementById("laptops");
const laptopsDesc = document.getElementById("laptops-desc");
const consoles = document.getElementById("consoles");
const consolesDesc = document.getElementById("consoles-desc");
const pcs = document.getElementById("pcs");
const pcsDesc = document.getElementById("pcs-desc");
const button = document.getElementById("cta-button");
const contact = document.getElementById("contact");
const formTitle = document.getElementById("form-title");
const nameLabel = document.getElementById("name-label");
const emailLabel = document.getElementById("email-label");
const deviceLabel = document.getElementById("device-label");
const issueLabel = document.getElementById("issue-label");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const issueInput = document.getElementById("issue");
const submitButton = document.getElementById("submit-button");
const ctaButton = document.getElementById("cta-button");
const quoteForm = document.getElementById("quote-form");

// Show/Hide Form on Button Click
ctaButton.addEventListener("click", () => {
  quoteForm.classList.toggle("hidden");
});

// Update Text for Language Change
languageSelector.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  const t = translations[selectedLanguage];

  // Update Page Text
  title.textContent = t.title;
  subtitle.textContent = t.subtitle;
  description.textContent = t.description;
  laptops.textContent = t.laptops;
  laptopsDesc.textContent = t.laptopsDesc;
  consoles.textContent = t.consoles;
  consolesDesc.textContent = t.consolesDesc;
  pcs.textContent = t.pcs;
  pcsDesc.textContent = t.pcsDesc;
  button.textContent = t.button;
  contact.textContent = t.contact;

  // Update Form Text
  formTitle.textContent = t.form.title;
  nameLabel.textContent = t.form.name;
  emailLabel.textContent = t.form.email;
  deviceLabel.textContent = t.form.device;
  issueLabel.textContent = t.form.issue;
  nameInput.placeholder = t.form.namePlaceholder;
  emailInput.placeholder = t.form.emailPlaceholder;
  issueInput.placeholder = t.form.issuePlaceholder;
  submitButton.textContent = t.form.submit;
});
document.getElementById("get-quote-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  const form = this;
  const formData = new FormData(form);
  
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { "Accept": "application/json" }
  }).then(response => {
    if (response.ok) {
      document.getElementById("form-status").innerHTML = "✅ Votre demande a été envoyée avec succès!";
      form.reset(); // Clear form after submission
    } else {
      document.getElementById("form-status").innerHTML = "❌ Une erreur s'est produite, réessayez.";
    }
  }).catch(error => {
    document.getElementById("form-status").innerHTML = "❌ Erreur de connexion!";
  });
});
