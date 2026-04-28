import http.server
import os
import json
import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# ─────────────────────────────────────────────────────────────
#  GMAIL SMTP CONFIGURATION
#  SETUP (one-time, 5 minutes):
#  1. Go to myaccount.google.com → Security
#  2. Enable "2-Step Verification"
#  3. Search "App Passwords" → Create one for "Mail"
#  4. Paste the 16-character password below (no spaces)
# ─────────────────────────────────────────────────────────────
SMTP_EMAIL    = 'genzovasoftwaresolutions@gmail.com'
SMTP_PASSWORD = 'zfei kont eisp xzbq'   # e.g. 'abcd efgh ijkl mnop'
SMTP_HOST     = 'smtp.gmail.com'
SMTP_PORT     = 587   # Gmail TLS — works forever, completely free


def send_smtp_email(to_email, to_name):
    """Send a professional HTML auto-reply via Gmail SMTP (TLS)."""
    msg = MIMEMultipart('alternative')
    msg['Subject'] = 'Thank You for Contacting GenZova Software Solutions'
    msg['From']    = f'GenZova Software Solutions <{SMTP_EMAIL}>'
    msg['To']      = to_email
    msg['Reply-To'] = SMTP_EMAIL

    plain = f"""Dear {to_name},

Thank you for contacting GenZova Software Solutions.

We sincerely appreciate your interest in our company and the opportunity to assist you. Your message has been successfully received, and our team is currently reviewing your request. We will get back to you shortly with the relevant details.

Best regards,
GenZova Software Solutions
Email: {SMTP_EMAIL}
WhatsApp: +91 8610935715"""

    html = f"""<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f8fafc;">
  <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1e293b;max-width:600px;margin:30px auto;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05);">
    <div style="background:linear-gradient(135deg,#2563eb,#1e40af);padding:36px 24px;text-align:center;">
      <h1 style="color:#fff;margin:0;font-size:26px;font-weight:800;letter-spacing:-0.5px;">GenZova Software Solutions</h1>
    </div>
    <div style="padding:40px 35px;background:#ffffff;">
      <p style="font-size:16px;color:#334155;margin-bottom:20px;">Dear <strong>{to_name}</strong>,</p>
      <p style="font-size:15px;color:#475569;margin-bottom:16px;">Thank you for contacting <strong>GenZova Software Solutions</strong>.</p>
      <p style="font-size:15px;color:#475569;text-align:justify;margin-bottom:24px;">We sincerely appreciate your interest in our company and the opportunity to assist you. Your message has been successfully received, and our team is currently reviewing your request. We will get back to you shortly with the relevant details.</p>
      <p style="font-size:15px;color:#334155;margin-bottom:4px;">Best regards,</p>
      <p style="font-size:16px;color:#2563eb;font-weight:800;margin-top:4px;">GenZova Software Solutions</p>
      <div style="border-top:1px solid #f1f5f9;padding-top:24px;margin-top:30px;">
        <p style="font-size:12px;color:#94a3b8;margin:0;line-height:1.8;">
          <strong style="color:#64748b;">GenZova Software Solutions</strong><br>
          Madurai, Tamil Nadu, India<br>
          Email: <a href="mailto:{SMTP_EMAIL}" style="color:#2563eb;text-decoration:none;">{SMTP_EMAIL}</a><br>
          WhatsApp: <a href="https://wa.me/918610935715" style="color:#2563eb;text-decoration:none;">+91 8610935715</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>"""

    msg.attach(MIMEText(plain, 'plain'))
    msg.attach(MIMEText(html, 'html'))

    context = ssl.create_default_context()
    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.ehlo()
        server.starttls(context=context)
        server.login(SMTP_EMAIL, SMTP_PASSWORD)
        server.sendmail(SMTP_EMAIL, to_email, msg.as_string())
    print(f'[SMTP] ✅ Auto-reply sent to {to_email}')


class RangeRequestHandler(http.server.SimpleHTTPRequestHandler):

    def do_OPTIONS(self):
        """Handle CORS preflight from browser."""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        """POST /send-email — trigger SMTP auto-reply."""
        if self.path == '/send-email':
            try:
                length = int(self.headers.get('Content-Length', 0))
                body   = self.rfile.read(length)
                data   = json.loads(body)

                to_email = data.get('email', '').strip()
                to_name  = data.get('name', 'Valued Customer').strip()

                if not to_email:
                    self._json(400, {'ok': False, 'error': 'Missing email'})
                    return

                send_smtp_email(to_email, to_name)
                self._json(200, {'ok': True, 'message': 'Email sent successfully'})

            except smtplib.SMTPAuthenticationError:
                print('[SMTP] ❌ Auth failed — check SMTP_PASSWORD in server.py')
                self._json(500, {'ok': False, 'error': 'SMTP auth failed. Check App Password.'})
            except Exception as ex:
                print(f'[SMTP] ❌ Error: {ex}')
                self._json(500, {'ok': False, 'error': str(ex)})
        else:
            self.send_error(404)

    def _json(self, code, obj):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Length', len(body))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        path = self.translate_path(self.path)

        if os.path.isdir(path):
            path = os.path.join(path, 'index.html')

        if not os.path.isfile(path):
            if self.path == '/favicon.ico':
                self.send_response(204)
                self.end_headers()
                return
            self.send_error(404)
            return

        file_size    = os.path.getsize(path)
        range_header = self.headers.get('Range')

        if range_header:
            range_val = range_header.strip().replace('bytes=', '')
            parts  = range_val.split('-')
            start  = int(parts[0]) if parts[0] else 0
            end    = int(parts[1]) if parts[1] else file_size - 1
            end    = min(end, file_size - 1)
            length = end - start + 1

            self.send_response(206)
            self.send_header('Content-Type', self.guess_type(path))
            self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
            self.send_header('Content-Length', str(length))
            self.send_header('Accept-Ranges', 'bytes')
            self.end_headers()
            try:
                with open(path, 'rb') as f:
                    f.seek(start)
                    self.wfile.write(f.read(length))
            except (ConnectionResetError, BrokenPipeError):
                pass
        else:
            self.send_response(200)
            self.send_header('Content-Type', self.guess_type(path))
            self.send_header('Content-Length', str(file_size))
            self.send_header('Accept-Ranges', 'bytes')
            self.end_headers()
            try:
                with open(path, 'rb') as f:
                    self.wfile.write(f.read())
            except (ConnectionResetError, BrokenPipeError):
                pass

    def log_message(self, format, *args):
        if any(ext in self.path for ext in ['.mp4', '.mp3', '.webm', '.ogg']):
            return
        super().log_message(format, *args)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8001))
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = http.server.ThreadingHTTPServer(('0.0.0.0', port), RangeRequestHandler)
    print(f'✅ Serving at http://0.0.0.0:{port}')
    print(f'📧 SMTP endpoint ready: POST http://0.0.0.0:{port}/send-email')
    server.serve_forever()
