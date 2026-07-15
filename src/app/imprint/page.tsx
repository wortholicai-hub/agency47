import Link from "next/link";

export default function ImprintPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="legal-hero-bg" />
        <div className="legal-hero-overlay" />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container)", margin: "0 auto" }}>
          <div className="legal-hero-topbar">
            <Link href="/" className="legal-back">&larr; Home</Link>
            <span className="legal-meta">Last updated: July 2026</span>
          </div>
          <div className="legal-head">
            <h1 className="legal-title">Imprint</h1>
            <p className="legal-lede">
              Legal disclosure in accordance with applicable regulatory
              requirements.
            </p>
          </div>
        </div>
      </section>

      <div className="legal-shell">
        <aside className="legal-toc">
          <nav className="legal-toc-list">
            <a href="#company-info">01 &mdash; Company Information</a>
            <a href="#disclaimer">02 &mdash; Disclaimer</a>
          </nav>
        </aside>

        <div className="legal-content">
          <div className="legal-section" id="company-info">
            <div className="legal-section-head">
              <span className="legal-section-num">01</span>
              <h2 className="legal-heading">Company Information</h2>
            </div>
            <dl className="legal-dl">
              <dt>Company</dt>
              <dd>Agency 47</dd>

              <dt>Representative</dt>
              <dd>Managing Director, Agency 47</dd>

              <dt>Email</dt>
              <dd>hello@agency47.dev</dd>

              <dt>Website</dt>
              <dd>https://agency47.dev</dd>

              <dt>VAT ID</dt>
              <dd>DE&nbsp;000&nbsp;000&nbsp;000</dd>
            </dl>
          </div>

          <div className="legal-section" id="disclaimer">
            <div className="legal-section-head">
              <span className="legal-section-num">02</span>
              <h2 className="legal-heading">Disclaimer &amp; Liability</h2>
            </div>
            <p className="legal-paragraph">
              The contents of this website have been created with the utmost
              care. However, Agency 47 cannot guarantee the accuracy,
              completeness, or timeliness of the information provided. As a
              service provider, we are responsible for our own content on these
              pages in accordance with applicable laws. We are not obligated to
              monitor transmitted or stored third-party information or to
              investigate circumstances that indicate illegal activity.
            </p>
            <p className="legal-paragraph">
              This website contains links to external third-party websites over
              whose content we have no control. We therefore cannot accept any
              liability for the content of linked sites. The respective
              provider or operator of the linked pages is always responsible
              for their content. If we become aware of any legal
              infringements, we will remove such links immediately.
            </p>
          </div>

          <div className="legal-footer">
            <span className="legal-meta">Last updated: July 2026</span>
            <Link href="/" className="legal-back">&larr; Back to home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
