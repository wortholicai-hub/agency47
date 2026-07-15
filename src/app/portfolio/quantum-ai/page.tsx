import Link from "next/link";

export default function QuantumAICaseStudy() {
  return (
    <main className="pdetail">
      {/* HERO */}
      <section className="pdetail-hero">
        <div className="pdetail-hero-inner">
          <div className="pdetail-hero-text">
            <Link href="/portfolio" className="pdetail-back">&larr; Back to portfolio</Link>
            <h1 className="pdetail-title">Quantum AI</h1>
            <div className="pdetail-actions">
              <Link href="/contact" className="shiny-cta"><span className="btn-dot" /><span>Start a project&nbsp;&rarr;</span></Link>
              <Link href="#" className="btn-secondary">Visit site&nbsp;&rarr;</Link>
            </div>
          </div>
          <figure className="pdetail-hero-cover">
            <div className="pdetail-hero-cover-tag">
              <span>Website + Software</span> <span>2024</span>
            </div>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Quantum AI Cover</div>
          </figure>
        </div>
      </section>

      {/* FACTS */}
      <section className="pdetail-facts">
        <dl className="pdetail-facts-inner">
          <div className="pdetail-fact"><dt>Client</dt><dd>Quantum AI Labs</dd></div>
          <div className="pdetail-fact"><dt>Industry</dt><dd>AI &middot; Analytics</dd></div>
          <div className="pdetail-fact"><dt>Year</dt><dd>2024</dd></div>
          <div className="pdetail-fact"><dt>Services</dt><dd>Website &middot; Software &middot; Dashboard</dd></div>
          <div className="pdetail-fact"><dt>Location</dt><dd>San Francisco, USA</dd></div>
        </dl>
      </section>

      {/* LEDE */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <p className="pdetail-lede">Quantum AI had powerful analytics under the hood but no way to surface insights to non-technical users. They needed a dashboard that made complex data feel simple.</p>
        </div>
      </section>

      {/* THE VISION */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">The Vision</div>
          <h2 className="pdetail-showcase-title">Making AI accessible to every team member</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{"--i": 0} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Vision Screenshot 1</div>
          </figure>
          <figure className="pdetail-shot" style={{"--i": 1} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Vision Screenshot 2</div>
          </figure>
        </div>
      </section>

      {/* THE BUILD */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">The Build</div>
          <h2 className="pdetail-showcase-title">Real-time dashboards with natural language queries</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{"--i": 0} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Build Screenshot 1</div>
          </figure>
          <figure className="pdetail-shot" style={{"--i": 1} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Build Screenshot 2</div>
          </figure>
        </div>
      </section>

      {/* RESULTS */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">Results</div>
          <h2 className="pdetail-showcase-title">3x faster insights, 40+ hours of manual work eliminated weekly</h2>
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
