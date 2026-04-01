/*
 * Japan Bureaucracy Buddy - Main JavaScript
 * Sidebar toggle, visa filter, step rendering, localStorage checklist
 */

document.addEventListener('DOMContentLoaded', function () {

  // ===== MOBILE MENU TOGGLE =====
  var menuBtn = document.querySelector('.mobile-menu-btn');
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.querySelector('.sidebar-overlay');

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }

  // ===== VISA FILTER =====
  var visaSelect = document.getElementById('visa-filter');
  var currentVisa = visaSelect ? visaSelect.value : 'all';

  // ===== RENDER PROGRESS BAR =====
  function renderProgress() {
    var bar = document.getElementById('progress-bar');
    if (!bar) return;
    var total = STEPS.length;
    var done = 0;
    STEPS.forEach(function (step) {
      var key = 'jbb-step-' + step.id;
      if (localStorage.getItem(key) === 'done') done++;
    });
    var pct = Math.round((done / total) * 100);
    bar.style.width = pct + '%';
    bar.setAttribute('aria-valuenow', pct);
    var label = document.getElementById('progress-label');
    if (label) label.textContent = done + ' of ' + total + ' steps completed (' + pct + '%)';
  }

  // ===== RENDER STEPS =====
  function renderSteps() {
    var container = document.getElementById('steps-container');
    if (!container) return;
    container.innerHTML = '';

    STEPS.forEach(function (step) {
      var section = document.createElement('section');
      section.id = step.id;
      section.className = 'section step-section';

      var isDone = localStorage.getItem('jbb-step-' + step.id) === 'done';

      var docs = step.requiredDocs.all.slice();
      if (currentVisa !== 'all' && step.requiredDocs[currentVisa]) {
        docs = docs.concat(step.requiredDocs[currentVisa]);
      }

      var visaNote = '';
      if (currentVisa !== 'all' && step.visaDifferences[currentVisa]) {
        visaNote = '<div class="info-box info"><strong>For your visa type</strong>' + step.visaDifferences[currentVisa] + '</div>';
      }

      var warningsHtml = '';
      step.warnings.forEach(function (w) {
        warningsHtml += '<div class="info-box warning"><strong>Warning</strong>' + w + '</div>';
      });

      var tipsHtml = '<ul>';
      step.tips.forEach(function (t) {
        tipsHtml += '<li>' + t + '</li>';
      });
      tipsHtml += '</ul>';

      var docsHtml = '<ul>';
      docs.forEach(function (d) {
        docsHtml += '<li>' + d + '</li>';
      });
      docsHtml += '</ul>';

      var officialLink = step.officialUrl
        ? '<p><a href="' + step.officialUrl + '" target="_blank" rel="noopener">Official website &#8599;</a></p>'
        : '';

      var crossLinkHtml = '';
      if (step.crossLink) {
        crossLinkHtml = '<p class="cross-link"><a href="' + step.crossLink.url + '" target="_blank" rel="noopener">' + step.crossLink.text + ' &#8599;</a></p>';
      }

      var wiseCta = '';
      if (step.id === 'bank') {
        wiseCta = '<div class="wise-cta"><p><strong>Sending money home?</strong> Wise offers low-fee international transfers with real exchange rates.</p><a href="https://wise.com/invite/drhc/x5ykid2" target="_blank" rel="noopener" class="btn-affiliate">Try Wise &#8599;</a></div>';
      }

      section.innerHTML =
        '<div class="step-header">' +
          '<div class="step-number">' + step.number + '</div>' +
          '<div class="step-header-text">' +
            '<h2>' + step.title + '</h2>' +
            '<p class="last-updated">Last updated: ' + step.lastUpdated + '</p>' +
          '</div>' +
        '</div>' +
        '<p>' + step.description + '</p>' +
        '<div class="step-meta">' +
          '<span class="meta-item">&#9200; ' + step.timeEstimate + '</span>' +
          '<span class="meta-item">&#127468;&#127463; English support: ' + step.englishSupport + '</span>' +
        '</div>' +
        visaNote +
        '<h3>Required Documents</h3>' +
        '<div class="what-you-need"><h4>Have these ready</h4>' + docsHtml + '</div>' +
        warningsHtml +
        '<h3>Tips</h3>' +
        tipsHtml +
        officialLink +
        crossLinkHtml +
        wiseCta +
        '<div class="checklist-toggle">' +
          '<label class="checkbox-label">' +
            '<input type="checkbox" class="step-checkbox" data-step="' + step.id + '"' + (isDone ? ' checked' : '') + '>' +
            '<span>I have completed this step</span>' +
          '</label>' +
        '</div>';

      container.appendChild(section);
    });

    document.querySelectorAll('.step-checkbox').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var key = 'jbb-step-' + this.getAttribute('data-step');
        if (this.checked) {
          localStorage.setItem(key, 'done');
          if (typeof gtag === 'function') { gtag('event', 'step_completed', {step: this.getAttribute('data-step'), visa: currentVisa}); }
        } else {
          localStorage.removeItem(key);
        }
        renderProgress();
      });
    });

    renderProgress();
  }

  // ===== RENDER BANK TABLE =====
  function renderBanks() {
    var tbody = document.getElementById('bank-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    BANKS.forEach(function (bank) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td><a href="' + bank.url + '" target="_blank" rel="noopener">' + bank.name + '</a></td>' +
        '<td>' + (bank.sixMonthRule ? '<span class="badge badge-warn">Yes</span>' : '<span class="badge badge-ok">No</span>') + '<br><small>' + bank.sixMonthNote + '</small></td>' +
        '<td>' + bank.englishSupport + '</td>' +
        '<td>' + bank.requiredDocs.join(', ') + '</td>' +
        '<td>' + bank.onlineBankingNote + '</td>' +
        '<td>' + bank.bestFor + '</td>';
      tbody.appendChild(tr);
    });
  }

  // ===== VISA FILTER CHANGE =====
  if (visaSelect) {
    visaSelect.addEventListener('change', function () {
      currentVisa = this.value;
      renderSteps();
      if (typeof gtag === 'function') { gtag('event', 'visa_filter_changed', {visa_type: currentVisa}); }
    });
  }

  // ===== SIDEBAR NAV - ACTIVE STATE =====
  function setActiveNav() {
    var navLinks = document.querySelectorAll('.sidebar-nav a');
    var sections = document.querySelectorAll('.section');
    var scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNav);

  document.querySelectorAll('.sidebar-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      }
    });
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        var offset = 80;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ===== INITIAL RENDER =====
  renderSteps();
  renderBanks();
  setActiveNav();
});
