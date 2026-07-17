import Link from "next/link";
import PlexusBackground from "@/components/PlexusBackground";
import ProcessPanel from "@/components/ProcessPanel";

const services = [
  {
    num: "01",
    title: "AI Agents",
    desc: "Custom AI agents that handle leads, qualify prospects, answer support tickets, and close deals, running 24/7 without human intervention.",
    tags: ["OpenAI", "Anthropic", "LangChain", "RAG"],
  },
  {
    num: "02",
    title: "Workflow Automation",
    desc: "End-to-end business automation that connects your CRM, email, invoicing, and support into one self-running system that scales with you.",
    tags: ["n8n", "Make", "Zapier", "APIs"],
  },
  {
    num: "03",
    title: "Voice AI",
    desc: "AI-powered phone systems that answer, route, and resolve calls in natural language. Your always-on receptionist that never drops a lead.",
    tags: ["Retell AI", "ElevenLabs", "Twilio", "VAPI"],
  },
  {
    num: "04",
    title: "Outreach & CRM",
    desc: "Automated multi-channel outreach and CRM pipelines. Email, LinkedIn, and SMS sequences that book meetings and nurture leads on autopilot.",
    tags: ["GoHighLevel", "HubSpot", "Salesforce", "SendGrid"],
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      {/* Full-page animated plasma background */}
      <PlexusBackground />

      {/* PAGE HERO */}
      <section className="page-hero services-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-overlay" />

        <div className="page-hero-inner">
          <h1 className="page-hero-title">
            Our <em>Services</em>
          </h1>
          <p className="page-hero-lede">
            AI agents, workflow automation, voice AI, and outreach systems. Everything
            your business needs to run on autopilot, built under one roof.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section services-offer-section" id="services">
        <span className="services-offer-eyebrow">
          What we&apos;re offering
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </span>
        <h2 className="services-offer-title">
          Four systems. One <em>agency</em>
        </h2>
        <div className="services-offer-grid">
          {services.map((service) => (
            <div key={service.num} className="offer-card">
              <div className="offer-card-circle" />
              <div className="offer-card-content">
                <h3 className="offer-card-title">{service.title}</h3>
                <p className="offer-card-desc">{service.desc}</p>
                <div className="offer-card-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <ProcessPanel />

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
