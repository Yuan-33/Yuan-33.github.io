// ========================================
// Utility Functions
// ========================================
(function() {
  // Close mobile sidebar on nav link click
  var navLinks = document.querySelectorAll('.nav-level3 a, .nav-header a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var hamburgerBtn = document.getElementById('hamburgerBtn');
      var sidebar = document.getElementById('sidebar');
      var sidebarOverlay = document.getElementById('sidebarOverlay');
      hamburgerBtn.classList.remove('active');
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('show');
    });
  });
})();
