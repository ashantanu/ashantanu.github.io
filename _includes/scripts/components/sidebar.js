(function() {
  var SOURCES = window.TEXT_VARIABLES.sources;

  window.Lazyload.js(SOURCES.jquery, function() {
    var $pageMask = $('.js-page-mask');
    var $pageRoot = $('.js-page-root');
    var $sidebarToggle = $('.js-sidebar-toggle');
    var $sidebarHide = $('.js-sidebar-hide');

    function freeze(e) {
      if (e.target === $pageMask[0]) {
        e.preventDefault();
      }
    }
    function stopBodyScrolling(bool) {
      if (bool === true) {
        window.addEventListener('touchmove', freeze, { passive: false });
      } else {
        window.removeEventListener('touchmove', freeze, { passive: false });
      }
    }

    // Check if mobile (viewport width <= 1024px)
    function isMobile() {
      return window.innerWidth <= 1024;
    }

    function showSidebar() {
      stopBodyScrolling(true);
      $pageRoot.addClass('show-sidebar');
    }

    function hideSidebar() {
      stopBodyScrolling(false);
      $pageRoot.removeClass('show-sidebar');
    }

    function toggleSidebar() {
      if ($pageRoot.hasClass('show-sidebar')) {
        hideSidebar();
      } else {
        showSidebar();
      }
    }

    // On mobile, automatically show sidebar on page load
    if (isMobile()) {
      showSidebar();
    }

    // Toggle button clicks
    $sidebarToggle.on('click', function() {
      toggleSidebar();
    });

    // Clicking mask hides sidebar
    $sidebarHide.on('click', function() {
      hideSidebar();
    });
  });
})();
