export default function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-6 bg-gradient-to-b from-primary via-secondary/50 to-primary">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Name */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-none mb-2">
            <span className="text-white">RIVER</span>
            <span className="text-text-muted ml-4">VENTURES</span>
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-4"></div>
        </div>

        {/* Tagline */}
        <div className="mb-6 space-y-1">
          <p className="text-base md:text-lg text-text-muted font-light tracking-wide uppercase">
            Venture Studio & Elite Advisory
          </p>
          <p className="text-xs md:text-sm text-text-secondary font-light">
            Based in Dubai, UAE
          </p>
        </div>

        {/* Core Value Proposition */}
        <div className="mb-8 max-w-3xl mx-auto">
          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-text-muted">
            We partner with transformational companies in{" "}
            <span className="text-white">fintech</span> and{" "}
            <span className="text-white">crypto</span>, providing strategic advisory for equity 
            and building the next generation of high-impact ventures.
          </p>
        </div>

        {/* Key Stats/Highlights */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-lg md:text-2xl font-light text-white mb-1">20+</div>
            <div className="text-xs text-text-secondary uppercase tracking-widest">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-lg md:text-2xl font-light text-white mb-1">UAE</div>
            <div className="text-xs text-text-secondary uppercase tracking-widest">Solana Lead</div>
          </div>
          <div className="text-center">
            <div className="text-lg md:text-2xl font-light text-white mb-1">Global</div>
            <div className="text-xs text-text-secondary uppercase tracking-widest">Network</div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://calendar.app.google/T3ktQUwy2u8CdqEp9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-black text-xs font-medium uppercase tracking-wider hover:bg-text-muted transition-smooth border border-white"
          >
            Book Consultation
          </a>
          <a
            href="#portfolio"
            className="px-6 py-2 border border-text-muted text-text-muted text-xs font-medium uppercase tracking-wider hover:border-white hover:text-white transition-smooth"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}