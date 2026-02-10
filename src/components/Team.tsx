export default function Team() {
  const team = [
    {
      name: "Alex Scott",
      title: "Co-founder",
      role: "UAE/MENA Lead, Solana Foundation",
      bio: "Former Amazon Product and Engineering roles in Luxembourg and London. Management Consultant at Deloitte Digital serving financial services clients in London. Founded a crypto on/off ramp company in UAE and raised venture funding. Currently UAE/MENA Regional Lead at Solana Foundation.",
      specialties: ["Institutional Partnerships", "Regulatory Strategy", "Blockchain Infrastructure", "Regional Expansion"],
      social: {
        twitter: "afscott",
        linkedin: "afscott"
      }
    },
    {
      name: "Shweta Scott", 
      title: "Co-founder",
      role: "CEO, UAE.fun",
      bio: "Yale educated. Former Amazon Product Marketing for the Alexa business. CEO of UAE.fun, providing concierge and UAE immigration support for families and executives. Deep expertise in UAE business formation and lifestyle services.",
      specialties: ["UAE Business Formation", "Immigration & Visas", "Product Marketing", "Lifestyle Services"],
      social: {
        linkedin: "shwetascott"
      }
    }
  ];

  return (
    <section className="py-8 md:py-12 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-extralight tracking-tight text-white mb-3">
            Leadership Team
          </h2>
          <p className="text-base text-text-muted font-light max-w-2xl mx-auto">
            Experienced founders and operators with deep expertise in venture building, 
            blockchain technology, and the UAE market.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              {/* Name and Title */}
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-light text-white mb-1 group-hover:text-text-muted transition-smooth">
                  {member.name}
                </h3>
                <div className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                  {member.title}
                </div>
                <div className="text-sm text-text-muted font-light">
                  {member.role}
                </div>
              </div>

              {/* Bio */}
              <div className="mb-4">
                <p className="text-text-muted leading-relaxed text-xs md:text-sm">
                  {member.bio}
                </p>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <div className="text-xs text-text-secondary uppercase tracking-widest mb-2">
                  Areas of Expertise
                </div>
                <div className="flex flex-wrap gap-1">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 text-xs bg-accent border border-border text-text-muted"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {member.social.twitter && (
                  <a
                    href={`https://x.com/${member.social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-text-secondary hover:text-white text-xs transition-smooth"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    @{member.social.twitter}
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${member.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-text-secondary hover:text-white text-xs transition-smooth"
                  >
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
          <div className="inline-block px-4 py-2 border border-border bg-primary">
            <p className="text-xs text-text-muted">
              <span className="text-white font-medium">Based in Dubai:</span> Available for in-person meetings 
              and regional partnerships across the UAE and MENA region
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}