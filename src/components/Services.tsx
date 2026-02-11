export default function Services() {
  const services = [
    {
      title: "Strategic Advisory",
      subtitle: "Growth Partnership",
      description: "We provide strategic and operational expertise to early-stage and growth-stage companies seeking to scale in fintech and crypto.",
      highlights: [
        "Product roadmap development",
        "Go-to-market strategy",
        "Fundraising guidance",
        "Regulatory navigation"
      ]
    },
    {
      title: "Venture Building",
      subtitle: "End-to-End Creation",
      description: "From concept to scale, we build transformational companies with proven frameworks and elite execution.",
      highlights: [
        "Concept validation",
        "Technical development",
        "Market entry strategy",
        "Scaling operations"
      ]
    },
    {
      title: "Institutional Partnerships",
      subtitle: "Solana Foundation",
      description: "Leading Solana Foundation's UAE/MENA expansion with deep relationships across banks, RWA providers, and regulatory bodies.",
      highlights: [
        "Banking partnerships (Zand, RAKBANK, Citi)",
        "Regulatory relationships",
        "Institutional onboarding",
        "Regional ecosystem development"
      ]
    },
    {
      title: "Concierge & Immigration",
      subtitle: "UAE.fun Platform",
      description: "Comprehensive UAE relocation and lifestyle services for families and executives moving to the region.",
      highlights: [
        "Visa & immigration support",
        "Housing & real estate",
        "Business setup assistance",
        "Lifestyle concierge services"
      ]
    }
  ];

  return (
    <section className="py-8 md:py-12 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-extralight tracking-tight text-white mb-3">
            Services
          </h2>
          <p className="text-base text-text-muted font-light max-w-3xl mx-auto">
            Elite advisory and venture building services for companies seeking strategic expertise and operational excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-5 border border-border hover:border-text-muted transition-smooth group ${
                index % 2 === 0 ? 'bg-secondary' : 'bg-accent'
              }`}
            >
              <div className="mb-4">
                <div className="text-xs text-text-secondary uppercase tracking-widest mb-1">
                  {service.subtitle}
                </div>
                <h3 className="text-lg md:text-xl font-light text-white group-hover:text-text-muted transition-smooth mb-2">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-1 h-1 bg-text-muted rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span className="text-xs text-text-muted">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Note */}
        <div className="mt-6 text-center">
          <div className="inline-block px-4 py-2 border border-border bg-secondary">
            <p className="text-xs text-text-muted">
              <span className="text-white font-medium">Specialization:</span> Fintech, Crypto, Real World Assets (RWA), 
              Stablecoins, and Emerging Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}