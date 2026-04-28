var SPREADSHEET_ID = '1iF06CATE5mbPpaEpDFmxsYvUhdkpIVBAAkVaR9_lmiE';
var SHEET_NAME     = 'Form_Responses';

var CLEAN_HEADERS = [
  "Timestamp", "Full Name", "Email Address", "Phone Number", "Company / Business Name", 
  "City / Location", "Preferred Service / AI Service", "Project Details", "College / University", 
  "Internship Interested In", "Preferred Service", "Motivation for joining", "Date of Birth", 
  "LinkedIn Profile", "Highest Qualification", "College / University Name", "Year of Passing", 
  "CGPA / Percentage", "Position Applying For", "Experience Level", "Key Skills", 
  "Portfolio / GitHub Link", "Why do you want to join GenZova?", "Availability", 
  "Resume & Additional Info", "Subject", "Message", "Source (which page/button)", 
  "Resume Link (Google Drive / LinkedIn / Dropbox)"
];

function doGet(e) { return handleRequest(e); }
function doPost(e) { return handleRequest(e); }

function handleRequest(e) {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
    var data = e.parameter || {};
    
    // Auto-init headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(CLEAN_HEADERS);
      sheet.getRange(1, 1, 1, CLEAN_HEADERS.length).setBackground("#1e3a8a").setFontColor("#ffffff").setFontWeight("bold");
    }
    
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    var newRow = headers.map(function(h) {
      var header = String(h).trim();
      if (header === "Timestamp") return new Date();
      if (header === "College / University") return data["intern-college"] || data["College / University"] || "";
      if (header === "Company / Business Name") return data["enquiry-company"] || data["Company / Business Name"] || "";
      return data[header] || data[header.toLowerCase()] || data[header.replace(/\s/g, '')] || "";
    });
    
    sheet.appendRow(newRow);

    // 📧 AUTO-REPLY LOGIC (FIXED)
    var email = data['Email Address'] || data['Email'] || data['enquiry-email'] || data['intern-email'] || "";
    if (email) {
      var name = data['Full Name'] || data['enquiry-name'] || data['intern-name'] || "Customer";
      var html = '<div style="font-family:sans-serif;padding:24px;border:1px solid #e2e8f0;border-radius:16px;">' +
                 '<h2 style="color:#2563eb;"><b>GenZova Software Solutions</b></h2>' +
                 '<p>Dear <b>' + name + '</b>,</p>' +
                 '<p>Thank you for contacting <b>GenZova Software Solutions</b>. Your message has been received successfully.</p>' +
                 '<p>Our team is currently reviewing your request and will get back to you shortly.</p>' +
                 '<br><p>Best regards,<br><b>GenZova Software Solutions</b></p></div>';
      
      try {
        var fileId = "12pCGYIY_LVp2HTrRSbUTsF1yzInilLr2"; 
        var options = { to: email, subject: "Thank You for Contacting GenZova Software Solutions", htmlBody: html };
        
        try {
          if (fileId) {
            var file = DriveApp.getFileById(fileId);
            options.attachments = [file.getBlob()];
          }
        } catch (fErr) {
          // If logo fails, we just continue without it
        }
        
        MailApp.sendEmail(options);
      } catch (err) {
        // Ultimate fallback
      }
    }
    
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message);
  }
}
