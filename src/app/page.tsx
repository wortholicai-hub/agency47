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
    q: "What does Agency 47 build?",
    a: "Premium websites, brands, software, mobile apps, and AI-enabled systems. Most projects combine two or more of those areas.",
  },
  {
    num: "02",
    q: "How long does a project take?",
    a: "Focused websites usually take 4 to 6 weeks. Brand systems take 6 to 8 weeks. Product and software builds are scoped by milestone.",
  },
  {
    num: "03",
    q: "What technologies do you use?",
    a: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion for web. React Native for mobile. Custom APIs and automation with Node.js and Python.",
  },
  {
    num: "04",
    q: "Do we get the source code?",
    a: "Yes. The build moves into your GitHub with deployment notes and full access once the project is complete.",
  },
  {
    num: "05",
    q: "What does pricing look like?",
    a: "Projects start at $5,000 for focused websites. Larger builds are scoped by milestone. We give you a clear estimate before any work begins.",
  },
  {
    num: "06",
    q: "How do we get started?",
    a: "Fill in the contact form or email us. We respond within 24 hours with a clear next step — no sales pitch, just a sharp plan.",
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
            From AI agents to fully orchestrated business workflows, we transform
            fragmented operations into self-improving systems built for modern growth.
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
                One studio. Four disciplines. Zero <em>fragmentation</em>
              </h2>
              <p className="about-text">
                Agency 47 is a digital design studio that handles strategy, visual identity,
                engineering, and launch under one roof. We exist to build digital products
                that feel inevitable — sharp, fast, and conversion-focused.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <strong>50+</strong>
                  <span>Projects shipped</span>
                </div>
                <div className="about-stat">
                  <strong>6</strong>
                  <span>Years running</span>
                </div>
                <div className="about-stat">
                  <strong>97</strong>
                  <span>Avg. score</span>
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
            <h2 className="cta-title">Let&apos;s build something <em>remarkable</em></h2>
            <p className="cta-sub">
              Tell us about your project and we&apos;ll respond within 24 hours with a clear
              next step — no sales pitch, just a sharp plan.
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
                    placeholder="Tell us about your project..."
                    suppressHydrationWarning
                  />
                </div>
                <button type="submit" className="shiny-cta" style={{ width: "100%", justifyContent: "center" }} suppressHydrationWarning>
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
