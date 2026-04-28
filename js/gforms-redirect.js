const GFORMS = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  ⚙️ CONFIGURATION: Paste your Form IDs and Entry IDs
  //  To get Entry IDs: Right-click form field -> Inspect -> look for "name='entry.123456'"
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  forms: {
    // Form 1: General enquiry for Home page, services overview, etc.
    general: {
      id: '1FAIpQLSdsORWSs0HeWMyvy9Gdf_5r5s7jWsYBt7FKWwbEv2CaX3ytww',
      fields: {
        source: 'entry.REPLACE_ME',
        button: 'entry.REPLACE_ME',
        journey: 'entry.REPLACE_ME',
      }
    },

    // Form 2: Specific Service enquiry
    service: {
      id: '1FAIpQLSdsORWSs0HeWMyvy9Gdf_5r5s7jWsYBt7FKWwbEv2CaX3ytww',
      fields: {
        service: 'entry.REPLACE_ME',
        source: 'entry.REPLACE_ME',
        button: 'entry.REPLACE_ME',
        journey: 'entry.REPLACE_ME',
      }
    },

    // Form 3: Internship application
    internship: {
      id: '1FAIpQLSdsORWSs0HeWMyvy9Gdf_5r5s7jWsYBt7FKWwbEv2CaX3ytww',
      fields: {
        course: 'entry.REPLACE_ME',
        source: 'entry.REPLACE_ME',
        button: 'entry.REPLACE_ME',
        journey: 'entry.REPLACE_ME',
      }
    },

    // Form 4: Career / Job application
    career: {
      id: '1FAIpQLSdsORWSs0HeWMyvy9Gdf_5r5s7jWsYBt7FKWwbEv2CaX3ytww',
      fields: {
        source: 'entry.REPLACE_ME',
        button: 'entry.REPLACE_ME',
        journey: 'entry.REPLACE_ME',
      }
    },

    // Form 5: Contact Us page
    contact: {
      id: '1FAIpQLSdsORWSs0HeWMyvy9Gdf_5r5s7jWsYBt7FKWwbEv2CaX3ytww',
      fields: {
        source: 'entry.REPLACE_ME',
        button: 'entry.REPLACE_ME',
        journey: 'entry.REPLACE_ME',
      }
    }
  },

  /**
   * Core: Build pre-filled URL and show in Modal Iframe
   */
  open(formKey, prefillData = {}) {
    const form = this.forms[formKey];

    // Check if form is configured
    if (!form || !form.id || form.id.includes('YOUR_')) {
      console.warn(`[GForms] Form "${formKey}" not configured. Falling back to internal modal.`);
      return false;
    }

    // Add Journey data if UserJourney tracker is available
    if (typeof UserJourney !== 'undefined') {
      prefillData.journey = UserJourney.getJourneyText();
    }

    const params = [];
    for (const [key, value] of Object.entries(prefillData)) {
      const entryId = form.fields[key];
      if (entryId && entryId.startsWith('entry.') && !entryId.includes('REPLACE')) {
        params.push(`${entryId}=${encodeURIComponent(value)}`);
      }
    }

    const url = `https://docs.google.com/forms/d/e/${form.id}/viewform?embedded=true&${params.join('&')}`;

    this._showInModal(url);
    console.log(`[GForms] ✅ Opening Dynamic Form: ${formKey}`);
    return true;
  },

  /**
   * Shows the form in the premium iframe modal
   */
  _showInModal(url) {
    const modal = document.getElementById('gform-modal');
    const iframe = document.getElementById('gform-iframe');

    if (!modal || !iframe) {
      // Fallback to new tab if modal doesn't exist for some reason
      window.open(url.replace('embedded=true&', ''), '_blank');
      return;
    }

    iframe.src = url;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  },

  _getSource() {
    const hash = window.location.hash || '#';
    const names = {
      '#': 'Home', '#services': 'Services', '#internships': 'Internships',
      '#ai-development': 'AI Development', '#careers': 'Careers',
      '#about': 'About', '#contact': 'Contact Us',
    };
    return names[hash] || hash.replace('#', '') || 'Home';
  },

  // Public Methods for different contexts
  openGeneralEnquiry(buttonText) {
    return this.open('general', {
      source: this._getSource(),
      button: buttonText || 'Get Started',
    });
  },

  openServiceEnquiry(serviceName) {
    return this.open('service', {
      service: serviceName || '',
      source: this._getSource(),
      button: 'Service Enquiry: ' + (serviceName || 'General'),
    });
  },

  openInternship(courseName) {
    return this.open('internship', {
      course: courseName || '',
      source: this._getSource(),
      button: 'Internship Apply: ' + (courseName || 'General'),
    });
  },

  openCareer() {
    return this.open('career', {
      source: this._getSource(),
      button: 'Career Page / Join Team',
    });
  },

  openContact(buttonText) {
    return this.open('contact', {
      source: this._getSource(),
      button: buttonText || 'Contact Us Page',
    });
  }
};


// ══════════════════════════════════════════════════════════════
//  AUTO-HOOK: DISABLED (Reverting to original Blue UI modals)
// ══════════════════════════════════════════════════════════════
/*
(function hookButtons() {
  document.addEventListener('DOMContentLoaded', () => {
    // ... logic removed to restore old UI ...
  });
})();
*/

console.log('[GForms] ⏸️ Redirect system paused to restore original UI');
