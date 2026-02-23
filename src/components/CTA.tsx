export default function CTA() {
  return (
    <section className="py-8 md:py-12 px-4 bg-primary relative overflow-hidden">
      {/* Background river flow */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
          <path d="M0 100 C300 60, 600 140, 900 90 C1200 40, 1350 120, 1440 80" stroke="#2a5a8c" strokeWidth="2" />
          <path d="M0 200 C400 170, 700 230, 1000 190 C1200 170, 1400 210, 1440 195" stroke="#1a3a5c" strokeWidth="1.5" />
          <path d="M0 300 C200 280, 500 320, 800 290 C1100 260, 1300 310, 1440 285" stroke="#1a3a5c" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main CTA */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white mb-4 leading-tight">
            Ready to Build
            <br />
            <span className="text-text-muted">Something Extraordinary?</span>
          </h2>
          <div className="river-line w-24 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-text-muted font-light max-w-2xl mx-auto mb-6">
            Whether you're seeking strategic advisory, venture building, or institutional partnerships, 
            we're here to unlock your potential.
          </p>
        </div>

        {/* Consultation CTA */}
        <div className="mb-8">
          <a
            href="https://calendar.app.google/mgBfrMcfG4tmNvraA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-river-light hover:text-white transition-smooth border border-white hover:border-river-light"
          >
            Book a Paid Consultation
          </a>
          <p className="text-xs text-text-secondary mt-3">
            Strategic sessions available in-person in Dubai or virtually
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          <div className="p-4 border border-border bg-secondary river-glow transition-smooth">
            <h3 className="text-sm font-medium text-white mb-1">General Inquiries</h3>
            <a href="mailto:alex@riverventures.co" className="text-text-muted hover:text-river-light transition-smooth text-sm">
              alex@riverventures.co
            </a>
          </div>
          <div className="p-4 border border-border bg-secondary river-glow transition-smooth">
            <h3 className="text-sm font-medium text-white mb-1">UAE Services</h3>
            <a href="https://uae.fun" target="_blank" rel="noopener noreferrer"
              className="text-text-muted hover:text-river-light transition-smooth text-sm">
              uae.fun
            </a>
          </div>
        </div>

        {/* Location — monochrome icons */}
        <div className="river-border-top pt-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-text-secondary">
            <div className="flex items-center space-x-1.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Based in Dubai, UAE</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Operating globally</span>
            </div>
          </div>
        </div>

        {/* Final tagline */}
        <div className="mt-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest">
            River Ventures &bull; Venture Studio & Strategic Advisory
          </p>
        </div>
      </div>
    </section>
  );
}
