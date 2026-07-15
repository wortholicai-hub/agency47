import Link from "next/link";

export default function AtlasCommerceCaseStudy() {
  return (
    <main className="pdetail">
      {/* HERO */}
      <section className="pdetail-hero">
        <div className="pdetail-hero-inner">
          <div className="pdetail-hero-text">
            <Link href="/portfolio" className="pdetail-back">&larr; Back to portfolio</Link>
            <h1 className="pdetail-title">Atlas Commerce</h1>
            <div className="pdetail-actions">
              <Link href="/contact" className="shiny-cta"><span className="btn-dot" /><span>Start a project&nbsp;&rarr;</span></Link>
              <Link href="#" className="btn-secondary">Visit site&nbsp;&rarr;</Link>
            </div>
          </div>
          <figure className="pdetail-hero-cover">
            <div className="pdetail-hero-cover-tag">
              <span>Website + Branding</span> <span>2025</span>
            </div>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Atlas Commerce Cover</div>
          </figure>
        </div>
      </section>

      {/* FACTS */}
      <section className="pdetail-facts">
        <dl className="pdetail-facts-inner">
          <div className="pdetail-fact"><dt>Client</dt><dd>Atlas Commerce</dd></div>
          <div className="pdetail-fact"><dt>Industry</dt><dd>E-Commerce &middot; Retail</dd></div>
          <div className="pdetail-fact"><dt>Year</dt><dd>2025</dd></div>
          <div className="pdetail-fact"><dt>Services</dt><dd>Website &middot; Branding &middot; SEO</dd></div>
          <div className="pdetail-fact"><dt>Location</dt><dd>New York, USA</dd></div>
        </dl>
      </section>

      {/* LEDE */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <p className="pdetail-lede">Atlas Commerce needed a complete digital overhaul — their legacy storefront was losing conversions and their brand no longer reflected their market position. We rebuilt everything from the ground up.</p>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">The Challenge</div>
          <h2 className="pdetail-showcase-title">A dated storefront that was hemorrhaging conversions</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{"--i": 0} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Challenge Screenshot 1</div>
          </figure>
          <figure className="pdetail-shot" style={{"--i": 1} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Challenge Screenshot 2</div>
          </figure>
        </div>
      </section>

      {/* THE APPROACH */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">The Approach</div>
          <h2 className="pdetail-showcase-title">Full-stack rebuild with conversion-first design</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{"--i": 0} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Approach Screenshot 1</div>
          </figure>
          <figure className="pdetail-shot" style={{"--i": 1} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Approach Screenshot 2</div>
          </figure>
        </div>
      </section>

      {/* RESULTS */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">Results</div>
          <h2 className="pdetail-showcase-title">38% checkout lift, load time 4.8s to 0.9s</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{"--i": 0} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Results Screenshot 1</div>
          </figure>
          <figure className="pdetail-shot" style={{"--i": 1} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Results Screenshot 2</div>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="pdetail-cta">
        <div className="pdetail-cta-inner">
          <div className="pdetail-eyebrow">Next project?</div>
          <h2 className="pdetail-cta-title">Ready for your <em>transformation</em>?</h2>
          <p className="pdetail-cta-text">Tell us about your project and we&apos;ll respond within 24 hours.</p>
          <div className="pdetail-cta-actions">
            <Link href="/contact" className="shiny-cta"><span className="btn-dot" /><span>Start a project&nbsp;&rarr;</span></Link>
            <Link href="/portfolio" className="btn-secondary">More work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
