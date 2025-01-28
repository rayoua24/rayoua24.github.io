function toggleLanguage() {
  // Toggle visibility of content based on the current language
  const englishContent = document.querySelectorAll('.en');
  const frenchContent = document.querySelectorAll('.fr');
  
  const isFrench = Array.from(englishContent).some(el => el.style.display === 'none');

  if (isFrench) {
    // Switch to French
    englishContent.forEach(el => el.style.display = 'block');
    frenchContent.forEach(el => el.style.display = 'none');
    document.getElementById('lang-toggle').textContent = 'English';
  } else {
    // Switch to English
    englishContent.forEach(el => el.style.display = 'none');
    frenchContent.forEach(el => el.style.display = 'block');
    document.getElementById('lang-toggle').textContent = 'Français';
  }
}
