






# GenZova Website Buttons & Interactive Elements

This document catalogs the interactive elements of the GenZova website.

## 1. Primary Navigation Buttons
Buttons used for site-wide navigation and the main call-to-action in the header.

| Button Text | CSS Class | Destination | Primary Action |
| :--- | :--- | :--- | :--- |
| **Contact Us** | `btn-primary` | `#contact` | Opens the main contact form |
| **Home** | `nav-link` | `#` | Returns to the landing page |
| **Services** | `nav-link` | `#services` | Scrolls to the Services section |
| **Internships** | `nav-link` | `#internships` | Navigates to Internships page |
| **AI Development** | `nav-link` | `#ai-development` | Navigates to AI Dev page |
| **Careers** | `nav-link` | `#careers` | Navigates to Careers page |
| **About GenZova** | `nav-link` | `#about` | Navigates to About page |
| **Menu Toggle** | `menu-toggle` | N/A | Toggles mobile navigation menu |

## 2. Hero & Section CTA Buttons
High-visibility buttons found in page hero sections and major call-to-action blocks.

| Button Text | Location | Destination | Purpose |
| :--- | :--- | :--- | :--- |
| **Explore Services** | Home Hero | `#services` | Promotion of core services |
| **Get Started** | Home Hero | `#contact` | High-intent lead generation |
| **Contact Us** (Outline) | Footer/CTA | `#contact` | Secondary contact prompt |
| **Join Our Team** | Footer/CTA | `#careers` | Recruitment engagement |
| **Get in Touch** | About Page | `#contact` | Page-specific contact action |
| **Start Your Project** | AI Dev Hero | `#contact` | Direct enquiry for AI solutions |

## 3. Product & Service Offering Buttons
Buttons located within cards and grids that lead to detailed offering pages.

| Button Label (btnLabel) | Category | Target Slug |
| :--- | :--- | :--- |
| **Explore Projects →** | Offering | `client-projects` |
| **View Training Programs →**| Offering | `corporate-training` |
| **Explore Academic Support →**| Offering | `academic-projects` |
| **Discover AI Solutions →** | Offering | `ai-automation` |
| **Apply Now →** | Offering | `internship-programs` |
| **See Our Web Work →** | Offering | `website-development` |
| **Explore Products →** | Offering | `products` |
| **View Services →** | Offering | `all-services` |
| **Browse Courses →** | Offering | `courses` |

## 4. Form Submission Buttons
Action buttons that process user data and sync with Google Sheets via `js/forms.js`.

| Button Text | Associated Form | Success Tab (GSheet) | Functionality |
| :--- | :--- | :--- | :--- |
| **Send Message** | `contact-form` | `contact` | Primary lead intake |
| **Start Your Project** | `about-enquiry-form` | `contact` | About page enquiry |
| **Submit Enquiry** | `enquiry-modal` | `enquiry` | Service specific request |
| **Apply Now** | `internship-modal` | `internship` | Student application |
| **Submit Application** | `career-form` | `careers` | Job candidate intake |
| **Request Quote** | `training-enquiry-form`| `training` | Corporate B2B enquiry |

## 5. UI Utility & Filter Buttons
Elements that control UI state rather than navigating to a new page.

| Button / Element | Location | Interaction |
| :--- | :--- | :--- |
| **Profile Tab (Web/AI...)**| Profile Page | Filters project grid by category |
| **FAQ Question** | FAQ Page | Expands/Collapses answer text |
| **Carousel Prev/Next** | Projects | Cycles through project articles |
| **Dropdown Item** | Nav Menus | Navigates to specific sub-pages |

