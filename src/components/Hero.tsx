export default function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-6 relative overflow-hidden bg-primary">
      {/* Subtle river flow background */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-100 400 C200 350, 400 450, 700 380 C1000 310, 1200 420, 1540 370" stroke="#2a5a8c" strokeWidth="2" />
          <path d="M-100 500 C200 460, 500 540, 800 480 C1100 420, 1300 510, 1540 470" stroke="#1a3a5c" strokeWidth="1.5" />
          <path d="M-100 300 C300 270, 600 340, 900 290 C1100 260, 1300 320, 1540 280" stroke="#1a3a5c" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo/Name */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-none mb-2">
            <span className="text-white">RIVER</span>
            <span className="text-text-muted ml-4">VENTURES</span>
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-river-light to-transparent mx-auto mt-4"></div>
        </div>

        {/* Tagline */}
        <div className="mb-6 space-y-1">
          <p className="text-base md:text-lg text-text-muted font-light tracking-wide uppercase">
            Venture Studio & Strategic Advisory
          </p>
          <p className="text-xs md:text-sm text-text-secondary font-light">
            Based in Dubai, UAE
          </p>
        </div>

        {/* Core Value Proposition */}
        <div className="mb-8 max-w-3xl mx-auto">
          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-text-muted">
            We partner with transformational companies in{" "}
            <span className="text-white">AI</span> and{" "}
            <span className="text-white">emerging technologies</span>, providing strategic advisory 
            and building the next generation of high-impact ventures.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 max-w-sm mx-auto">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "Global", label: "Network" },
          ].map((stat) => (
            <div key={stat.label} className="text-center relative">
              <div className="text-lg md:text-2xl font-light text-white mb-1">{stat.value}</div>
              <div className="text-xs text-text-secondary uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Thin river accent between stats and CTA */}
        <div className="river-line w-48 mx-auto mb-8 opacity-50"></div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://calendar.app.google/mgBfrMcfG4tmNvraA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-black text-xs font-medium uppercase tracking-wider hover:bg-text-muted transition-smooth border border-white"
          >
            Book Consultation
          </a>
          <a
            href="#portfolio"
            className="px-6 py-2 border border-border text-text-muted text-xs font-medium uppercase tracking-wider hover:border-river-light hover:text-white transition-smooth"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
