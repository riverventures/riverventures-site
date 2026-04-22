const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jade — Your Family AI Assistant</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333; line-height: 1.6; }
        .hero { background: linear-gradient(135deg, #E14D25 0%, #5A6237 100%); color: white; padding: 80px 20px; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 16px; }
        .hero p { font-size: 1.3rem; opacity: 0.9; max-width: 600px; margin: 0 auto; }
        .container { max-width: 800px; margin: 0 auto; padding: 60px 20px; }
        h2 { font-size: 1.8rem; margin-bottom: 20px; color: #5A6237; }
        .features { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 40px 0; }
        .feature { padding: 24px; background: #f8f7f5; border-radius: 12px; }
        .feature h3 { color: #E14D25; margin-bottom: 8px; }
        .trust { background: #f8f7f5; padding: 40px 20px; border-radius: 12px; margin: 40px 0; }
        .trust h2 { text-align: center; }
        .trust ul { max-width: 600px; margin: 20px auto; list-style: none; }
        .trust li { padding: 8px 0; padding-left: 28px; position: relative; }
        .trust li::before { content: "✓"; position: absolute; left: 0; color: #5A6237; font-weight: bold; }
        .footer { text-align: center; padding: 40px 20px; color: #666; font-size: 0.9rem; }
        .footer a { color: #E14D25; }
    </style>
</head>
<body>
    <div class="hero">
        <h1>Jade</h1>
        <p>Your family's AI assistant. Scheduling, reminders, meal planning, school coordination — all through chat.</p>
    </div>

    <div class="container">
        <h2>What is Jade?</h2>
        <p>Jade is a chat-based AI assistant built for busy families in the UAE. No apps to install — just message Jade on Telegram and she handles the mental load: school calendars, pickup coordination, meal planning, fitness reminders, and more.</p>

        <div class="features">
            <div class="feature">
                <h3>📅 Smart Scheduling</h3>
                <p>Jade reads your school calendars, sends you calendar invites, and reminds you about upcoming events — so nothing falls through the cracks.</p>
            </div>
            <div class="feature">
                <h3>🎤 Voice-First</h3>
                <p>Send voice notes on the go. Jade transcribes and responds instantly — perfect for busy parents who don't have time to type.</p>
            </div>
            <div class="feature">
                <h3>🏡 Family Management</h3>
                <p>Pickup reminders, nanny schedules, grocery lists, birthday planning — Jade keeps track of it all so you don't have to.</p>
            </div>
            <div class="feature">
                <h3>🔒 Private & Secure</h3>
                <p>Your data stays yours. Jade uses industry-standard encryption and never shares your information with third parties.</p>
            </div>
        </div>

        <div class="trust">
            <h2>Why Families Trust Jade</h2>
            <ul>
                <li>Built by parents, for parents</li>
                <li>No app downloads — works entirely in Telegram</li>
                <li>Your data is encrypted and never sold</li>
                <li>Google Calendar integration for seamless scheduling</li>
                <li>Designed for the unique needs of UAE-based families</li>
            </ul>
        </div>
    </div>

    <div class="footer">
        <p>Jade is a product of <a href="https://riverventures.co">River Ventures</a></p>
        <p><a href="/jade/privacy">Privacy Policy</a></p>
    </div>
</body>
</html>`;

export async function GET() {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
