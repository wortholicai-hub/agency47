import Link from "next/link";

export default function SignalHausCaseStudy() {
  return (
    <main className="pdetail">
      {/* HERO */}
      <section className="pdetail-hero">
        <div className="pdetail-hero-inner">
          <div className="pdetail-hero-text">
            <Link href="/portfolio" className="pdetail-back">&larr; Back to portfolio</Link>
            <h1 className="pdetail-title">Signal Haus</h1>
            <div className="pdetail-actions">
              <Link href="/contact" className="shiny-cta"><span className="btn-dot" /><span>Start a project&nbsp;&rarr;</span></Link>
              <Link href="#" className="btn-secondary">Visit site&nbsp;&rarr;</Link>
            </div>
          </div>
          <figure className="pdetail-hero-cover">
            <div className="pdetail-hero-cover-tag">
              <span>Voice AI + Outreach</span> <span>2024</span>
            </div>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Signal Haus Cover</div>
          </figure>
        </div>
      </section>

      {/* FACTS */}
      <section className="pdetail-facts">
        <dl className="pdetail-facts-inner">
          <div className="pdetail-fact"><dt>Client</dt><dd>Signal Haus Media</dd></div>
          <div className="pdetail-fact"><dt>Industry</dt><dd>Media &middot; Marketing</dd></div>
          <div className="pdetail-fact"><dt>Year</dt><dd>2024</dd></div>
          <div className="pdetail-fact"><dt>Services</dt><dd>Voice AI &middot; Outreach &middot; CRM</dd></div>
          <div className="pdetail-fact"><dt>Location</dt><dd>Berlin, Germany</dd></div>
        </dl>
      </section>

      {/* LEDE */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <p className="pdetail-lede">Signal Haus was spending $15k/month on cold callers and manual outreach with declining results. They needed AI voice agents and automated sequences to scale pipeline without scaling headcount.</p>
        </div>
      </section>

      {/* BRAND SPRINT */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">Voice AI</div>
          <h2 className="pdetail-showcase-title">AI voice agents handling inbound and outbound calls 24/7</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{"--i": 0} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Brand Sprint Screenshot 1</div>
          </figure>
          <figure className="pdetail-shot" style={{"--i": 1} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Brand Sprint Screenshot 2</div>
          </figure>
        </div>
      </section>

      {/* WEB BUILD */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">Outreach System</div>
          <h2 className="pdetail-showcase-title">Multi-channel sequences across email, LinkedIn, and SMS</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{"--i": 0} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Web Build Screenshot 1</div>
          </figure>
          <figure className="pdetail-shot" style={{"--i": 1} as any}>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Web Build Screenshot 2</div>
          </figure>
        </div>
      </section>

      {/* RESULTS */}
      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">Results</div>
          <h2 className="pdetail-showcase-title">3x more meetings booked, 60% reduction in sales team workload</h2>
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
          <p className="pdetail-cta-text">Tell us about your operations and we&apos;ll respond within 24 hours with a free automation audit.</p>
          <div className="pdetail-cta-actions">
            <Link href="/contact" className="shiny-cta"><span className="btn-dot" /><span>Start a project&nbsp;&rarr;</span></Link>
            <Link href="/portfolio" className="btn-secondary">More work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
