// ========================================
// Navigation Tree Logic
// ========================================
(function() {
  var navTree = document.getElementById('navTree');
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var sidebar = document.getElementById('sidebar');
  var sidebarOverlay = document.getElementById('sidebarOverlay');

  // Toggle expand/collapse and navigate
  navTree.addEventListener('click', function(e) {
    var level3 = e.target.closest('.nav-level3');
    var header = e.target.closest('.nav-header');

    // Level 3 click → navigate to page
    if (level3) {
      var href = level3.dataset.href;
      if (href) {
        window.location.href = href;
      }
      return;
    }

    // Header click → toggle subtree and/or navigate
    if (header) {
      var parent = header.parentElement;
      var children = parent.querySelector('.nav-children');
      var arrow = header.querySelector('.arrow');

      if (children) {
        children.classList.toggle('expanded');
        if (arrow) arrow.classList.toggle('open');
      }

      var headerHref = header.dataset.href;
      if (headerHref) {
        window.location.href = headerHref;
      }
    }
  });

  // Highlight current page in nav
  var currentPath = window.location.pathname;
  var currentPage = currentPath.split('/').pop().replace('.html', '');
  if (currentPage && currentPage !== 'index') {
    var navEl = document.querySelector('.nav-level3[data-page="' + currentPage + '"], .nav-header[data-page="' + currentPage + '"]');
    if (navEl) {
      navEl.classList.add('active');
      // Expand parent containers
      var parentContainer = navEl.closest('.nav-children');
      while (parentContainer) {
        parentContainer.classList.add('expanded');
        var parentHeader = parentContainer.previousElementSibling;
        if (parentHeader) {
          var parentArrow = parentHeader.querySelector('.arrow');
          if (parentArrow) parentArrow.classList.add('open');
        }
        parentContainer = parentContainer.parentElement.closest('.nav-children');
      }
    }
  }

  // Mobile sidebar toggle
  hamburgerBtn.addEventListener('click', function() {
    hamburgerBtn.classList.toggle('active');
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('show');
  });

  sidebarOverlay.addEventListener('click', closeMobileSidebar);

  function closeMobileSidebar() {
    hamburgerBtn.classList.remove('active');
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('show');
  }
})();
