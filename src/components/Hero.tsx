export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-b from-primary via-secondary/50 to-primary">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Name */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-none mb-2">
            <span className="text-white">RIVER</span>
            <span className="text-text-muted ml-4">VENTURES</span>
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-6"></div>
        </div>

        {/* Tagline */}
        <div className="mb-8 space-y-2">
          <p className="text-lg md:text-xl text-text-muted font-light tracking-wide uppercase">
            Venture Studio & Elite Advisory
          </p>
          <p className="text-sm md:text-base text-text-secondary font-light">
            Based in Dubai, UAE
          </p>
        </div>

        {/* Core Value Proposition */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-text-muted">
            We partner with transformational companies in{" "}
            <span className="text-white">fintech</span> and{" "}
            <span className="text-white">crypto</span>, providing strategic advisory for equity 
            and building the next generation of high-impact ventures.
          </p>
        </div>

        {/* Key Stats/Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-light text-white mb-2">20+</div>
            <div className="text-sm text-text-secondary uppercase tracking-widest">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-light text-white mb-2">UAE</div>
            <div className="text-sm text-text-secondary uppercase tracking-widest">Solana Lead</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-light text-white mb-2">Global</div>
            <div className="text-sm text-text-secondary uppercase tracking-widest">Network</div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendar.app.google/T3ktQUwy2u8CdqEp9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-text-muted transition-smooth border border-white"
          >
            Book Consultation
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 border border-text-muted text-text-muted text-sm font-medium uppercase tracking-wider hover:border-white hover:text-white transition-smooth"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}