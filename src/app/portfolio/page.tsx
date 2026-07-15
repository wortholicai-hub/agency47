import Link from "next/link";

const projects = [
  {
    title: "Atlas Commerce",
    tag: "Website + Branding",
    desc: "A premium storefront and content engine built for a category leader with a high-consideration buyer journey.",
    year: "2025",
    slug: "atlas-commerce",
  },
  {
    title: "Northline Ops",
    tag: "Software + Automation",
    desc: "A private operating system that turns requests, approvals, and reporting into one measurable workflow.",
    year: "2025",
    slug: "northline-ops",
  },
  {
    title: "Signal Haus",
    tag: "Brand + Website",
    desc: "A full identity refresh and high-performance web build designed around proof, clarity, and conversion.",
    year: "2024",
    slug: "signal-haus",
  },
  {
    title: "Quantum AI",
    tag: "Website + Software",
    desc: "AI-powered analytics platform with real-time dashboards, predictive models, and automated reporting pipelines.",
    year: "2024",
    slug: "quantum-ai",
  },
  {
    title: "Meridian Finance",
    tag: "Mobile App + Branding",
    desc: "Complete brand identity and mobile banking experience for a next-gen fintech targeting underserved markets.",
    year: "2024",
    slug: "meridian-finance",
  },
  {
    title: "Vertex SaaS",
    tag: "Software Platform",
    desc: "Full-stack SaaS platform rebuild with modern architecture, improved UX, and scalable infrastructure.",
    year: "2023",
    slug: "vertex-saas",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-overlay" />
        <div className="page-hero-inner">
          <h1 className="page-hero-title">
            Our <em>Work</em>
          </h1>
          <p className="page-hero-lede">
            Strategy, design, and engineering combined into outcomes our clients
            measure. Here are the projects that moved the needle.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="section" id="portfolio">
        <div className="container">
          <div className="section-head">
            <h2>
              Projects that moved the <em>needle</em>
            </h2>
          </div>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <Link
                href={`/portfolio/${project.slug}`}
                key={project.slug}
                className="portfolio-card"
              >
                <div className="portfolio-card-bg" />
                <div className="portfolio-card-arrow"><svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13L13 5M13 5H6M13 5V12" /></svg></div>
                <div className="portfolio-card-content">
                  <div className="portfolio-card-tag">
                    {project.tag} &mdash; {project.year}
                  </div>
                  <div className="portfolio-card-title">{project.title}</div>
                  <div className="portfolio-card-desc">{project.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <div className="cta-left">
            <h2 className="cta-title">
              Let&apos;s build something <em>remarkable</em>
            </h2>
            <p className="cta-sub">
              Tell us about your project and we&apos;ll respond within 24 hours
              with a clear next step — no sales pitch, just a sharp plan.
            </p>
            <div className="cta-meta">
              <div className="cta-meta-item">
                <span className="cta-meta-label">Response</span>
                <span className="cta-meta-value">Within 24h</span>
              </div>
              <div className="cta-meta-item">
                <span className="cta-meta-label">Format</span>
                <span className="cta-meta-value">Free consultation</span>
              </div>
            </div>
          </div>
          <div className="cta-right">
            <div className="cta-form-card">
              <div className="cta-form-head">
                <div className="cta-form-title">Start a project</div>
                <div className="cta-form-eyebrow">Fill in your details below</div>
              </div>
              <form className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-field-label">
                      Name <span className="contact-field-required">*</span>
                    </label>
                    <input className="contact-field-input" placeholder="Your name" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-field-label">
                      Email <span className="contact-field-required">*</span>
                    </label>
                    <input
                      className="contact-field-input"
                      type="email"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="contact-field">
                  <label className="contact-field-label">
                    Company{" "}
                    <span className="contact-field-optional">optional</span>
                  </label>
                  <input
                    className="contact-field-input"
                    placeholder="Company name"
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-field-label">
                    Project <span className="contact-field-required">*</span>
                  </label>
                  <textarea
                    className="contact-field-input contact-field-textarea"
                    placeholder="Tell us about your project..."
                  />
                </div>
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
        </div>
      </section>
    </main>
  );
}
