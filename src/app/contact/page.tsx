import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="hero-bg-light" />
        </div>
        <div className="page-hero-inner">
          <h1 className="page-hero-title">
            Let&apos;s <em>Talk</em>
          </h1>
          <p className="page-hero-lede">
            Have a project in mind? We&apos;d love to hear about it. Send us a
            brief and we&apos;ll respond within 24 hours with a clear next step.
          </p>
        </div>
      </section>

      {/* CONTACT CHANNELS */}
      <section className="kontakt-channels">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            <a href="mailto:hello@agency47.dev" className="contact-link">
              <div className="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13L2 4" />
                </svg>
              </div>
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">hello@agency47.dev</div>
              </div>
            </a>
            <div className="contact-link">
              <div className="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.74 20.99 20.48 21 20.21 21C10.63 21 3 13.37 3 3.79C3 3.52 3.01 3.26 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.34 8.05 2.81C8.14 3.35 8.29 3.88 8.49 4.38C8.62 4.7 8.54 5.07 8.29 5.31L6.92 6.68C8.38 9.44 10.56 11.62 13.32 13.08L14.69 11.71C14.93 11.46 15.3 11.38 15.62 11.51C16.12 11.71 16.65 11.86 17.19 11.95C17.66 12.03 18 12.44 18 12.92V15.92" />
                </svg>
              </div>
              <div>
                <div className="contact-link-label">Phone</div>
                <div className="contact-link-value">Response within 24h</div>
              </div>
            </div>
            <div className="contact-link">
              <div className="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact-link-label">Location</div>
                <div className="contact-link-value">Remote-first, worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="cta-form-card">
            <div className="cta-form-head">
              <div className="cta-form-title">Start a project</div>
              <div className="cta-form-eyebrow">Fill in the details below and we&apos;ll get back to you</div>
            </div>
            <form className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label className="contact-field-label">
                    Name <span className="contact-field-required">*</span>
                  </label>
                  <input
                    className="contact-field-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-field-label">
                    Email <span className="contact-field-required">*</span>
                  </label>
                  <input
                    className="contact-field-input"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>
              <div className="contact-field">
                <label className="contact-field-label">
                  Company <span className="contact-field-optional">optional</span>
                </label>
                <input
                  className="contact-field-input"
                  placeholder="Company name"
                />
              </div>
              <div className="contact-field">
                <label className="contact-field-label">
                  Budget <span className="contact-field-optional">optional</span>
                </label>
                <select className="contact-field-input">
                  <option value="">Select a range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              <div className="contact-field">
                <label className="contact-field-label">
                  Project <span className="contact-field-required">*</span>
                </label>
                <textarea
                  className="contact-field-input contact-field-textarea"
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                />
              </div>
              <label className="contact-checkbox">
                <input
                  type="checkbox"
                  className="contact-checkbox-input"
                  required
                />
                <span className="contact-checkbox-label">
                  I agree that my data will be processed to handle my request. See
                  our{" "}
                  <Link
                    href="/privacy"
                    style={{ color: "var(--text)", textDecoration: "underline" }}
                  >
                    Privacy Policy
                  </Link>{" "}
                  for details.
                </span>
              </label>
              <button
                type="submit"
                className="shiny-cta"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span className="btn-dot" />
                <span>Send brief&nbsp;&rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section className="kontakt-hours">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="section-head">
            <h2>Working hours</h2>
          </div>
          <div className="kontakt-hours-grid">
            <div>
              <dt>Monday - Friday</dt>
              <dd>9:00 - 18:00</dd>
            </div>
            <div>
              <dt>Response Time</dt>
              <dd>Within 24h</dd>
            </div>
            <div>
              <dt>Timezone</dt>
              <dd>CET (UTC+1)</dd>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
