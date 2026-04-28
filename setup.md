# 🛠️ GenZova — Google Forms Setup Guide (Complete Walkthrough)

> **Time needed:** ~45 minutes  
> **What you need:** A Google account (the same one used for Google Sheets)  
> **Result:** Every button on your website will open the correct Google Form with tracking

---

## 📌 TABLE OF CONTENTS

1. [Create Form 1: General Enquiry](#step-1-create-form-1--general-enquiry)
2. [Create Form 2: Service Enquiry](#step-2-create-form-2--service-enquiry)
3. [Creat
e Form 3: Internship Application](#step-3-create-form-3--internship-application)
4. [Create Form 4: Career Application](#step-4-create-form-4--career-application)
5. [Create Form 5: Contact Us](#step-5-create-form-5--contact-us)
6. [Get Pre-fill Entry IDs (for ALL forms)](#step-6-get-pre-fill-entry-ids)
7. [Update the Website Code](#step-7-update-the-website-code)
8. [Test Everything](#step-8-test-everything)
9. [Turn on Email Notifications](#step-9-turn-on-email-notifications)

---

## STEP 1: Create Form 1 — General Enquiry

This form is for: **Home page "Get Started"**, **Offer card buttons**, and **general enquiries**.

### 1.1 Open Google Forms
1. Go to **https://forms.google.com**
2. Click the big **+** (Blank form)

### 1.2 Set the Title
- Click on **"Untitled form"** at the top
- Type: `GenZova — General Enquiry`
- In the description below, type: `Thank you for your interest in GenZova! Please fill in your details and we'll get back to you within 24 hours.`

### 1.3 Add Field 1: Full Name
- You already see one question box. Click on it.
- Change the question type dropdown (default "Multiple choice") to → **Short answer**
- Type the question: `Full Name`
- Toggle **Required** ✅ ON (bottom right of the question)
- Click the 3 dots (⋮) at bottom right → **Description** → type: `Your full name`

### 1.4 Add Field 2: Email
- Click the **+** button (right side toolbar) to add a new question
- Type: `Email`
- Type: **Short answer**
- Toggle **Required** ✅ ON
- Click ⋮ → **Response validation** → set:
  - `Text` → `Email` → `Contains` → leave blank
  - Error message: `Please enter a valid email`

### 1.5 Add Field 3: Phone
- Click **+** to add new question
- Type: `Phone`
- Type: **Short answer**
- Toggle **Required** ✅ ON
- Click ⋮ → Description → type: `+91 XXXXX XXXXX`

### 1.6 Add Field 4: Company / Organization
- Click **+** to add new question
- Type: `Company / Organization`
- Type: **Short answer**
- Toggle **Required** ✅ ON
- Click ⋮ → Description → type: `Your company or organization name`

### 1.7 Add Field 5: Message
- Click **+** to add new question
- Type: `Message`
- Type: **Paragraph** (not Short answer!)
- Toggle Required ❌ OFF
- Click ⋮ → Description → type: `Tell us about your requirements...`

### 1.8 Add Hidden Field 6: Source
- Click **+** to add new question
- Type: `Source`
- Type: **Short answer**
- Toggle Required ❌ OFF
- Click ⋮ → Description → type: `Auto-filled — do not edit`

### 1.9 Add Hidden Field 7: Button Clicked
- Click **+** to add new question
- Type: `Button Clicked`
- Type: **Short answer**
- Toggle Required ❌ OFF
- Click ⋮ → Description → type: `Auto-filled — do not edit`

### 1.10 Settings
1. Click the **⚙️ Settings** tab (top of the form)
2. Under **Responses:**
   - Turn OFF "Limit to 1 response"
   - Turn ON "Collect email addresses" → **Do not collect** (we already have our own email field)
3. Under **Presentation:**
   - Confirmation message: `Thank you! GenZova will contact you within 24 hours.`
   - Turn OFF "Show link to submit another response"

### ✅ Form 1 Done!
Your form should now have **7 fields** in this order:
```
1. Full Name          (Short answer, Required)
2. Email              (Short answer, Required)
3. Phone              (Short answer, Required)
4. Company            (Short answer, Required)
5. Message            (Paragraph, Optional)
6. Source             (Short answer, Optional — hidden)
7. Button Clicked     (Short answer, Optional — hidden)
```

---

## STEP 2: Create Form 2 — Service Enquiry

This form is for: **"Get Started" buttons on each Service card** (AI, Web Dev, Mobile, etc.)

### 2.1 Create New Form
1. Go to **https://forms.google.com**
2. Click **+** (Blank form)
3. Title: `GenZova — Service Enquiry`
4. Description: `Tell us about your project and we'll prepare a custom proposal.`

### 2.2 Add the Fields (follow same steps as Form 1)

| #  | Question Text                | Type           | Required |
|:---|:-----------------------------|:---------------|:---------|
| 1  | `Full Name`                  | Short answer   | ✅ Yes   |
| 2  | `Email Address`              | Short answer   | ✅ Yes   |
| 3  | `Phone Number`               | Short answer   | ✅ Yes   |
| 4  | `Company / Business Name`    | Short answer   | ❌ No    |
| 5  | `Preferred Service`          | **Dropdown**   | ✅ Yes   |
| 6  | `Project Details`            | Paragraph      | ✅ Yes   |
| 7  | `Source`                     | Short answer   | ❌ No    |
| 8  | `Button Clicked`             | Short answer   | ❌ No    |

### 2.3 Add Dropdown Options for "Preferred Service"
When you create question 5:
1. Change the type to **Dropdown**
2. Add these options (one per line, click "Add option" for each):

```
Artificial Intelligence & Automation
Web Application Development
Mobile Application Development
E-Commerce Development
UI/UX Design
Digital Marketing
Search Engine Optimization (SEO)
Branding & Creative Design
Data Analytics & Business Intelligence
API Development & Integration
Cloud & DevOps Solutions
Game Development (3D & 2D)
```

### ✅ Form 2 Done! (8 fields)

---

## STEP 3: Create Form 3 — Internship Application

This form is for: **"Apply Now" buttons on Internship cards**

### 3.1 Create New Form
1. Go to **https://forms.google.com** → Click **+**
2. Title: `GenZova — Internship Application`
3. Description: `Apply for our structured internship programs with mentorship and certification.`

### 3.2 Add the Fields

| #  | Question Text                                 | Type           | Required |
|:---|:----------------------------------------------|:---------------|:---------|
| 1  | `Full Name`                                   | Short answer   | ✅ Yes   |
| 2  | `Email Address`                               | Short answer   | ✅ Yes   |
| 3  | `Phone Number`                                | Short answer   | ✅ Yes   |
| 4  | `College / University`                        | Short answer   | ❌ No    |
| 5  | `Internship Interested In`                    | **Dropdown**   | ✅ Yes   |
| 6  | `Motivation for joining this internship?`     | Paragraph      | ✅ Yes   |
| 7  | `Source`                                      | Short answer   | ❌ No    |
| 8  | `Button Clicked`                              | Short answer   | ❌ No    |

### 3.3 Dropdown Options for "Internship Interested In"

```
AI Agent Development
Artificial Intelligence
Machine Learning & Deep Learning
Branding & Design
Cloud Computing
Digital Marketing
E-commerce Development
Full Stack Development
Game Development
MEAN Stack Development
MERN Stack Development
Mobile Application Development
SEO
UI/UX Design
Web Development
```

### ✅ Form 3 Done! (8 fields)

---

## STEP 4: Create Form 4 — Career Application

This form is for: **Careers page "Submit Application"** — it has **4 sections**.

### 4.1 Create New Form
1. Go to **https://forms.google.com** → Click **+**
2. Title: `GenZova — Career Application`
3. Description: `Apply for a position at GenZova. We'll review your application and get back to you within 48 hours.`

### 4.2 Section 1: Personal Details
This is the first section (already created when you made the form).

| #  | Question Text        | Type           | Required |
|:---|:---------------------|:---------------|:---------|
| 1  | `Full Name`          | Short answer   | ✅ Yes   |
| 2  | `Email Address`      | Short answer   | ✅ Yes   |
| 3  | `Phone Number`       | Short answer   | ✅ Yes   |
| 4  | `Date of Birth`      | **Date**       | ❌ No    |
| 5  | `City / Location`    | Short answer   | ✅ Yes   |
| 6  | `LinkedIn Profile`   | Short answer   | ❌ No    |

### 4.3 Add Section 2: Education
1. In the **right side toolbar**, click the **═** button (Add section)
   - It looks like two horizontal rectangles stacked
2. Section title: `Education`
3. Section description: `Tell us about your educational background`

| #  | Question Text          | Type           | Required | Dropdown Options |
|:---|:-----------------------|:---------------|:---------|:-----------------|
| 7  | `Highest Qualification`| **Dropdown**   | ✅ Yes   | `B.E / B.Tech, BCA, MCA, M.E / M.Tech, MBA, B.Sc, M.Sc, Diploma, Other` |
| 8  | `College / University` | Short answer   | ✅ Yes   | |
| 9  | `Year of Passing`      | Short answer   | ✅ Yes   | |
| 10 | `CGPA / Percentage`    | Short answer   | ❌ No    | |

### 4.4 Add Section 3: Professional
1. Click **═** (Add section) again
2. Section title: `Professional`
3. Section description: `Your work experience and skills`

| #  | Question Text             | Type           | Required | Dropdown Options |
|:---|:--------------------------|:---------------|:---------|:-----------------|
| 11 | `Applying For Position`   | **Dropdown**   | ✅ Yes   | `AI/ML Engineer, Full Stack Developer, Frontend Developer, Backend Developer, Mobile App Developer, UI/UX Designer, Digital Marketing Specialist, Data Analyst, DevOps Engineer, Business Analyst, Other` |
| 12 | `Years of Experience`     | **Dropdown**   | ✅ Yes   | `Fresher, Less than 1 Year, 1-2 Years, 2-3 Years, 4+ Years` |
| 13 | `Key Skills`              | Paragraph      | ✅ Yes   | |
| 14 | `Portfolio / GitHub URL`  | Short answer   | ❌ No    | |

### 4.5 Add Section 4: Final
1. Click **═** (Add section) again
2. Section title: `Why GenZova?`
3. Section description: `Tell us why you want to join our team`

| #  | Question Text          | Type           | Required | Dropdown Options |
|:---|:-----------------------|:---------------|:---------|:-----------------|
| 15 | `Why do you want to work at GenZova?` | Paragraph | ✅ Yes | |
| 16 | `Availability`         | **Dropdown**   | ✅ Yes   | `Immediate, Within 15 days, Within 30 days, Within 60 days` |
| 17 | `Upload Resume`        | **File upload**| ❌ No    | *(Google will ask you to allow file uploads)* |
| 18 | `Source`               | Short answer   | ❌ No    | |
| 19 | `Button Clicked`       | Short answer   | ❌ No    | |

### ✅ Form 4 Done! (19 fields across 4 sections)

---

## STEP 5: Create Form 5 — Contact Us

This form is for: **"Contact Us" header button**, **"Send Message"**, **"Get in Touch"**

### 5.1 Create New Form
1. Go to **https://forms.google.com** → Click **+**
2. Title: `GenZova — Contact Us`
3. Description: `Send us a message and we'll get back to you soon.`

### 5.2 Add the Fields

| #  | Question Text        | Type           | Required | Dropdown Options |
|:---|:---------------------|:---------------|:---------|:-----------------|
| 1  | `Full Name`          | Short answer   | ✅ Yes   | |
| 2  | `Email`              | Short answer   | ✅ Yes   | |
| 3  | `Phone`              | Short answer   | ❌ No    | |
| 4  | `Subject`            | **Dropdown**   | ✅ Yes   | `General Enquiry, Service Request, Partnership Proposal, Feedback / Suggestion, Technical Support, Other` |
| 5  | `Message`            | Paragraph      | ✅ Yes   | |
| 6  | `Source`             | Short answer   | ❌ No    | |
| 7  | `Button Clicked`     | Short answer   | ❌ No    | |

### ✅ Form 5 Done! (7 fields)

---

## STEP 6: Get Pre-fill Entry IDs

**Do this for EACH of your 5 forms.** I'll walk through Form 2 (Service Enquiry) as an example — repeat the same steps for all 5.

### 6.1 Open the Form
1. Open **Form 2: Service Enquiry** in edit mode
2. Click the **⋮** (three dots) at the **top right** of the page
3. Click **"Get pre-filled link"**

### 6.2 Fill Sample Values
A preview of your form opens. Fill in:
- `Preferred Service` → Select any option (e.g., "Web Application Development")
- `Source` → Type: `TEST-SOURCE`
- `Button Clicked` → Type: `TEST-BUTTON`
- Leave the other fields empty (we don't need to pre-fill those)

### 6.3 Get the Link
1. Click **"Get link"** at the bottom
2. Click **"COPY LINK"**
3. Paste it into Notepad or any text editor

### 6.4 Read the Entry IDs
Your link will look something like this:
```
https://docs.google.com/forms/d/e/1FAIpQLSfABCDEFG/viewform
  ?entry.1234567890=Web+Application+Development
  &entry.9876543210=TEST-SOURCE
  &entry.1111111111=TEST-BUTTON
```

From this URL, note down:
```
Form 2 (Service Enquiry):
  Form ID:  1FAIpQLSfABCDEFG
  service:  entry.1234567890
  source:   entry.9876543210
  button:   entry.1111111111
```

### 6.5 Repeat for All 5 Forms

Write down all the IDs. Here's a template — fill it in as you go:

```
╔═══════════════════════════════════════════════════════════╗
║  FORM 1: General Enquiry                                  ║
╠═══════════════════════════════════════════════════════════╣
║  Form ID:  _______________________________________        ║
║  source:   entry.____________________                     ║
║  button:   entry.____________________                     ║
╚═══════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════╗
║  FORM 2: Service Enquiry                                  ║
╠═══════════════════════════════════════════════════════════╣
║  Form ID:  _______________________________________        ║
║  service:  entry.____________________                     ║
║  source:   entry.____________________                     ║
║  button:   entry.____________________                     ║
╚═══════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════╗
║  FORM 3: Internship Application                           ║
╠═══════════════════════════════════════════════════════════╣
║  Form ID:  _______________________________________        ║
║  course:   entry.____________________                     ║
║  source:   entry.____________________                     ║
║  button:   entry.____________________                     ║
╚═══════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════╗
║  FORM 4: Career Application                               ║
╠═══════════════════════════════════════════════════════════╣
║  Form ID:  _______________________________________        ║
║  source:   entry.____________________                     ║
║  button:   entry.____________________                     ║
╚═══════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════╗
║  FORM 5: Contact Us                                       ║
╠═══════════════════════════════════════════════════════════╣
║  Form ID:  _______________________________________        ║
║  source:   entry.____________________                     ║
║  button:   entry.____________________                     ║
╚═══════════════════════════════════════════════════════════╝
```

---

## STEP 7: Update the Website Code

Now open the file: **`js/gforms-redirect.js`** in your code editor.

### 7.1 Find the Config Section (near the top)
Look for this block starting around line 18:

```javascript
forms: {
    general: {
      id: 'YOUR_GENERAL_FORM_ID_HERE',
      fields: {
        source: 'entry.REPLACE_ME',
        button: 'entry.REPLACE_ME',
      }
    },
    ...
```

### 7.2 Replace with Your Actual IDs
Using the IDs you collected in Step 6, replace each placeholder. Example:

```javascript
forms: {
    general: {
      id: '1FAIpQLSe1234567890abcdefg',     // ← Your Form 1 ID
      fields: {
        source: 'entry.1234567890',           // ← Your Form 1 Source entry ID
        button: 'entry.9876543210',           // ← Your Form 1 Button entry ID
      }
    },
    service: {
      id: '1FAIpQLSf2222222222abcdefg',     // ← Your Form 2 ID
      fields: {
        service: 'entry.3333333333',          // ← Preferred Service entry ID
        source:  'entry.4444444444',
        button:  'entry.5555555555',
      }
    },
    internship: {
      id: '1FAIpQLSg6666666666abcdefg',     // ← Your Form 3 ID
      fields: {
        course: 'entry.7777777777',           // ← Internship Interested In entry ID
        source: 'entry.8888888888',
        button: 'entry.9999999999',
      }
    },
    career: {
      id: '1FAIpQLSh0000000000abcdefg',     // ← Your Form 4 ID
      fields: {
        source: 'entry.1111111111',
        button: 'entry.2222222222',
      }
    },
    contact: {
      id: '1FAIpQLSi3333333333abcdefg',     // ← Your Form 5 ID
      fields: {
        source: 'entry.4444444444',
        button: 'entry.5555555555',
      }
    }
  },
```

### 7.3 Save the File
Press **Ctrl + S** to save.

---

## STEP 8: Test Everything

### 8.1 Start your website
```
npm run dev
```

### 8.2 Test each button — one by one

| # | What to Click                              | Expected Result                                     |
|:--|:-------------------------------------------|:----------------------------------------------------|
| 1 | **"Get Started"** on Home hero             | Opens Form 1 (General Enquiry) in new tab           |
| 2 | **"Explore Projects →"** card              | Opens Form 1 (General Enquiry) in new tab           |
| 3 | **"Get Started"** on a Service card        | Opens Form 2 with service pre-selected in dropdown  |
| 4 | **"Apply Now"** on an Internship card      | Opens Form 3 with internship pre-selected           |
| 5 | **"Submit Application"** on Careers        | Opens Form 4 (Career Application) in new tab        |
| 6 | **"Contact Us"** in header                 | Opens Form 5 (Contact Us) in new tab                |
| 7 | **"Send Message"** on Contact page         | Opens Form 5 (Contact Us) in new tab                |
| 8 | **"Join Our Team"** on CTA section         | Opens Form 4 (Career Application) in new tab        |

### 8.3 Verify the Hidden Fields
When the Google Form opens in a new tab:
1. Scroll down to the **"Source"** and **"Button Clicked"** fields
2. They should be **automatically filled** with values like:
   - Source: `Services` or `Home` or `Internships`
   - Button Clicked: `Get Started — Web Application Development`

### 8.4 Submit a Test Response
1. Fill in a test entry on each form
2. Go back to Google Forms → **Responses** tab
3. Verify the Source and Button Clicked fields have the correct values

---

## STEP 9: Turn on Email Notifications

Get an email every time someone submits a form.

### For Each Form:
1. Open the form
2. Click the **Responses** tab
3. Click the **⋮** (three dots) at the top right of the Responses section
4. Click **"Get email notifications for new responses"** ✅

Now you'll get an email at your Google account every time someone submits!

---

## ✅ YOU'RE DONE!

### What's Working Now:
- ✅ Every CTA button opens the correct Google Form
- ✅ The form knows which page the user came from (Source field)
- ✅ The form knows which button they clicked (Button Clicked field)
- ✅ Service/Internship dropdowns are pre-selected automatically
- ✅ All responses go to separate Google Sheets (one per form)
- ✅ You get email notifications for every submission

### Your Existing System Still Works Too:
The old on-page modal forms + Google Sheets API (`forms.js`) are still active as a backup. If for any reason a Google Form doesn't open, the user sees the original on-page popup instead.

---

## ❓ TROUBLESHOOTING

| Problem | Solution |
|:--------|:---------|
| Form opens but dropdown isn't pre-selected | The pre-fill value must **exactly match** a dropdown option. Check spelling/capitalization. |
| Nothing happens when I click a button | Check browser console (F12 → Console tab) for `[GForms]` messages. |
| Old popup still opens instead of Google Form | The Form ID still says `YOUR_...`. Double-check `gforms-redirect.js`. |
| "Source" field is empty on the form | The entry ID in the config doesn't match. Re-do Step 6 for that form. |
| Want to change confirmation message | Form → ⚙️ Settings → Presentation → Edit confirmation message |
| Want to add your logo to the form | Form → 🎨 (palette icon top right) → Header → Upload your logo |
