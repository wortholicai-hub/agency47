import Link from "next/link";

export default function MeridianFinancePage() {
  return (
    <main className="pdetail">
      <section className="pdetail-hero">
        <div className="pdetail-hero-inner">
          <div className="pdetail-hero-text">
            <Link href="/portfolio" className="pdetail-back">&larr; Back to portfolio</Link>
            <h1 className="pdetail-title">Meridian Finance</h1>
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
              <span>CRM + Onboarding Automation</span> <span>2024</span>
            </div>
            <div style={{ width: "100%", height: "100%", background: "var(--bg-elev)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Meridian Finance Cover</div>
          </figure>
        </div>
      </section>

      <section className="pdetail-facts">
        <dl className="pdetail-facts-inner">
          <div className="pdetail-fact"><dt>Client</dt><dd>Meridian Finance</dd></div>
          <div className="pdetail-fact"><dt>Industry</dt><dd>Fintech &middot; Banking</dd></div>
          <div className="pdetail-fact"><dt>Year</dt><dd>2024</dd></div>
          <div className="pdetail-fact"><dt>Services</dt><dd>CRM Automation &middot; Onboarding &middot; Workflows</dd></div>
          <div className="pdetail-fact"><dt>Location</dt><dd>London, UK</dd></div>
        </dl>
      </section>

      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <p className="pdetail-lede">
            Meridian was onboarding new clients through a painful manual process. Paper forms,
            email chains, and compliance checks that took 5 days per client. They needed automated
            onboarding workflows and a CRM pipeline that handled everything from KYC to account activation.
          </p>
        </div>
      </section>

      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">The Challenge</div>
          <h2 className="pdetail-showcase-title">5-day onboarding bottleneck killing growth</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{ "--i": 0 } as React.CSSProperties}>Market Analysis</figure>
          <figure className="pdetail-shot" style={{ "--i": 1 } as React.CSSProperties}>User Research</figure>
        </div>
      </section>

      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">The Approach</div>
          <h2 className="pdetail-showcase-title">Automated KYC, document processing, and CRM pipeline</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{ "--i": 0 } as React.CSSProperties}>Brand System</figure>
          <figure className="pdetail-shot" style={{ "--i": 1 } as React.CSSProperties}>App Screens</figure>
        </div>
      </section>

      <section className="pdetail-showcase">
        <div className="pdetail-showcase-head">
          <div className="pdetail-eyebrow">Results</div>
          <h2 className="pdetail-showcase-title">Onboarding cut from 5 days to 4 hours, 94 NPS score</h2>
        </div>
        <div className="pdetail-gallery">
          <figure className="pdetail-shot" style={{ "--i": 0 } as React.CSSProperties}>Growth Metrics</figure>
          <figure className="pdetail-shot" style={{ "--i": 1 } as React.CSSProperties}>App Store Reviews</figure>
        </div>
      </section>

      <section className="pdetail-cta">
        <div className="pdetail-cta-inner">
          <div className="pdetail-eyebrow">Next project?</div>
          <h2 className="pdetail-cta-title">Ready for your <em>transformation</em>?</h2>
          <p className="pdetail-cta-text">Tell us about your operations and we&apos;ll respond within 24 hours with a free automation audit.</p>
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
