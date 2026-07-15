import Link from "next/link";
import WorksSection from "@/components/WorksSection";
import RotatingWord from "@/components/RotatingWord";
import HeroLogo from "@/components/HeroLogo";
import HeroStats from "@/components/HeroStats";
import PerksSection from "@/components/PerksSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import CrystalModelLoader from "@/components/CrystalModelLoader";

const faqs = [
  {
    num: "01",
    q: "What does Agency 47 do?",
    a: "We build AI agents, workflow automations, voice AI systems, and automated outreach pipelines. Most projects combine multiple systems into one unified operation.",
  },
  {
    num: "02",
    q: "How long does implementation take?",
    a: "Most automation systems go live within 2 to 4 weeks. Complex multi-system builds are scoped by milestone with clear deliverables at each stage.",
  },
  {
    num: "03",
    q: "What platforms do you integrate with?",
    a: "n8n, Make, Zapier, GoHighLevel, HubSpot, Salesforce, OpenAI, Anthropic, Twilio, ElevenLabs, Retell AI, and dozens more. We connect whatever your business runs on.",
  },
  {
    num: "04",
    q: "Do we own the automations you build?",
    a: "Yes. Every workflow, agent, and integration we build belongs to you. Full documentation and access are included so your team can maintain and extend them.",
  },
  {
    num: "05",
    q: "What does pricing look like?",
    a: "Automation projects start at $3,000 for focused workflows. Larger AI agent builds and enterprise integrations are scoped by milestone. We give you a clear estimate before any work begins.",
  },
  {
    num: "06",
    q: "How do we get started?",
    a: "Fill in the contact form or email us. We respond within 24 hours with a free automation audit — no sales pitch, just a clear plan to eliminate your bottlenecks.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-light" />
          <div className="hero-bg-light-2" />
        </div>
        <HeroLogo />

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="word" style={{ "--i": 0, paddingLeft: "1.5em" } as React.CSSProperties}>Engineering{" "}</span>
            <RotatingWord />
            <br />
            <span className="word" style={{ "--i": 2 } as React.CSSProperties}>Companies</span>
          </h1>

          <p className="hero-sub">
            Your team is drowning in manual tasks. We build AI agents, voice systems,
            and workflow automations that run your operations 24/7 — so you scale
            without scaling headcount.
          </p>

          <HeroStats />
        </div>
      </section>

      {/* WORKS */}
      <WorksSection />

      {/* EXPERTISE */}
      <ExpertiseSection />

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 className="about-name">
                One team. Full-stack automation. Zero <em>fragmentation</em>
              </h2>
              <p className="about-text">
                Agency 47 is an AI automation studio that handles strategy, integration,
                deployment, and optimization under one roof. We exist to turn fragmented
                operations into self-running systems — so your team focuses on growth, not busywork.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <strong>40+</strong>
                  <span>Systems deployed</span>
                </div>
                <div className="about-stat">
                  <strong>500k</strong>
                  <span>Tasks automated</span>
                </div>
                <div className="about-stat">
                  <strong>12x</strong>
                  <span>Avg. ROI</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <CrystalModelLoader />
              <div className="crystal-glow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <PerksSection />

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head" style={{ textAlign: "center" }}>
            <h2>Answers before the first call</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: 800, margin: "0 auto" }}>
            {faqs.map((faq) => (
              <details key={faq.q} className="home-faq-item">
                <summary className="home-faq-summary">
                  <span className="home-faq-num">{faq.num}</span>
                  <span className="home-faq-question">{faq.q}</span>
                  <span className="home-faq-icon">
                    <span />
                    <span />
                  </span>
                </summary>
                <div className="home-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <div className="cta-left">
            <h2 className="cta-title">Let&apos;s automate your <em>growth</em></h2>
            <p className="cta-sub">
              Tell us about your operations and we&apos;ll respond within 24 hours with a free
              automation audit — no sales pitch, just a clear plan to eliminate bottlenecks.
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
                    <label className="contact-field-label">Name <span className="contact-field-required">*</span></label>
                    <input className="contact-field-input" placeholder="Your name" suppressHydrationWarning />
                  </div>
                  <div className="contact-field">
                    <label className="contact-field-label">Email <span className="contact-field-required">*</span></label>
                    <input className="contact-field-input" type="email" placeholder="you@company.com" suppressHydrationWarning />
                  </div>
                </div>
                <div className="contact-field">
                  <label className="contact-field-label">Company <span className="contact-field-optional">optional</span></label>
                  <input className="contact-field-input" placeholder="Company name" suppressHydrationWarning />
                </div>
                <div className="contact-field">
                  <label className="contact-field-label">Project <span className="contact-field-required">*</span></label>
                  <textarea
                    className="contact-field-input contact-field-textarea"
                    placeholder="Tell us what you want to automate..."
                    suppressHydrationWarning
                  />
                </div>
                <button type="submit" className="shiny-cta" style={{ width: "100%", justifyContent: "center" }} suppressHydrationWarning>
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
