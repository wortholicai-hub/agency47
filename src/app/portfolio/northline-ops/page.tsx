import Link from "next/link";

export default function NorthlineOpsCaseStudy() {
  return (
    <main className="pdetail">
      {/* HERO */}
      <section className="pdetail-hero">
        <div className="pdetail-hero-inner">
          <div className="pdetail-hero-text">
            <Link href="/portfolio" className="pdetail-back">&larr; Back to portfolio</Link>
            <h1 className="pdetail-title">Northline Ops</h1>
            <div className="pdetail-actions">
              <Link href="/contact" className="shiny-cta"><span className="btn-dot" /><span>Start a project&nbsp;&rarr;</span></Link>
              <Link href="#" className="btn-secondary">Visit site&nbsp;&rarr;</Link>
            </div>
          </div>
          <figure className="pdetail-hero-cover">
            <div className="pdetail-hero-cover-tag">
              <span>Software + Automation</span> <span>2025</span>
            </div>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Northline Ops Cover</div>
          </figure>
        </div>
      </section>

      {/* FACTS */}
      <section className="pdetail-facts">
        <dl className="pdetail-facts-inner">
          <div className="pdetail-fact"><dt>Client</dt><dd>Northline Logistics</dd></div>
          <div className="pdetail-fact"><dt>Industry</dt><dd>Logistics &middot; Operations</dd></div>
          <div className="pdetail-fact"><dt>Year</dt><dd>2025</dd></div>
          <div className="pdetail-fact"><dt>Services</dt><dd>Software &middot; Automation &middot; API</dd></div>
          <div className="pdetail-fact"><dt>Location</dt><dd>Chicago, USA</dd></div>
        </dl>
      </section>

      {/* LEDE */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <p className="pdetail-lede">Northline was drowning in manual workflows. Approvals took days, data lived in spreadsheets, and the operations team spent more time on admin than actual logistics.</p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">The Problem</div>
          <h2 className="pdetail-showcase-title">Manual processes killing operational efficiency</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{"--i": 0} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Problem Screenshot 1</div>
          </figure>
          <figure className="pdetail-shot" style={{"--i": 1} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Problem Screenshot 2</div>
          </figure>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">The Solution</div>
          <h2 className="pdetail-showcase-title">Custom operating system with intelligent automation</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{"--i": 0} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Solution Screenshot 1</div>
          </figure>
          <figure className="pdetail-shot" style={{"--i": 1} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Solution Screenshot 2</div>
          </figure>
        </div>
      </section>

      {/* RESULTS */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">Results</div>
          <h2 className="pdetail-showcase-title">12k+ tasks automated, approval cycles from 3 days to 4 hours</h2>
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
