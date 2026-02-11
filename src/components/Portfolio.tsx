import Image from "next/image";

export default function Portfolio() {
  const portfolioCompanies = [
    { name: "Argus", url: "withargus.ai", description: "AI executive agent setup service", category: "Portfolio Company" },
    { name: "SnapBot", url: "snapbot.io", description: "WhatsApp product photography automation", category: "Portfolio Company" },
    { name: "UAE.fun", url: "uae.fun", description: "Concierge & UAE immigration support", category: "Portfolio Company" },
  ];

  const advisoryClients = [
    { name: "KAST", description: "Stablecoin-powered financial platform with global debit cards", url: "kast.xyz", logo: "/logos/kast.png" },
    { name: "STBL", description: "Decentralized protocol for next-generation stablecoins", url: "stbl.com", logo: "/logos/stbl.png" },
    { name: "Credible Finance", description: "First stablecoin pay later protocol for on-chain credit", url: "credible.finance", logo: "/logos/credible.png" },
    { name: "Third Time Games", description: "Virtual horse racing games and Web3 gaming pioneers", url: "thirdtimegames.com", logo: "/logos/thirdtimegames.png" },
    { name: "Flash Trade", description: "Decentralized perpetuals and spot exchange on Solana with up to 100x leverage", url: "flash.trade", logo: "/logos/flashtrade.png" },
    { name: "Perceptron Network", description: "Decentralized AI compute and inference network on Solana", url: "x.com/PerceptronNTWK", logo: "/logos/perceptron.png" },
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

        {/* Advisory Clients */}
        <div>
          <h3 className="text-lg md:text-xl font-light text-white mb-4 text-center">Advisory Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {advisoryClients.map((client) => (
              <a
                key={client.name}
                href={`https://${client.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-primary border border-border river-glow transition-smooth group block"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-sm overflow-hidden flex-shrink-0 bg-accent flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <h4 className="text-base font-medium text-white group-hover:text-river-light transition-smooth leading-tight">
                      {client.name}
                    </h4>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed flex-1">{client.description}</p>
                  <div className="mt-3 pt-2 river-border-top">
                    <span className="text-[10px] text-text-secondary uppercase tracking-wider">{client.url}</span>
                  </div>
                </div>
              </a>
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
