import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Websites",
    desc: "High-performance marketing sites, landing pages, and web applications built with Next.js, React, and TypeScript.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    num: "02",
    title: "Branding",
    desc: "Visual identity systems that make your brand unmistakable — from logo to guidelines to every touchpoint in between.",
    tags: ["Logo", "Identity", "Guidelines", "Typography"],
  },
  {
    num: "03",
    title: "Software",
    desc: "Custom platforms, internal tools, and automation systems engineered for scale and built to solve real problems.",
    tags: ["Node.js", "Python", "APIs", "Automation"],
  },
  {
    num: "04",
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications that feel native, perform fast, and ship on both iOS and Android.",
    tags: ["React Native", "iOS", "Android", "Flutter"],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Strategy",
    desc: "We define goals, map user journeys, and build a roadmap before a single pixel moves.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Visual identity, wireframes, and high-fidelity prototypes — tested and refined.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Clean, performant code. Every component built for speed, accessibility, and scale.",
  },
  {
    num: "04",
    title: "Launch & Care",
    desc: "Deployment, monitoring, and ongoing optimization. We stay with you post-launch.",
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
            Websites, branding, software, and mobile apps — everything your brand
            needs to compete at the highest level, built under one roof.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <h2>
              Four disciplines. One <em>studio</em>
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
              Four steps. Zero <em>guesswork</em>
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
