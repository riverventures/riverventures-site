export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white mb-6 leading-tight">
            Ready to Build
            <br />
            <span className="text-text-muted">Something Extraordinary?</span>
          </h2>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-2xl mx-auto mb-8">
            Whether you're seeking strategic advisory, venture building, or institutional partnerships, 
            we're here to unlock your potential.
          </p>
        </div>

        {/* Consultation CTA */}
        <div className="mb-16">
          <a
            href="https://calendar.app.google/T3ktQUwy2u8CdqEp9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-white text-black text-base font-medium uppercase tracking-wider hover:bg-text-muted transition-smooth border border-white group"
          >
            <span className="group-hover:text-white transition-smooth">
              Book a Paid Consultation
            </span>
          </a>
          <p className="text-sm text-text-secondary mt-4">
            Strategic sessions available in-person in Dubai or virtually
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
          <div className="p-6 border border-border bg-secondary hover:border-text-muted transition-smooth">
            <h3 className="text-lg font-medium text-white mb-2">General Inquiries</h3>
            <a
              href="mailto:alex@riverventures.co"
              className="text-text-muted hover:text-white transition-smooth"
            >
              alex@riverventures.co
            </a>
          </div>
          <div className="p-6 border border-border bg-secondary hover:border-text-muted transition-smooth">
            <h3 className="text-lg font-medium text-white mb-2">UAE Services</h3>
            <a
              href="https://uae.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-white transition-smooth"
            >
              uae.fun
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span>Based in Dubai, UAE</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🌍</span>
              <span>Operating globally</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🤝</span>
              <span>Advisory for equity</span>
            </div>
          </div>
        </div>

        {/* Final tagline */}
        <div className="mt-12">
          <p className="text-xs text-text-secondary uppercase tracking-widest">
            River Ventures • Venture Studio & Elite Advisory
          </p>
        </div>
      </div>
    </section>
  );
}