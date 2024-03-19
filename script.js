// Dark mode button
const darkModeBtn = document.getElementById('dark-mode-btn');

// Subscribe button


// Toggle dark mode
const toggleDarkMode = () => {
  const isDarkMode = document.body.getAttribute('data-dark-mode') === 'true';
  document.body.setAttribute('data-dark-mode', isDarkMode ? 'false' : 'true');
};

// Subscribe


// Event listeners
darkModeBtn.addEventListener('click', toggleDarkMode);
  