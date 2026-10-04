(function () {
  'use strict';

  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    if (e.ctrlKey && ['U', 'u'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    if (e.ctrlKey && ['S', 's'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    if (e.ctrlKey && ['P', 'p'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    if (e.metaKey && e.altKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    if (e.metaKey && ['U', 'S', 'P', 'u', 's', 'p'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, true);

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener('copy', function (e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener('cut', function (e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener('paste', function (e) {
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') {
      return true;
    }
    e.preventDefault();
    return false;
  });

  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener('drop', function (e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener('selectstart', function (e) {
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return true;
    e.preventDefault();
    return false;
  });

  try {
    const noop = function () {};
    window.console = window.console || {};
    const methods = ['log', 'warn', 'error', 'info', 'debug', 'trace', 'dir', 'table', 'clear'];
    methods.forEach(function (m) {
      try {
        Object.defineProperty(window.console, m, {
          get: function () { return noop; },
          set: function () {}
        });
      } catch (e) {
        window.console[m] = noop;
      }
    });
  } catch (e) {}

  setInterval(function () {
    (function () {
      return false;
    })['constructor']('debugger')['call']();
  }, 4000);

  try {
    if (window.top !== window.self) {
      window.top.location = window.self.location;
    }
  } catch (e) {}

  if (window.location.protocol === 'view-source:') {
    window.location.href = 'about:blank';
  }

  document.addEventListener('keyup', function (e) {
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
  }, true);

  (function blockCurl() {
    const ua = (navigator.userAgent || '').toLowerCase();
    const badAgents = [
      'curl', 'wget', 'python-requests', 'python-urllib',
      'httpie', 'insomnia', 'node-fetch',
      'go-http-client', 'libwww-perl',
      'scrapy', 'phantomjs', 'puppeteer',
      'playwright', 'selenium'
    ];

    for (let i = 0; i < badAgents.length; i++) {
      if (ua.indexOf(badAgents[i]) !== -1) {
        document.documentElement.innerHTML = '';
        document.body.innerHTML = '';
        try { window.stop(); } catch (e) {}
        try { window.location.href = 'about:blank'; } catch (e) {}
        throw new Error('Blocked');
      }
    }

    if (navigator.webdriver === true) {
      document.documentElement.innerHTML = '';
      document.body.innerHTML = '';
      try { window.stop(); } catch (e) {}
      throw new Error('Blocked');
    }
  })();

})();