// ========================================
// Theme Toggle
// ========================================
(function() {
  var themeToggle = document.getElementById('themeToggle');
  var themeLabel = document.getElementById('themeLabel');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      themeLabel.textContent = '深色模式';
      themeToggle.querySelector('i').className = 'fas fa-moon';
    } else {
      themeLabel.textContent = '浅色模式';
      themeToggle.querySelector('i').className = 'fas fa-sun';
    }
  }

  // Init theme
  var savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  themeToggle.addEventListener('click', function() {
    var current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
})();
