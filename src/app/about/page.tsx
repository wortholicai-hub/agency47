import Link from "next/link";

const values = [
  {
    num: "01",
    title: "Precision",
    desc: "Every workflow, every integration, every AI prompt is engineered with intention. We don't ship automations that break. We ship systems that scale.",
  },
  {
    num: "02",
    title: "Speed",
    desc: "We move fast without cutting corners. Most automation systems go live in 2-4 weeks because we plan sharply and execute without drift.",
  },
  {
    num: "03",
    title: "Transparency",
    desc: "No hidden fees, no vague timelines, no black boxes. You see every workflow, every integration, and every decision as it happens.",
  },
  {
    num: "04",
    title: "Partnership",
    desc: "We don't disappear after deployment. We monitor, optimize, and improve your systems continuously, because automation is never truly finished.",
  },
];

const stats = [
  { num: "40+", label: "Systems deployed" },
  { num: "500k+", label: "Tasks automated" },
  { num: "12x", label: "Avg. ROI" },
  { num: "4", label: "Core systems" },
];

const stack = [
  "n8n",
  "Make",
  "Zapier",
  "GoHighLevel",
  "HubSpot",
  "OpenAI",
  "Anthropic",
  "Twilio",
  "ElevenLabs",
  "Retell AI",
  "Salesforce",
  "SendGrid",
  "Slack",
  "Activepieces",
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="hero-bg-light" />
        </div>
        <div className="page-hero-inner">
          <h1 className="page-hero-title">
            About Agency <em>47</em>
          </h1>
          <p className="page-hero-lede">
            An AI automation agency that handles strategy, integration, deployment,
            and optimization under one roof, so your operations run themselves.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 className="about-name">
                Built for teams who refuse to <em>settle</em>
              </h2>
              <p className="about-text">
                Agency 47 was founded on a simple observation: most businesses are drowning
                in manual processes. Sales teams chase leads by hand, support tickets sit
                unanswered, and operations live in disconnected spreadsheets while
                competitors automate and scale.
              </p>
              <p className="about-text">
                We built an agency where AI, automation, and integration expertise live
                under one roof. From the first operations audit to full-system deployment,
                one team owns the entire lifecycle. The result is businesses that run
                faster, cost less to operate, and scale without adding headcount.
              </p>
            </div>
            <div className="about-visual">
              <div className="about-visual-scan" />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "4rem",
                  fontWeight: 700,
                  opacity: 0.06,
                }}
              >
                47
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>
              What we stand <em>for</em>
            </h2>
          </div>
          <div className="process-grid">
            {values.map((value) => (
              <div key={value.num} className="process-card">
                <div className="process-card-num">{value.num}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-stats" style={{ justifyContent: "center", gap: "4rem", flexWrap: "wrap" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat" style={{ alignItems: "center" }}>
                <strong>{stat.num}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>
              Platforms we <em>orchestrate</em>
            </h2>
            <p>
              We connect the tools that power modern business so your operations
              run themselves.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta-inner" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.5rem" }}>
            <h2 className="cta-title">
              Let&apos;s automate your <em>growth</em>
            </h2>
            <p className="cta-sub" style={{ marginBottom: 0 }}>
              Tell us about your operations and we&apos;ll respond within 24 hours
              with a free automation audit. No sales pitch, just a clear plan.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/contact" className="shiny-cta">
                <span className="btn-dot" />
                <span>Start a project&nbsp;&rarr;</span>
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
