import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Atlas Commerce",
    tag: "AI Agents + CRM",
    desc: "AI-powered lead qualification and CRM automation that tripled conversion rates and eliminated manual follow-up for an e-commerce brand.",
    year: "2025",
    slug: "atlas-commerce",
  },
  {
    title: "Northline Ops",
    tag: "Workflow Automation",
    desc: "End-to-end operations automation that replaced 12,000+ manual tasks per month with intelligent workflows across logistics and approvals.",
    year: "2025",
    slug: "northline-ops",
  },
  {
    title: "Signal Haus",
    tag: "Voice AI + Outreach",
    desc: "AI voice agents and multi-channel outreach system that books 3x more meetings while reducing sales team workload by 60%.",
    year: "2024",
    slug: "signal-haus",
  },
  {
    title: "Quantum AI",
    tag: "AI Pipeline + Analytics",
    desc: "Automated data pipeline with AI-powered analytics that surfaces insights in real-time and eliminates 40+ hours of manual reporting weekly.",
    year: "2024",
    slug: "quantum-ai",
  },
  {
    title: "Meridian Finance",
    tag: "CRM + Onboarding",
    desc: "Automated client onboarding and CRM pipeline that reduced processing time from 5 days to 4 hours for a fintech startup.",
    year: "2024",
    slug: "meridian-finance",
  },
  {
    title: "Vertex SaaS",
    tag: "Workflow + AI Support",
    desc: "AI customer support agent and workflow automation that cut ticket resolution time by 70% and scaled support without new hires.",
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
            AI agents, workflow automation, and intelligent systems combined into
            measurable outcomes. Here are the automations that moved the needle.
          </p>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section className="section" id="portfolio">
        <div className="container">
          <div className="section-head">
            <h2>
              Automations that moved the <em>needle</em>
            </h2>
          </div>

          <div className="showcase-list">
            {projects.map((project, i) => (
              <Link
                href={`/portfolio/${project.slug}`}
                key={project.slug}
                className={`showcase-card ${i % 2 !== 0 ? "showcase-card--reverse" : ""}`}
              >
                <div className="showcase-card-img">
                  <Image
                    src="/47logo.png"
                    alt="Agency 47"
                    width={200}
                    height={200}
                    className="showcase-card-logo"
                  />
                </div>
                <div className="showcase-card-info">
                  <div className="showcase-card-meta">
                    <span className="showcase-card-tag">{project.tag}</span>
                    <span className="showcase-card-year">{project.year}</span>
                  </div>
                  <h3 className="showcase-card-name">{project.title}</h3>
                  <p className="showcase-card-desc">{project.desc}</p>
                  <span className="showcase-card-cta">
                    View Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
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
              Let&apos;s automate your <em>growth</em>
            </h2>
            <p className="cta-sub">
              Tell us about your operations and we&apos;ll respond within 24 hours
              with a free automation audit. No sales pitch, just a clear plan.
            </p>
            <div className="cta-meta">
              <div className="cta-meta-item">
                <span className="cta-meta-label">Response</span>
                <span className="cta-meta-value">Within 24h</span>
              </div>
              <div className="cta-meta-item">
                <span className="cta-meta-label">Format</span>
                <span className="cta-meta-value">Free automation audit</span>
              </div>
            </div>
          </div>
          <div className="cta-right">
            <div className="cta-form-card">
              <div className="cta-form-head">
                <div className="cta-form-title">Get your free audit</div>
                <div className="cta-form-eyebrow">We&apos;ll map your automation opportunities</div>
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
                    placeholder="Tell us what you want to automate..."
                  />
                </div>
                <button
                  type="submit"
                  className="shiny-cta"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span className="btn-dot" />
                  <span>Get free audit&nbsp;&rarr;</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
