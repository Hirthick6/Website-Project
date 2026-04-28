/**
 * GenZova — User Journey Tracker
 * ================================
 * Tracks every page the user visits on the website and sends 
 * the full browsing trail with every form submission.
 * 
 * NO SETUP REQUIRED — works automatically with your existing
 * Google Sheets + Apps Script integration.
 */

// ══════════════════════════════════════════════════════════════
//  📍 USER JOURNEY TRACKER
//  Automatically records: Home → Services → AI Automation → etc.
// ══════════════════════════════════════════════════════════════

const UserJourney = {
  _key: 'genzova_user_journey',
  _startKey: 'genzova_session_start',

  // Friendly page names
  _pageNames: {
    '':                'Home',
    '#':               'Home',
    '#services':       'Services',
    '#internships':    'Internships',
    '#ai-development': 'AI Development',
    '#careers':        'Careers',
    '#about':          'About GenZova',
    '#contact':        'Contact Us',
    '#profile':        'Company Profile',
    '#team':           'Team',
    '#faq':            'FAQ',
    '#privacy':        'Privacy Policy',
    '#terms':          'Terms & Conditions',
  },

  /** Start tracking */
  init() {
    if (!sessionStorage.getItem(this._startKey)) {
      sessionStorage.setItem(this._startKey, new Date().toISOString());
    }
    this.trackCurrentPage();
    window.addEventListener('hashchange', () => this.trackCurrentPage());
  },

  /** Convert hash to readable name */
  getPageName(hash) {
    if (this._pageNames[hash]) return this._pageNames[hash];

    if (hash.startsWith('#service/')) {
      const slug = hash.replace('#service/', '');
      const s = (typeof SERVICES_DATA !== 'undefined') ? SERVICES_DATA.find(x => x.slug === slug) : null;
      return s ? '🔧 Service: ' + s.name : 'Service: ' + slug;
    }
    if (hash.startsWith('#internship/')) {
      const slug = hash.replace('#internship/', '');
      const i = (typeof INTERNSHIPS_DATA !== 'undefined') ? INTERNSHIPS_DATA.find(x => x.slug === slug) : null;
      return i ? '🎓 Internship: ' + i.name : 'Internship: ' + slug;
    }
    if (hash.startsWith('#solution/')) {
      const slug = hash.replace('#solution/', '');
      const s = (typeof SOLUTIONS_DATA !== 'undefined') ? SOLUTIONS_DATA.find(x => x.slug === slug) : null;
      return s ? '💼 Solution: ' + s.name : 'Solution: ' + slug;
    }

    return hash.replace('#', '') || 'Home';
  },

  /** Record current page */
  trackCurrentPage() {
    const hash = window.location.hash || '';
    const pageName = this.getPageName(hash);
    const time = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

    let journey = this.getJourney();

    // Skip if same page as last entry
    if (journey.length > 0 && journey[journey.length - 1].page === pageName) return;

    journey.push({ page: pageName, time: time });
    if (journey.length > 25) journey = journey.slice(-25);

    sessionStorage.setItem(this._key, JSON.stringify(journey));
  },

  /** Get journey array */
  getJourney() {
    try { return JSON.parse(sessionStorage.getItem(this._key) || '[]'); }
    catch { return []; }
  },

  /** Get journey as a single formatted string */
  getJourneyText() {
    const j = this.getJourney();
    if (j.length === 0) return 'Direct visit (no browsing)';
    return j.map((s, i) => (i + 1) + '. ' + s.page + ' (' + s.time + ')').join(' → ');
  },

  /** Get session duration */
  getDuration() {
    const start = sessionStorage.getItem(this._startKey);
    if (!start) return '0 sec';
    const sec = Math.round((Date.now() - new Date(start).getTime()) / 1000);
    if (sec < 60) return sec + ' seconds';
    if (sec < 3600) return Math.round(sec / 60) + ' minutes';
    return Math.round(sec / 3600) + ' hours';
  },

  /** Get which specific services/internships/solutions user explored */
  getExploredItems() {
    const j = this.getJourney();
    const services = [];
    const internships = [];
    const solutions = [];

    j.forEach(step => {
      if (step.page.includes('Service:')) services.push(step.page.replace('🔧 ', ''));
      if (step.page.includes('Internship:')) internships.push(step.page.replace('🎓 ', ''));
      if (step.page.includes('Solution:')) solutions.push(step.page.replace('💼 ', ''));
    });

    return {
      services: services.length ? services.join(', ') : 'None',
      internships: internships.length ? internships.join(', ') : 'None',
      solutions: solutions.length ? solutions.join(', ') : 'None',
    };
  },

  /** Get full summary object */
  getSummary() {
    const explored = this.getExploredItems();
    return {
      journey: this.getJourneyText(),
      duration: this.getDuration(),
      totalPages: this.getJourney().length,
      servicesExplored: explored.services,
      internshipsExplored: explored.internships,
      solutionsExplored: explored.solutions,
    };
  },

  /** 
   * NEW: Track specific high-intent clicks
   * (e.g. "Clicked Apply for MERN Stack")
   */
  setIntent(action, target) {
    this._lastIntent = { action, target, time: new Date().toLocaleTimeString() };
    console.log(`[GenZova Tracker] 🎯 Intent Set: ${action} -> ${target}`);
  },

  getIntent() {
    return this._lastIntent ? `${this._lastIntent.action}: ${this._lastIntent.target}` : 'Direct Submission';
  }
};

// Start tracking immediately
UserJourney.init();

// ══════════════════════════════════════════════════════════════
//  🔌 INTERCEPT MODAL BUTTONS TO CAPTURE INTENT
// ══════════════════════════════════════════════════════════════
(function interceptIntent() {
  const patch = (fnName, action) => {
    const original = window[fnName];
    if (typeof original === 'function') {
      window[fnName] = function(name) {
        UserJourney.setIntent(action, name);
        return original.apply(this, arguments);
      };
    }
  };

  // Wait for app.js functions to exist
  const check = setInterval(() => {
    if (typeof openEnquiryModal !== 'function') return;
    clearInterval(check);

    patch('openEnquiryModal', 'Interested in Service');
    patch('openInternshipModal', 'Interested in Internship');
    patch('openOfferEnquiry', 'Interested in Solution/Offer');
    patch('openSolutionEnquiry', 'Interested in Solution Package');
    
    console.log('[GenZova Tracker] 🎯 High-intent button tracking active');
  }, 200);
})();

// ══════════════════════════════════════════════════════════════
//  🔌 AUTO-INJECT JOURNEY DATA INTO ALL FORM SUBMISSIONS
// ══════════════════════════════════════════════════════════════

(function patchSubmitToSheets() {
  // Wait for submitToSheets to be available
  const checkInterval = setInterval(() => {
    if (typeof submitToSheets !== 'function') return;
    clearInterval(checkInterval);

    const _original = submitToSheets;

    // Replace globally
    window.submitToSheets = async function (sheetName, data, ui) {
      const summary = UserJourney.getSummary();

      // Inject journey data into every submission
      data['Primary Interest'] = UserJourney.getIntent(); // THE MAIN THING YOU WANT
      data['Pages Visited'] = summary.journey;
      data['Session Duration'] = summary.duration;
      data['Total Pages Viewed'] = summary.totalPages;
      data['Services Explored'] = summary.servicesExplored;
      data['Internships Explored'] = summary.internshipsExplored;
      data['Solutions Explored'] = summary.solutionsExplored;

      // Call original
      return _original.call(this, sheetName, data, ui);
    };

    console.log('[GenZova Tracker] ✅ Journey tracking injected into form submissions');
  }, 100);
})();

console.log('[GenZova Tracker] 📍 User journey tracking active');
