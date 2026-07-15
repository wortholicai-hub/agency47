import Link from "next/link";

export default function PrivacyPage() {
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
            <h1 className="legal-title">Privacy</h1>
            <p className="legal-lede">
              Your privacy matters to us. This policy explains what data we
              collect, how we use it, and what rights you have.
            </p>
          </div>
        </div>
      </section>

      <div className="legal-shell">
        <aside className="legal-toc">
          <nav className="legal-toc-list">
            <a href="#data-collection">01 &mdash; Data Collection</a>
            <a href="#data-usage">02 &mdash; Data Usage</a>
            <a href="#cookies">03 &mdash; Cookies</a>
            <a href="#third-parties">04 &mdash; Third Parties</a>
            <a href="#your-rights">05 &mdash; Your Rights</a>
            <a href="#contact">06 &mdash; Contact</a>
          </nav>
        </aside>

        <div className="legal-content">
          <div className="legal-section" id="data-collection">
            <div className="legal-section-head">
              <span className="legal-section-num">01</span>
              <h2 className="legal-heading">Data Collection</h2>
            </div>
            <p className="legal-paragraph">
              We collect personal information that you voluntarily provide when
              you contact us, request a quote, or engage our services. This
              may include your name, email address, phone number, company name,
              and project details.
            </p>
            <p className="legal-paragraph">
              We also collect certain technical data automatically when you
              visit our website, including your IP address, browser type,
              operating system, referring URL, and pages visited. This data is
              collected through server logs and analytics tools.
            </p>
          </div>

          <div className="legal-section" id="data-usage">
            <div className="legal-section-head">
              <span className="legal-section-num">02</span>
              <h2 className="legal-heading">Data Usage</h2>
            </div>
            <p className="legal-paragraph">
              We use the information we collect to respond to your enquiries,
              deliver the services you have requested, send project updates,
              and improve our website and offerings. We may also use your
              contact details to send occasional updates about Agency 47,
              provided you have given your consent.
            </p>
            <p className="legal-paragraph">
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes. Data is retained only for as long
              as necessary to fulfil the purposes outlined in this policy or as
              required by law.
            </p>
          </div>

          <div className="legal-section" id="cookies">
            <div className="legal-section-head">
              <span className="legal-section-num">03</span>
              <h2 className="legal-heading">Cookies</h2>
            </div>
            <p className="legal-paragraph">
              Our website uses cookies and similar tracking technologies to
              enhance your browsing experience, analyse site traffic, and
              understand where our visitors come from. Essential cookies are
              required for the site to function correctly and cannot be
              disabled.
            </p>
            <p className="legal-paragraph">
              Analytics cookies (such as those from Google Analytics or
              Plausible) help us understand how visitors interact with our site.
              You can manage your cookie preferences through your browser
              settings or our cookie consent banner. Disabling non-essential
              cookies will not affect core site functionality.
            </p>
          </div>

          <div className="legal-section" id="third-parties">
            <div className="legal-section-head">
              <span className="legal-section-num">04</span>
              <h2 className="legal-heading">Third Parties</h2>
            </div>
            <p className="legal-paragraph">
              We may share your data with trusted third-party service providers
              who assist us in operating our business, such as hosting
              providers, email platforms, and analytics services. These
              providers are contractually obligated to handle your data
              securely and only for the purposes we specify.
            </p>
            <p className="legal-paragraph">
              We may also disclose your information if required by law, court
              order, or governmental regulation, or if we believe disclosure is
              necessary to protect our rights, your safety, or the safety of
              others.
            </p>
          </div>

          <div className="legal-section" id="your-rights">
            <div className="legal-section-head">
              <span className="legal-section-num">05</span>
              <h2 className="legal-heading">Your Rights</h2>
            </div>
            <p className="legal-paragraph">
              Under applicable data protection legislation (including the GDPR
              and UK GDPR), you have the right to access, correct, delete, or
              restrict the processing of your personal data. You also have the
              right to data portability and the right to withdraw consent at
              any time where processing is based on consent.
            </p>
            <p className="legal-paragraph">
              To exercise any of these rights, please contact us using the
              details provided below. We will respond to your request within
              30 days. If you believe your data protection rights have been
              violated, you have the right to lodge a complaint with your local
              supervisory authority.
            </p>
          </div>

          <div className="legal-section" id="contact">
            <div className="legal-section-head">
              <span className="legal-section-num">06</span>
              <h2 className="legal-heading">Contact</h2>
            </div>
            <p className="legal-paragraph">
              If you have any questions about this privacy policy or wish to
              exercise your data rights, please contact us at
              privacy@agency47.dev. We are committed to resolving any concerns
              promptly and transparently.
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
