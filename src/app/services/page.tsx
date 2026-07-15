import Link from "next/link";

const services = [
  {
    num: "01",
    title: "AI Agents",
    desc: "Custom AI agents that handle leads, qualify prospects, answer support tickets, and close deals — running 24/7 without human intervention.",
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

const processSteps = [
  {
    num: "01",
    title: "Audit",
    desc: "We map your current operations, identify bottlenecks, and find the highest-ROI automation opportunities.",
  },
  {
    num: "02",
    title: "Architect",
    desc: "We design the system — which tools to connect, what logic to build, and how data flows between them.",
  },
  {
    num: "03",
    title: "Build & Test",
    desc: "We build every workflow, agent, and integration. Rigorous testing with your real data before anything goes live.",
  },
  {
    num: "04",
    title: "Deploy & Optimize",
    desc: "Go live with monitoring dashboards. We track performance, fix edge cases, and continuously improve your system.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-overlay" />
        <div className="page-hero-inner">
          <h1 className="page-hero-title">
            Our <em>Services</em>
          </h1>
          <p className="page-hero-lede">
            AI agents, workflow automation, voice AI, and outreach systems — everything
            your business needs to run on autopilot, built under one roof.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <h2>
              Four systems. One <em>agency</em>
            </h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div key={service.num} className="service-card">
                <div className="service-card-number">{service.num}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <div className="service-card-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="container">
          <div className="section-head">
            <h2>
              Four phases. Zero <em>guesswork</em>
            </h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="process-card">
                <div className="process-card-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
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
              with a free automation audit — no sales pitch, just a clear plan.
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
                    placeholder="Tell us what you want to automate..."
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
