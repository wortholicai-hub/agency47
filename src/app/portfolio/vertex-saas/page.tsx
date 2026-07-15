import Link from "next/link";

export default function VertexSaaSPage() {
  return (
    <main className="pdetail">
      <section className="pdetail-hero">
        <div className="pdetail-hero-inner">
          <div className="pdetail-hero-text">
            <Link href="/portfolio" className="pdetail-back">&larr; Back to portfolio</Link>
            <h1 className="pdetail-title">Vertex SaaS</h1>
            <div className="pdetail-actions">
              <Link href="/contact" className="shiny-cta">
                <span className="btn-dot" />
                <span>Start a project&nbsp;&rarr;</span>
              </Link>
              <Link href="#" className="btn-secondary">Visit site&nbsp;&rarr;</Link>
            </div>
          </div>
          <figure className="pdetail-hero-cover">
            <div className="pdetail-hero-cover-tag">
              <span>Software + Design</span> <span>2023</span>
            </div>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Vertex SaaS Cover</div>
          </figure>
        </div>
      </section>

      <section className="pdetail-facts">
        <dl className="pdetail-facts-inner">
          <div className="pdetail-fact"><dt>Client</dt><dd>Vertex Platform</dd></div>
          <div className="pdetail-fact"><dt>Industry</dt><dd>SaaS &middot; Technology</dd></div>
          <div className="pdetail-fact"><dt>Year</dt><dd>2023</dd></div>
          <div className="pdetail-fact"><dt>Services</dt><dd>Software &middot; Design &middot; DevOps</dd></div>
          <div className="pdetail-fact"><dt>Location</dt><dd>Austin, USA</dd></div>
        </dl>
      </section>

      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <p className="pdetail-lede">
            Vertex had a functional product with paying customers but was built on a legacy
            stack that made iteration painfully slow. Churn was rising because competitors
            were shipping features faster. The UX had accumulated years of technical debt.
          </p>
        </div>
      </section>

      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">The Challenge</div>
          <h2 className="pdetail-showcase-title">Legacy stack killing velocity</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{ "--i": 0 } as React.CSSProperties}>Platform Architecture</figure>
          <figure className="pdetail-shot" style={{ "--i": 1 } as React.CSSProperties}>Tech Debt Analysis</figure>
        </div>
      </section>

      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">The Approach</div>
          <h2 className="pdetail-showcase-title">Phased rebuild, zero downtime</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{ "--i": 0 } as React.CSSProperties}>New Architecture</figure>
          <figure className="pdetail-shot" style={{ "--i": 1 } as React.CSSProperties}>UX Before/After</figure>
        </div>
      </section>

      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">Results</div>
          <h2 className="pdetail-showcase-title">2.1x user retention, 4x faster feature shipping</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{ "--i": 0 } as React.CSSProperties}>Retention Metrics</figure>
          <figure className="pdetail-shot" style={{ "--i": 1 } as React.CSSProperties}>Deployment Pipeline</figure>
        </div>
      </section>

      <section className="pdetail-cta">
        <div className="pdetail-cta-inner">
          <div className="pdetail-eyebrow">Next project?</div>
          <h2 className="pdetail-cta-title">Ready for your <em>transformation</em>?</h2>
          <p className="pdetail-cta-text">Tell us about your project and we&apos;ll respond within 24 hours.</p>
          <div className="pdetail-cta-actions">
            <Link href="/contact" className="shiny-cta">
              <span className="btn-dot" />
              <span>Start a project&nbsp;&rarr;</span>
            </Link>
            <Link href="/portfolio" className="btn-secondary">More work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
