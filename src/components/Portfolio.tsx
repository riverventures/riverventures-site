export default function Portfolio() {
  const portfolioCompanies = [
    {
      name: "Argus",
      url: "withargus.ai",
      description: "AI executive agent setup service",
      category: "Portfolio Company"
    },
    {
      name: "SnapBot",
      url: "snapbot.io",
      description: "WhatsApp product photography automation",
      category: "Portfolio Company"
    },
    {
      name: "UAE.fun",
      url: "uae.fun",
      description: "Concierge & UAE immigration support",
      category: "Portfolio Company"
    }
  ];

  const advisoryClients = [
    {
      name: "KAST",
      description: "Fintech platform",
      category: "Advisory Client"
    },
    {
      name: "STBL",
      description: "Stablecoin infrastructure",
      category: "Advisory Client"
    },
    {
      name: "Incredible Finance",
      description: "DeFi platform",
      category: "Advisory Client"
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-4">
            Portfolio & Clients
          </h2>
          <p className="text-lg text-text-muted font-light max-w-2xl mx-auto">
            Building and advising transformational companies across fintech, crypto, and emerging technologies.
          </p>
        </div>

        {/* Portfolio Companies */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-light text-white mb-8 text-center">
            Portfolio Companies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioCompanies.map((company) => (
              <div
                key={company.name}
                className="p-6 bg-accent border border-border hover:border-text-muted transition-smooth group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-medium text-white group-hover:text-text-muted transition-smooth">
                      {company.name}
                    </h4>
                    {company.url && (
                      <a
                        href={`https://${company.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-white text-sm transition-smooth"
                      >
                        {company.url}
                      </a>
                    )}
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    {company.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-border">
                    <span className="text-xs text-text-secondary uppercase tracking-wider">
                      {company.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Clients */}
        <div>
          <h3 className="text-xl md:text-2xl font-light text-white mb-8 text-center">
            Advisory Clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisoryClients.map((client) => (
              <div
                key={client.name}
                className="p-6 bg-primary border border-border hover:border-text-muted transition-smooth group"
              >
                <div className="flex flex-col h-full">
                  <h4 className="text-xl font-medium text-white group-hover:text-text-muted transition-smooth mb-3">
                    {client.name}
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    {client.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-border">
                    <span className="text-xs text-text-secondary uppercase tracking-wider">
                      {client.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-sm text-text-secondary italic">
            Advisory for equity partnerships available for early-stage and growth-stage companies
          </p>
        </div>
      </div>
    </section>
  );
}