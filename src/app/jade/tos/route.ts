const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jade — Terms of Service</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #333; background: #fafafa; }
        .container { max-width: 720px; margin: 0 auto; padding: 60px 24px; }
        h1 { font-size: 2rem; margin-bottom: 8px; color: #1a1a1a; }
        .updated { color: #888; font-size: 0.9rem; margin-bottom: 40px; }
        h2 { font-size: 1.2rem; margin-top: 32px; margin-bottom: 12px; color: #1a1a1a; }
        p { margin-bottom: 16px; }
        ul { margin-bottom: 16px; padding-left: 24px; }
        li { margin-bottom: 8px; }
        a { color: #2563eb; }
        .footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e5e5; color: #888; font-size: 0.85rem; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Terms of Service</h1>
        <p class="updated">Jade AI &mdash; Last updated: April 22, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using Jade ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>

        <h2>2. Description of Service</h2>
        <p>Jade is an AI-powered personal assistant that helps users manage calendars, communications, and daily tasks. The Service may integrate with third-party platforms including Google Calendar, Gmail, and messaging applications.</p>

        <h2>3. User Accounts</h2>
        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must notify us immediately of any unauthorized use.</p>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to use the Service to:</p>
        <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Transmit malicious code or attempt to disrupt the Service</li>
            <li>Access another user's account without authorization</li>
        </ul>

        <h2>5. Data and Privacy</h2>
        <p>Your use of the Service is also governed by our <a href="https://riverventures.co/jade/privacy">Privacy Policy</a>. By using the Service, you consent to the collection and use of information as described therein.</p>

        <h2>6. Third-Party Services</h2>
        <p>The Service integrates with third-party platforms (e.g., Google). Your use of those platforms is subject to their respective terms and policies. We are not responsible for the availability or accuracy of third-party services.</p>

        <h2>7. Intellectual Property</h2>
        <p>All rights, title, and interest in and to the Service (excluding user-provided content) are and will remain the exclusive property of River Ventures and its licensors.</p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.</p>

        <h2>9. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, River Ventures shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.</p>

        <h2>10. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. We will notify users of material changes. Continued use of the Service after changes constitutes acceptance of the revised Terms.</p>

        <h2>11. Contact</h2>
        <p>Questions about these Terms? Contact us at <a href="mailto:sterling@riverventures.co">sterling@riverventures.co</a>.</p>

        <div class="footer">
            <p>&copy; 2026 River Ventures. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;

export async function GET() {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
