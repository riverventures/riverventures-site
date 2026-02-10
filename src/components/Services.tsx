export default function Services() {
  const services = [
    {
      title: "Advisory for Equity",
      subtitle: "Strategic Partnership",
      description: "We provide strategic and operational expertise to early-stage and growth-stage companies in exchange for equity positions.",
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
    <section className="py-16 md:py-24 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-4">
            Services
          </h2>
          <p className="text-lg text-text-muted font-light max-w-3xl mx-auto">
            Elite advisory and venture building services for companies seeking strategic expertise and operational excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-8 border border-border hover:border-text-muted transition-smooth group ${
                index % 2 === 0 ? 'bg-secondary' : 'bg-accent'
              }`}
            >
              <div className="mb-6">
                <div className="text-xs text-text-secondary uppercase tracking-widest mb-2">
                  {service.subtitle}
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-text-muted transition-smooth mb-4">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-1 h-1 bg-text-muted rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-text-muted">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Note */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 border border-border bg-secondary">
            <p className="text-sm text-text-muted">
              <span className="text-white font-medium">Specialization:</span> Fintech, Crypto, Real World Assets (RWA), 
              Stablecoins, and Emerging Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}