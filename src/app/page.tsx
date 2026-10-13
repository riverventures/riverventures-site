import Image from "next/image";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="/" aria-label="River Ventures home"><span className="river-mark" aria-hidden="true">≈</span> RIVER VENTURES</a>
        <nav aria-label="Main navigation"><a href="#brands">Our brands</a><a href="#people">The people</a><a className="contact-nav" href="mailto:alex@riverventures.co">Get in touch <Arrow /></a></nav>
      </header>
      <main id="main">
        <section className="hero wrap">
          <p className="eyebrow">INDEPENDENT THINKING. PRACTICAL PROGRESS.</p>
          <h1>New possibilities.<br /><em>Real-world impact.</em></h1>
          <div className="hero-bottom"><p>River Ventures is home to Argus, Jade and UAE.fun.<br className="desktop-break" /> Practical support for better business, everyday learning<br className="desktop-break" /> and a new life in the UAE.</p><a className="round-link" href="#brands"><span>Meet our brands</span><span className="circle" aria-hidden="true">↓</span></a></div>
          <div className="river-art" aria-hidden="true"><svg viewBox="0 0 1200 160" preserveAspectRatio="none"><path d="M-50 135 C200 -90 320 260 610 100 S1030 -40 1250 50"/><path d="M-50 150 C200 -75 320 275 610 115 S1030 -25 1250 65"/><path d="M-50 165 C200 -60 320 290 610 130 S1030 -10 1250 80"/><path d="M-50 180 C200 -45 320 305 610 145 S1030 5 1250 95"/></svg></div>
          <div className="hero-caption"><span>BASED IN DUBAI</span><span>WORKING BEYOND BORDERS</span></div>
        </section>
        <section id="brands" className="brands-section">
          <div className="wrap"><div className="section-heading"><p className="eyebrow">01 / OUR BRANDS</p><h2>Different perspectives.<br /><em>A shared belief in progress.</em></h2><p>From putting AI to work to finding your feet in the UAE, our brands help people take their next step with confidence.</p></div>
            <div className="brand-grid">
              <article className="brand argus"><div className="brand-top"><span className="eyebrow">FOR BUSINESSES & TEAMS</span><span aria-hidden="true">01</span></div><h3>ARGUS<span className="brand-dot">.</span></h3><p className="brand-headline">Better ways of working.<br />Built around your business.</p><p className="brand-description">Management consulting, AI implementation and practical training. Alex helps leaders find the right opportunities and teams turn them into everyday improvements.</p><ul className="brand-services"><li>Business advisory</li><li>AI workflows</li><li>Team training</li></ul><a className="brand-link" href="https://www.withargus.ai/">Explore Argus <Arrow /></a></article>
              <article className="brand jade"><div className="brand-top"><span className="eyebrow">FOR WORK, BUSINESS & EVERYDAY LIFE</span><span aria-hidden="true">02</span></div><h3>Jade<span className="brand-dot">✳</span></h3><p className="brand-headline">More confidence.<br />More possibility with AI.</p><p className="brand-description">Practical AI education and guidance with Shweta. Approachable workshops, resources and learning experiences for people making AI part of the life they’re building.</p><ul className="brand-services"><li>AI skills</li><li>Workshops</li><li>Everyday applications</li></ul><a className="brand-link" href="https://hijade.ai/">Explore Jade <Arrow /></a></article>
              <article className="brand uae"><div className="brand-top"><span className="eyebrow">FOR LIFE IN THE UAE</span><span aria-hidden="true">03</span></div><h3>UAE.fun</h3><p className="brand-headline">A new chapter.<br />A smoother start.</p><p className="brand-description">Connections to local service providers for people moving to or living in the UAE. Find support with visas, company setup, housing and the everyday details of settling in.</p><ul className="brand-services"><li>Relocation</li><li>Company setup</li><li>Lifestyle support</li></ul><a className="brand-link" href="https://www.uae.fun/">Explore UAE.fun <Arrow /></a></article>
            </div>
          </div>
        </section>
        <section id="people" className="people-section wrap"><div className="section-heading"><p className="eyebrow">02 / THE PEOPLE</p><h2>Experience behind the ideas.<br /><em>People behind the work.</em></h2><p>River Ventures brings together Alex and Shweta Scott. Different perspectives, shared curiosity, and a hands-on approach to helping people move forward.</p></div><div className="people-grid"><article><div className="person-heading"><span className="person-photo"><Image className="alex-photo" src="/images/alex-scott-portrait.jpg" alt="Alex Scott" width={2334} height={3500} sizes="112px" /></span><div><h3>Alex Scott</h3><p>Co-founder, River Ventures · Founder, Argus</p></div></div><p>Alex brings experience across management consulting, product and engineering at Deloitte Digital and Amazon. Through Argus, he works with founders and teams to connect business priorities with practical AI implementation and training.</p><a className="text-link" href="https://www.linkedin.com/in/alexfscott/">Alex on LinkedIn <Arrow /></a></article><article><div className="person-heading"><span className="person-photo"><Image className="shweta-photo" src="/images/shweta-scott-portrait.png" alt="Shweta Scott" width={1449} height={1086} sizes="112px" /></span><div><h3>Shweta Scott</h3><p>Co-founder, River Ventures · Founder, Jade</p></div></div><p>Shweta spent over a decade in product and marketing, including leading brand marketing for Alexa and Echo across Europe at Amazon. Through Jade, she helps people build practical AI skills for work, business and everyday life.</p><a className="text-link" href="https://www.linkedin.com/in/shwetajohri/">Shweta on LinkedIn <Arrow /></a></article></div></section>
        <section className="contact-section"><div className="wrap contact-inner"><div><p className="eyebrow">03 / START A CONVERSATION</p><h2>Good things start<br /><em>with a conversation.</em></h2></div><div><p>For business enquiries, collaborations,<br />or simply to find the right place to start.</p><a href="mailto:alex@riverventures.co">alex@riverventures.co <Arrow /></a></div></div></section>
      </main>
      <footer className="wrap site-footer"><a className="wordmark" href="/">RIVER VENTURES</a><p>© {new Date().getFullYear()} River Ventures FZC LLC</p><span>Dubai, United Arab Emirates</span></footer>
    </>
  );
}
