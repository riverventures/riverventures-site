export default function Services() {
  const services = [
    {
      title: "Strategic Advisory",
      subtitle: "Growth Partnership",
      description: "Strategic and operational expertise for early-stage and growth-stage companies scaling in fintech and crypto.",
      highlights: ["Product roadmap development", "Go-to-market strategy", "Fundraising guidance", "Regulatory navigation"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Venture Building",
      subtitle: "End-to-End Creation",
      description: "From concept to scale, we build transformational companies with proven frameworks and strategic execution.",
      highlights: ["Concept validation", "Technical development", "Market entry strategy", "Scaling operations"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Institutional Partnerships",
      subtitle: "Solana Foundation",
      description: "Leading Solana Foundation's UAE/MENA expansion with deep relationships across banks, RWA providers, and regulatory bodies.",
      highlights: ["Banking and institutional partnerships", "Regulatory relationships", "Institutional onboarding", "Regional ecosystem development"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Concierge & Immigration",
      subtitle: "UAE.fun Platform",
      description: "Comprehensive UAE relocation and lifestyle services for families and executives moving to the region.",
      highlights: ["Visa & immigration support", "Housing & real estate", "Business setup assistance", "Lifestyle concierge services"],
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 md:py-12 px-4 bg-primary relative">
      {/* Subtle background flow lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path d="M0 200 C400 150, 800 250, 1440 180" stroke="#2a5a8c" strokeWidth="2" />
          <path d="M0 400 C300 370, 700 430, 1440 380" stroke="#1a3a5c" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-extralight tracking-tight text-white mb-3">Services</h2>
          <p className="text-base text-text-muted font-light max-w-3xl mx-auto">
            Strategic advisory and venture building for companies seeking strategic expertise and operational excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-5 border border-border river-glow transition-smooth group ${
                index % 2 === 0 ? 'bg-secondary' : 'bg-accent'
              }`}
            >
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-river-light opacity-60 group-hover:opacity-100 transition-smooth">
                    {service.icon}
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary uppercase tracking-widest">{service.subtitle}</div>
                    <h3 className="text-lg md:text-xl font-light text-white group-hover:text-river-light transition-smooth">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-text-muted leading-relaxed text-sm">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-1 h-1 bg-river-light rounded-full mt-1.5 mr-2 flex-shrink-0 opacity-60"></div>
                    <span className="text-xs text-text-muted">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Note */}
        <div className="mt-6 text-center">
          <div className="inline-block px-4 py-2 border border-border bg-secondary river-border-top">
            <p className="text-xs text-text-muted">
              <span className="text-white font-medium">Specialization:</span> Fintech, Crypto, Real World Assets (RWA), Stablecoins, and Emerging Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
