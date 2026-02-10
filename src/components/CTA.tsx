export default function CTA() {
  return (
    <section className="py-8 md:py-12 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white mb-4 leading-tight">
            Ready to Build
            <br />
            <span className="text-text-muted">Something Extraordinary?</span>
          </h2>
          <p className="text-base md:text-lg text-text-muted font-light max-w-2xl mx-auto mb-6">
            Whether you're seeking strategic advisory, venture building, or institutional partnerships, 
            we're here to unlock your potential.
          </p>
        </div>

        {/* Consultation CTA */}
        <div className="mb-8">
          <a
            href="https://calendar.app.google/T3ktQUwy2u8CdqEp9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-text-muted transition-smooth border border-white group"
          >
            <span className="group-hover:text-white transition-smooth">
              Book a Paid Consultation
            </span>
          </a>
          <p className="text-xs text-text-secondary mt-3">
            Strategic sessions available in-person in Dubai or virtually
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          <div className="p-4 border border-border bg-secondary hover:border-text-muted transition-smooth">
            <h3 className="text-sm font-medium text-white mb-1">General Inquiries</h3>
            <a
              href="mailto:alex@riverventures.co"
              className="text-text-muted hover:text-white transition-smooth text-sm"
            >
              alex@riverventures.co
            </a>
          </div>
          <div className="p-4 border border-border bg-secondary hover:border-text-muted transition-smooth">
            <h3 className="text-sm font-medium text-white mb-1">UAE Services</h3>
            <a
              href="https://uae.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-white transition-smooth text-sm"
            >
              uae.fun
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-text-secondary">
            <div className="flex items-center space-x-1.5">
              <span>📍</span>
              <span>Based in Dubai, UAE</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span>🌍</span>
              <span>Operating globally</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span>🤝</span>
              <span>Advisory for equity</span>
            </div>
          </div>
        </div>

        {/* Final tagline */}
        <div className="mt-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest">
            River Ventures • Venture Studio & Elite Advisory
          </p>
        </div>
      </div>
    </section>
  );
}