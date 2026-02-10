export default function Team() {
  const team = [
    {
      name: "Alex Scott",
      title: "Co-founder",
      role: "UAE/MENA Lead, Solana Foundation",
      bio: "Alex leads Solana Foundation's expansion across the UAE and MENA region, focusing on institutional partnerships with banks, RWA providers, and regulatory bodies. With extensive consulting background, Alex drives strategic initiatives connecting traditional finance with blockchain infrastructure.",
      specialties: ["Institutional Partnerships", "Regulatory Strategy", "Blockchain Infrastructure", "Regional Expansion"],
      social: {
        twitter: "afscott",
        linkedin: "afscott"
      }
    },
    {
      name: "Shweta Scott",
      title: "Co-founder",
      role: "Founder & CEO, UAE.fun",
      bio: "Shweta founded and operates UAE.fun, the premier concierge and immigration support platform for families and executives relocating to the UAE. She brings deep expertise in UAE business landscape, regulatory processes, and lifestyle services.",
      specialties: ["UAE Business Formation", "Immigration & Visas", "Real Estate", "Lifestyle Services"],
      social: {
        linkedin: "shweta-scott"
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-text-muted font-light max-w-2xl mx-auto">
            Experienced founders and operators with deep expertise in venture building, 
            blockchain technology, and the UAE market.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {team.map((member) => (
            <div key={member.name} className="group">
              {/* Name and Title */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-2 group-hover:text-text-muted transition-smooth">
                  {member.name}
                </h3>
                <div className="text-sm text-text-secondary uppercase tracking-wider mb-1">
                  {member.title}
                </div>
                <div className="text-base text-text-muted font-light">
                  {member.role}
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <p className="text-text-muted leading-relaxed text-sm md:text-base">
                  {member.bio}
                </p>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <div className="text-xs text-text-secondary uppercase tracking-widest mb-3">
                  Areas of Expertise
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 text-xs bg-accent border border-border text-text-muted"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {member.social.twitter && (
                  <a
                    href={`https://twitter.com/${member.social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-white text-sm transition-smooth"
                  >
                    @{member.social.twitter}
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${member.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-white text-sm transition-smooth"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact note */}
        <div className="text-center mt-16">
          <div className="inline-block px-6 py-3 border border-border bg-primary">
            <p className="text-sm text-text-muted">
              <span className="text-white font-medium">Based in Dubai:</span> Available for in-person meetings 
              and regional partnerships across the UAE and MENA region
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}