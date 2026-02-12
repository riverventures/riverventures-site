import Image from "next/image";

export default function Portfolio() {
  const portfolioCompanies = [
    { name: "Argus", url: "withargus.ai", description: "AI executive agent setup service", category: "Portfolio Company", logo: "/logos/argus.png" },
    { name: "Booth", url: "trybooth.ai", description: "WhatsApp product photography automation", category: "Portfolio Company", letter: "B" },
    { name: "UAE.fun", url: "uae.fun", description: "Concierge & UAE immigration support", category: "Portfolio Company", letter: "U" },
  ];

  return (
    <section id="portfolio" className="py-4 md:py-6 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-extralight tracking-tight text-white mb-1">
            Portfolio & Clients
          </h2>
          <p className="text-sm text-text-muted font-light max-w-2xl mx-auto">
            Building and advising transformational companies across fintech, crypto, and emerging technologies.
          </p>
        </div>

        {/* Portfolio Companies */}
        <div>
          <h3 className="text-sm font-light text-text-secondary mb-3 text-center uppercase tracking-wider">Portfolio Companies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {portfolioCompanies.map((company) => (
              <a
                key={company.name}
                href={`https://${company.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent border border-border river-glow river-shimmer transition-smooth group relative block overflow-hidden"
              >
                {/* Screenshot preview */}
                <div className="w-full h-28 bg-secondary border-b border-border overflow-hidden">
                  <img
                    src={`https://api.microlink.io/?url=https://${company.url}&screenshot=true&meta=false&embed=screenshot.url`}
                    alt={`${company.name} preview`}
                    className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-sm overflow-hidden flex-shrink-0 bg-secondary flex items-center justify-center border border-border">
                      {company.logo ? (
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          width={28}
                          height={28}
                          className="object-contain"
                          unoptimized
                        />
                      ) : (
                        <span className="text-xs font-medium text-text-muted">{company.letter}</span>
                      )}
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <h4 className="text-base font-medium text-white group-hover:text-river-light transition-smooth">
                        {company.name}
                      </h4>
                      <span className="text-text-secondary text-xs">{company.url}</span>
                    </div>
                  </div>
                  <p className="text-text-muted text-xs leading-snug">{company.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
