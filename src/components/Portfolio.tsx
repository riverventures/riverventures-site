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
      description: "Stablecoin-powered financial platform with global debit cards",
      category: "Advisory Client",
      url: "kast.xyz"
    },
    {
      name: "STBL",
      description: "Decentralized protocol for next-generation stablecoins",
      category: "Advisory Client",
      url: "stbl.com"
    },
    {
      name: "Credible Finance",
      description: "First stablecoin pay later protocol for on-chain credit",
      category: "Advisory Client",
      url: "credible.finance"
    },
    {
      name: "Third Time Games",
      description: "Virtual horse racing games and Web3 gaming pioneers",
      category: "Advisory Client",
      url: "thirdtimegames.com"
    }
  ];

  return (
    <section id="portfolio" className="py-8 md:py-12 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-extralight tracking-tight text-white mb-3">
            Portfolio & Clients
          </h2>
          <p className="text-base text-text-muted font-light max-w-2xl mx-auto">
            Building and advising transformational companies across fintech, crypto, and emerging technologies.
          </p>
        </div>

        {/* Portfolio Companies */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-light text-white mb-4 text-center">
            Portfolio Companies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolioCompanies.map((company) => (
              <div
                key={company.name}
                className="p-4 bg-accent border border-border hover:border-text-muted transition-smooth group"
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
          <h3 className="text-lg md:text-xl font-light text-white mb-4 text-center">
            Advisory Clients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {advisoryClients.map((client) => (
              <div
                key={client.name}
                className="p-4 bg-primary border border-border hover:border-text-muted transition-smooth group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-medium text-white group-hover:text-text-muted transition-smooth">
                      {client.name}
                    </h4>
                    {client.url && (
                      <a
                        href={`https://${client.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-white text-xs transition-smooth"
                      >
                        {client.url}
                      </a>
                    )}
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed flex-1">
                    {client.description}
                  </p>
                  <div className="mt-3 pt-2 border-t border-border">
                    <span className="text-[10px] text-text-secondary uppercase tracking-wider">
                      {client.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-6">
          <p className="text-xs text-text-secondary italic">
            Advisory for equity partnerships available for early-stage and growth-stage companies
          </p>
        </div>
      </div>
    </section>
  );
}