/**
 * GenZova — Google Sheets Integration
 * =====================================
 * This file intercepts ALL form submissions and sends them to Google Sheets.
 * Optimized for exact matching with your specific spreadsheet columns.
 */

const GSHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxCke44z4zsHOOSL3wG5r12QDeMOLUTam_IYUke1IinJhKXKwKF-DD8UlhUo26XKGmXuA/exec';

// ─────────────────────────────────────────────────────────────
//  📧 SMTP AUTO-REPLY — calls your Python server /send-email
//  Uses Gmail SMTP (smtplib) — free forever, no third-party
// ─────────────────────────────────────────────────────────────
async function sendClientAutoReply(toEmail, toName) {
  if (!toEmail) return;
  try {
    const res = await fetch('/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: toEmail, name: toName || 'Valued Customer' })
    });
    const result = await res.json();
    if (result.ok) {
      console.log('[SMTP] ✅ Auto-reply sent to', toEmail);
    } else {
      console.warn('[SMTP] ⚠️ Server error:', result.error);
    }
  } catch (err) {
    console.error('[SMTP] ❌ Could not reach /send-email:', err);
  }
}

/**
 * CORE: Send data to Google Sheets (Apps Script)
 */
async function submitToSheets(sheetName, data) {
  const params = new URLSearchParams();
  // Ensure this matches the exact tab name in your Google Sheet
  params.append('sheet', 'Form_Responses');

  // Map common fields strictly to avoid duplication
  const mappedData = {
    'Timestamp': new Date().toLocaleString(),
    'Full Name': data['Full Name'] || data.Name || data['enquiry-name'] || data['career-name'] || data['intern-name'] || '',
    'Email Address': data['Email Address'] || data.Email || data['enquiry-email'] || data['career-email'] || data['intern-email'] || '',
    'Phone Number': data['Phone Number'] || data.Phone || data.phone || data['enquiry-phone'] || data['career-phone'] || data['intern-phone'] || '',
  };

  // Only map Company if it's a Service/Enquiry form
  if (data['enquiry-company'] || data['Company'] || data['Business']) {
    mappedData['Company / Business Name'] = data['enquiry-company'] || data['Company'] || data['Business'];
  }

  // Only map College if it's an Internship/Career form
  if (data['intern-college'] || data['College'] || data['University'] || data['College / University']) {
    mappedData['College / University'] = data['intern-college'] || data['College'] || data['University'] || data['College / University'];
  }

  // Add Other Fields
  const mapping = {
    ...mappedData,
    'City / Location': data['City / Location'] || data.City || data.CityGeneral || data.CityCareer || '',
    'Why do you want to join GenZova?': data['Why do you want to join GenZova?'] || data.WhyGenZova || data.Motivation || '',
    'Why do you want to join GenZova? *': data['Why do you want to join GenZova? *'] || data.WhyGenZova || data.Motivation || '',

    // Career
    'Date of Birth': data['Date of Birth'] || data.DateOfBirth || '',
    'LinkedIn Profile': data['LinkedIn Profile'] || data.LinkedIn || '',
    'Highest Qualification': data['Highest Qualification'] || data.Qualification || '',
    'Year of Passing': data['Year of Passing'] || data.YearOfPassing || '',
    'CGPA / Percentage': data['CGPA / Percentage'] || data.CGPA || '',
    'Position Applying For': data['Position Applying For'] || data.Position || '',
    'Experience Level': data['Experience Level'] || data.Experience || '',
    'Key Skills': data['Key Skills'] || data.Skills || '',
    'Portfolio / GitHub Link': data['Portfolio / GitHub Link'] || data.Portfolio || '',
    'Why do you want to join GenZova?': data['Why do you want to join GenZova?'] || data.WhyGenZova || '',
    'Availability': data['Availability'] || data.Availability || '',
    'Resume Link (Google Drive / LinkedIn / Dropbox) *': data['Resume Link (Google Drive / LinkedIn / Dropbox) *'] || data.Resume || '',
    'Resume Link (Google Drive / LinkedIn / Dropbox)': data['Resume Link (Google Drive / LinkedIn / Dropbox)'] || data.Resume || '',
    'Resume Link': data['Resume Link'] || data.Resume || '',
    'Resume': data['Resume'] || data.Resume || '',
    'Resume & Additional Info': data['Resume & Additional Info'] || data.ResumeInfo || data.Message || data.Resume || '',

    // Generic Extras (from Solution Modals)
    'Additional Details': data['Additional Details'] || (data.Extra1 ? 'Extra1: ' + data.Extra1 : '') + (data.Extra2 ? ' | Extra2: ' + data.Extra2 : ''),
    'Extra Info': data['Extra Info'] || (data.Extra1 ? data.Extra1 : '') + (data.Extra2 ? ' ' + data.Extra2 : ''),
    'Degree / Qualification': data['Degree / Qualification'] || data.Extra1 || data.Qualification || '',
    'Team Size / Budget': data['Team Size / Budget'] || data.Extra1 || '',
    'Course / Timeline': data['Course / Timeline'] || data.Extra2 || '',

    // Contact / Generic
    'Subject': data['Subject'] || data.Subject || '',
    'Message': data['Message'] || data.Message || data.MessageContact || data.ProjectDetails || '',

    // Path / Source
    'Source (which page/button)': data['Source (which page/button)'] || data.Source || 'Website',
    'Source': data['Source'] || data.Source || 'Website',
    'Path': data['Path'] || data.Source || 'Website',

    // Journey Tracking (from gforms.js)
    'Primary Interest': data['Primary Interest'] || '',
    'Pages Visited': data['Pages Visited'] || '',
    'Session Duration': data['Session Duration'] || '',
    'Total Pages Viewed': data['Total Pages Viewed'] || '',
    'Services Explored': data['Services Explored'] || '',
    'Internships Explored': data['Internships Explored'] || '',
    'Solutions Explored': data['Solutions Explored'] || ''
  };

  // Add all predefined mapping entries to params
  for (const [key, val] of Object.entries(mapping)) {
    if (val !== undefined && val !== null) {
      params.append(key, val);
    }
  }

  // CRITICAL: Also append all raw keys from the data object itself 
  // to ensure nothing is missed (e.g. if key name exactly matches sheet header)
  for (const [key, val] of Object.entries(data)) {
    // Skip if already added to avoid duplicates if key is the same
    if (!mapping.hasOwnProperty(key)) {
      params.append(key, val);
    }
  }

  try {
    const finalUrl = `${GSHEET_ENDPOINT}?${params.toString()}`;
    console.log('[Sheets] 📤 Sending to:', finalUrl);
    
    // Using simple GET request is often more reliable for no-cors Apps Script
    await fetch(finalUrl, {
      method: 'GET',
      mode: 'no-cors'
    });


    console.log('[Sheets] ✅ Storage request sent');
    return true;
  } catch (err) {
    console.error('[Sheets] ❌ Storage error:', err);
    return false;
  }
}

// ──────────────────────────────────────────────────────────────
//  HELPERS
// ──────────────────────────────────────────────────────────────
function getVal(id) {
  const el = document.getElementById(id);
  return el ? (el.value || '').trim() : '';
}

function getSelectText(id) {
  const el = document.getElementById(id);
  if (!el || el.selectedIndex === -1) return '';
  const opt = el.options[el.selectedIndex];
  return (opt && opt.value) ? opt.text : '';
}

// ══════════════════════════════════════════════════════════════
//  FORM INTERCEPTORS
// ══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {



  // 2. ABOUT PAGE ENQUIRY
  const patchAbout = () => {
    const orig = window.submitAboutEnquiry;
    if (typeof orig !== 'function') { setTimeout(patchAbout, 100); return; }
    window.submitAboutEnquiry = function (e) {
      if (e && e.preventDefault) e.preventDefault();
      const form = e.target;
      const name = form.querySelector('input[type="text"]')?.value.trim() || '';
      if (name) {
        submitToSheets('about', {
          Name: name,
          Email: form.querySelector('input[type="email"]')?.value.trim() || '',
          Phone: form.querySelector('input[type="tel"]')?.value.trim() || '',
          Message: form.querySelector('textarea')?.value.trim() || '',
          Source: 'About Page',
        });
      }
      return orig.call(this, e);
    };
  };
  patchAbout();

  // 3. SERVICE ENQUIRY MODAL (Get a Quote)
  const patchEnquiry = () => {
    const orig = window.submitEnquiryForm;
    if (typeof orig !== 'function') { setTimeout(patchEnquiry, 100); return; }
    window.submitEnquiryForm = function (e) {
      const name = getVal('enquiry-name'), email = getVal('enquiry-email');
      const service = getSelectText('enquiry-service-select') || getVal('enquiry-service');
      if (name && email) {
        submitToSheets('enquiry', {
          Name: name, Email: email, Phone: getVal('enquiry-phone'),
          Company: getVal('enquiry-company'),
          ServiceAI: service,
          ProjectDetails: getVal('enquiry-message'),
          Source: 'Service Modal: ' + (service || 'General'),
        });
      }
      return orig.call(this, e);
    };
  };
  patchEnquiry();

  // 4. INTERNSHIP MODAL
  const patchIntern = () => {
    const orig = window.submitInternshipForm;
    if (typeof orig !== 'function') { setTimeout(patchIntern, 100); return; }
    window.submitInternshipForm = function (e) {
      const name = getVal('intern-name'),
        email = getVal('intern-email'),
        phone = getVal('intern-phone'),
        college = getVal('intern-college'),
        motivation = getVal('intern-message'),
        course = getSelectText('intern-course-select');

      const success = orig.call(this, e);
      if (success !== false && name && email) {
        submitToSheets('internship', {
          Name: name, Email: email, Phone: phone,
          College: college,
          'College / University': college,
          'College / University *': college,
          Internship: course,
          Motivation: motivation,
          'Motivation for joining this internship? *': motivation,
          'Why do you want to join GenZova?': motivation,
          Source: 'Internship: ' + (course || 'General'),
        });
      }
      return success;
    };
  };
  patchIntern();

  // 5. CAREER FORM
  const patchCareer = () => {
    const orig = window.submitCareerForm;
    if (typeof orig !== 'function') { setTimeout(patchCareer, 100); return; }
    window.submitCareerForm = async function () {
      const name = getVal('career-name'), email = getVal('career-email');
      if (name && email) {
        const data = {
          Name: name, Email: email, Phone: getVal('career-phone'),
          DateOfBirth: getVal('career-dob'), CityCareer: getVal('career-city'),
          LinkedIn: getVal('career-linkedin'), Qualification: getSelectText('career-qualification'),
          CareerCollege: getVal('career-college'),
          'College / University': getVal('career-college'), // Direct match
          YearOfPassing: getVal('career-year'),
          CGPA: getVal('career-cgpa'), Position: getSelectText('career-position'),
          Experience: getSelectText('career-experience'), Skills: getVal('career-skills'),
          Portfolio: getVal('career-portfolio'), WhyGenZova: getVal('career-why'),
          'Motivation for joining this internship? *': getVal('career-why'),
          Resume: getVal('career-resume'),
          'Resume Link (Google Drive / LinkedIn / Dropbox) *': getVal('career-resume'),
          Source: 'Career Page',
        };
        submitToSheets('career', data);
      }
      return orig.call(this);
    };
  };
  patchCareer();

  // 6. SOLUTION ENQUIRY
  const patchSolution = () => {
    const orig = window.submitSolutionEnquiry;
    if (typeof orig !== 'function') { setTimeout(patchSolution, 100); return; }
    window.submitSolutionEnquiry = function (e) {
      const name = getVal('sol-enq-name'), email = getVal('sol-enq-email');
      const solution = getVal('sol-enq-solution');
      if (name && email) {
        submitToSheets('solution', {
          Name: name, Email: email, Phone: getVal('sol-enq-phone'),
          Company: getVal('sol-enq-company'),
          ServiceAI: solution,
          ProjectDetails: getVal('sol-enq-message'),
          Extra1: getSelectText('sol-enq-extra1') || getVal('sol-enq-extra1'),
          Extra2: getSelectText('sol-enq-extra2') || getVal('sol-enq-extra2'),
          Source: 'Solution: ' + solution,
        });
      }
      return orig.call(this, e);
    };
  };
  patchSolution();

  // 7. CORPORATE TRAINING SECTION FORM (at bottom of page)
  const trainingForm = document.getElementById('training-enquiry-form');
  if (trainingForm) {
    trainingForm.addEventListener('submit', function () {
      const name = getVal('t-name'), email = getVal('t-email');
      if (name && email) {
        submitToSheets('training', {
          Name: name, Email: email, Phone: getVal('t-phone'),
          Company: getVal('t-company'),
          Extra1: getSelectText('t-team-size'),
          Extra2: getSelectText('t-course'),
          Message: getVal('t-message'),
          Source: 'Corporate Training Page Form',
        });
      }
    }, { capture: true });
  }

  // 8. HOME PAGE OFFER ENQUIRY (Get Started buttons)
  document.addEventListener('submit', function (e) {
    if (e.target.id === 'offer-enquiry-form') {
      const name = getVal('offer-enq-name'), email = getVal('offer-enq-email');
      const service = getVal('offer-enq-service');
      const message = getVal('offer-enq-message');
      if (name && email) {
        submitToSheets('offer', {
          Name: name, Email: email, Phone: getVal('offer-enq-phone'),
          Company: getVal('offer-enq-company'),
          ServiceAI: service,
          ProjectDetails: message,
          Source: 'What We Offer: ' + (service || 'General'),
        });
      }
    }
  }, { capture: true });

  // 9. AI PROJECT MODAL
  const patchAIProject = () => {
    const orig = window.submitAIProjectForm;
    if (typeof orig !== 'function') { setTimeout(patchAIProject, 100); return; }
    window.submitAIProjectForm = function (e) {
      const name = getVal('ai-name'), email = getVal('ai-email');
      const service = getSelectText('ai-service');
      if (name && email) {
        submitToSheets('ai_project', {
          Name: name, Email: email, Phone: getVal('ai-phone'),
          ServiceAI: service,
          ProjectDetails: getVal('ai-message'),
          Source: 'AI Project Modal: ' + (service || 'General'),
        });
      }
      return orig.call(this, e);
    };
  };
  patchAIProject();

  console.log('[GenZova] All form handlers ready ✅');
});
