export default function Portfolio() {
  const portfolioCompanies = [
    { name: "Argus", url: "withargus.ai", description: "AI executive agent setup service", category: "Portfolio Company" },
    { name: "SnapBot", url: "snapbot.io", description: "WhatsApp product photography automation", category: "Portfolio Company" },
    { name: "UAE.fun", url: "uae.fun", description: "Concierge & UAE immigration support", category: "Portfolio Company" },
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
          <h3 className="text-lg md:text-xl font-light text-white mb-4 text-center">Portfolio Companies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolioCompanies.map((company) => (
              <div
                key={company.name}
                className="p-4 bg-accent border border-border river-glow river-shimmer transition-smooth group relative"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-medium text-white group-hover:text-river-light transition-smooth">
                      {company.name}
                    </h4>
                    {company.url && (
                      <a href={`https://${company.url}`} target="_blank" rel="noopener noreferrer"
                        className="text-text-secondary hover:text-river-light text-sm transition-smooth">
                        {company.url}
                      </a>
                    )}
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed flex-1">{company.description}</p>
                  <div className="mt-4 pt-3 river-border-top">
                    <span className="text-xs text-text-secondary uppercase tracking-wider">{company.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
