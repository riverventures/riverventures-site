export default function Team() {
  const team = [
    {
      name: "Alex Scott",
      title: "Co-founder",
      role: "Co-founder, River Ventures",
      bio: "Former Amazon Product and Engineering roles in Luxembourg and London. Management Consultant at Deloitte Digital serving financial services clients in London. Founded a crypto on/off ramp company in UAE and raised venture funding. Currently UAE/MENA Regional Lead at Solana Foundation.",
      trackRecord: [
        "Led Solana ecosystem development across UAE/MENA — government relationships, founder support, large-scale hackathons",
        "Amazon: Automated 35K+ annual contract negotiations, customer support, marketing campaigns",
        "Ledger: Built web3 scam detection API protecting 1.4M monthly active users, scanning 10M transactions/month",
        "Founded crypto on/off ramp company in UAE (raised venture funding, built founding team)",
        "Hosted Solana dinner in Riyadh with 500 Global VC and Saudi institutional investors",
        "Met with H.E. Khalfan Belhoul and Ahmed Bin Sulayem at DMCC Al Centre opening",
        "Host of Solana Economic Zone: 700+ founders' conference occurring twice a year in Dubai and Abu Dhabi"
      ],
      endorsements: [
        { name: "Lily Liu, President, Solana Foundation", quote: "Only possible with Alex" },
        { name: "Nas Daily", quote: "So impressed with how you put all of this together in such a short time" },
        { name: "0xMert (Helius Labs)", quote: "Shoutout to @afscott for making moving to Dubai extremely easy" },
        { name: "Akshay (Superteam)", quote: "@afscott is a beast and can help you navigate any business ambition in the Middle East" }
      ],
      media: [
        { publication: "Forbes", title: "Solana Launches Dubai Crypto Economic Zone" },
        { publication: "The National", title: "Solana blockchain seeks UAE foothold with Founders' Villa event" },
        { publication: "Cointelegraph", title: "VC Startup Connect Dubai Edition" },
        { publication: "The Crypto Radio", title: "Solana supercharges the crypto economy" }
      ],
      specialties: ["Institutional Partnerships", "Regulatory Strategy", "Blockchain Infrastructure", "Regional Expansion"],
      social: { twitter: "afscott", linkedin: "alexfscott" }
    },
    {
      name: "Shweta Scott",
      title: "Co-founder",
      role: "CEO, UAE.fun",
      bio: "Yale educated. Former Amazon Product Marketing for the Alexa business. CEO of UAE.fun, providing concierge and UAE immigration support for families and executives. Deep expertise in UAE business formation and lifestyle services.",
      specialties: ["UAE Business Formation", "Immigration & Visas", "Product Marketing", "Lifestyle Services"],
      social: { linkedin: "shwetascott" }
    }
  ];

  return (
    <section className="py-8 md:py-12 px-4 bg-secondary relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-extralight tracking-tight text-white mb-3">Leadership Team</h2>
          <p className="text-base text-text-muted font-light max-w-2xl mx-auto">
            Experienced founders and operators with deep expertise in venture building, blockchain technology, and the UAE market.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              {/* Name and Title */}
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-light text-white mb-1 group-hover:text-river-light transition-smooth">
                  {member.name}
                </h3>
                <div className="text-xs text-text-secondary uppercase tracking-wider mb-1">{member.title}</div>
                <div className="text-sm text-text-muted font-light">{member.role}</div>
                <div className="river-line w-16 mt-2 opacity-40"></div>
              </div>

              {/* Bio */}
              <div className="mb-4">
                <p className="text-text-muted leading-relaxed text-xs md:text-sm">{member.bio}</p>
              </div>

              {/* Track Record */}
              {member.trackRecord && (
                <div className="mb-4 p-3 bg-accent/50 border-l-2 border-river/40">
                  <div className="text-xs text-text-secondary uppercase tracking-widest mb-2">Track Record</div>
                  <div className="space-y-1">
                    {member.trackRecord.map((achievement, index) => (
                      <div key={index} className="text-xs text-text-muted leading-relaxed flex items-start">
                        <span className="text-river-light mr-2 mt-0.5 opacity-50">&#8212;</span>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Endorsements */}
              {member.endorsements && (
                <div className="mb-4">
                  <div className="text-xs text-text-secondary uppercase tracking-widest mb-2">Endorsements</div>
                  <div className="space-y-2">
                    {member.endorsements.map((endorsement, index) => (
                      <div key={index} className="text-xs text-text-muted leading-relaxed pl-3 border-l border-river/30">
                        &ldquo;{endorsement.quote}&rdquo;
                        <span className="text-text-secondary block mt-0.5">{endorsement.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Media */}
              {member.media && (
                <div className="mb-4">
                  <div className="text-xs text-text-secondary uppercase tracking-widest mb-2">Press Coverage</div>
                  <div className="grid grid-cols-2 gap-1">
                    {member.media.map((mention, index) => (
                      <div key={index} className="text-xs text-text-muted">
                        <span className="text-text-secondary font-medium">{mention.publication}</span> &ndash; {mention.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialties */}
              <div className="mb-4">
                <div className="text-xs text-text-secondary uppercase tracking-widest mb-2">Areas of Expertise</div>
                <div className="flex flex-wrap gap-1">
                  {member.specialties.map((specialty) => (
                    <span key={specialty} className="px-2 py-1 text-xs bg-accent border border-border text-text-muted hover:border-river/40 transition-smooth">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3">
                {member.social.twitter && (
                  <a href={`https://x.com/${member.social.twitter}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-text-secondary hover:text-river-light text-xs transition-smooth">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    @{member.social.twitter}
                  </a>
                )}
                {member.social.linkedin && (
                  <a href={`https://linkedin.com/in/${member.social.linkedin}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-text-secondary hover:text-river-light text-xs transition-smooth">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact note */}
        <div className="text-center mt-8">
          <div className="inline-block px-4 py-2 border border-border bg-primary river-border-top">
            <p className="text-xs text-text-muted">
              <span className="text-white font-medium">Based in Dubai:</span> Available for in-person meetings and regional partnerships across the UAE and MENA region
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
