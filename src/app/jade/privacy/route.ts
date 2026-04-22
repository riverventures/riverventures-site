const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jade — Privacy Policy</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333; line-height: 1.8; max-width: 800px; margin: 0 auto; padding: 40px 20px; }
        h1 { font-size: 2rem; margin-bottom: 8px; color: #5A6237; }
        .updated { color: #666; font-size: 0.9rem; margin-bottom: 40px; }
        h2 { font-size: 1.3rem; margin: 30px 0 12px; color: #E14D25; }
        p, li { margin-bottom: 12px; }
        ul { padding-left: 24px; }
        .footer { margin-top: 60px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.9rem; color: #666; }
    </style>
</head>
<body>
    <h1>Privacy Policy</h1>
    <p class="updated">Last updated: April 2026</p>

    <p>This Privacy Policy describes how Jade ("we," "us," or "our") collects, uses, and protects your information when you use our AI assistant service.</p>

    <h2>1. Information We Collect</h2>
    <p>When you use Jade, we may collect:</p>
    <ul>
        <li><strong>Google Account Data:</strong> With your explicit consent via Google OAuth, Jade accesses your Google Calendar to read events, create new events, and send you calendar reminders. Jade only accesses the specific Google services you authorize.</li>
        <li><strong>Messages:</strong> Your chat messages (text and voice) with Jade are processed to provide responses. Messages are not shared with third parties.</li>
        <li><strong>Family Information:</strong> Details you voluntarily share (family members' names, schedules, preferences) are stored to personalize your experience.</li>
        <li><strong>Voice Notes:</strong> Voice messages sent via Telegram are transcribed to text for processing. Audio files are not retained after transcription.</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <p>We use your information solely to:</p>
    <ul>
        <li>Provide scheduling and calendar management services</li>
        <li>Send you proactive reminders about events, appointments, and tasks</li>
        <li>Personalize your experience based on your family's needs</li>
        <li>Respond to your questions and requests via chat</li>
    </ul>
    <p>We do <strong>not</strong> use your data for advertising, marketing profiling, or any purpose beyond providing Jade's core services to you.</p>

    <h2>3. Google API Services User Data Policy</h2>
    <p>Jade's use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
    <p>Jade only accesses Google user data when you explicitly authorize it via Google OAuth. We request the minimum scopes necessary for the features you use.</p>

    <h2>4. Data Storage &amp; Security</h2>
    <ul>
        <li>Your data is stored on encrypted servers operated by River Ventures</li>
        <li>Google OAuth tokens are stored securely and automatically refreshed</li>
        <li>Calendar data is accessed in real-time and not stored beyond what is needed for active sessions</li>
        <li>Family information you share is stored locally in your profile and not shared externally</li>
    </ul>

    <h2>5. Data Sharing</h2>
    <p>We do <strong>not</strong> sell, rent, or share your personal data with third parties. Your data may be disclosed only:</p>
    <ul>
        <li>With your explicit consent</li>
        <li>To comply with legal obligations</li>
        <li>To protect the security of our service</li>
    </ul>

    <h2>6. Your Rights</h2>
    <p>You have the right to:</p>
    <ul>
        <li>Revoke Jade's access to your Google account at any time via your <a href="https://myaccount.google.com/permissions">Google Account permissions page</a></li>
        <li>Request deletion of your data by contacting us</li>
        <li>Export your data upon request</li>
        <li>Opt out of specific features while retaining others</li>
    </ul>

    <h2>7. Data Retention</h2>
    <ul>
        <li>Calendar data: accessed in real-time, not persistently stored</li>
        <li>Chat messages: retained for the duration of your active session</li>
        <li>Family profile data: retained until you request deletion or close your account</li>
        <li>Google OAuth tokens: retained until you revoke access</li>
    </ul>

    <h2>8. Children's Privacy</h2>
    <p>Jade is designed for use by parents and guardians. We do not knowingly collect data directly from children under 13. Information about children shared by parents (such as school schedules) is used solely to provide family management services.</p>

    <h2>9. Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via the Jade chat interface.</p>

    <h2>10. Contact Us</h2>
    <p>If you have questions about this Privacy Policy or your data, contact us at:</p>
    <p><strong>River Ventures</strong><br>
    Email: privacy@riverventures.co<br>
    Website: <a href="https://riverventures.co">riverventures.co</a></p>

    <div class="footer">
        <p>Jade is a product of <a href="https://riverventures.co">River Ventures</a> | <a href="/jade">Back to Jade</a></p>
    </div>
</body>
</html>`;

export async function GET() {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
