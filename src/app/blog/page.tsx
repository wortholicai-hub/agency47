import Link from "next/link";

const posts = [
  {
    title: "AI Automation in 2026: What Actually Works",
    tag: "AI / Automation",
    date: "Jun 2026",
    excerpt:
      "We cut through the noise and share what AI tools, workflows, and strategies are delivering real ROI for businesses right now.",
    href: "/blog/ai-automation-2026",
    gradient: "linear-gradient(135deg, rgba(220,38,38,0.25), rgba(10,10,12,0.7))",
  },
  {
    title: "Voice AI vs Human Agents: The Real Numbers",
    tag: "Voice AI",
    date: "May 2026",
    excerpt:
      "A data-driven comparison of AI voice agents versus traditional call centers: cost, quality, scalability, and when each one makes sense.",
    href: "/blog/nextjs-vs-wordpress",
    gradient: "linear-gradient(135deg, rgba(180,20,20,0.2), rgba(30,20,50,0.7))",
  },
  {
    title: "The Workflow Automation Playbook",
    tag: "Workflows",
    date: "Apr 2026",
    excerpt:
      "The exact framework we use to identify, build, and deploy automations that save our clients 20+ hours per week. Step by step.",
    href: "/blog/performance-optimization",
    gradient: "linear-gradient(135deg, rgba(200,30,30,0.2), rgba(15,15,30,0.7))",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-bg">
          <div className="hero-bg-light" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="word" style={{ "--i": 0 } as React.CSSProperties}>Dispatches{" "}</span>
            <span className="word" style={{ "--i": 1 } as React.CSSProperties}>from{" "}</span>
            <span className="word" style={{ "--i": 2 } as React.CSSProperties}>the{" "}</span>
            <span className="word hero-word-em" style={{ "--i": 3 } as React.CSSProperties}>lab</span>
          </h1>
          <p className="hero-sub">
            Practical thinking on AI, automation, workflows, and building systems
            that scale, straight from the Agency 47 lab.
          </p>
        </div>
      </section>

      {/* BLOG POSTS */}
      <section className="section">
        <div className="container">
          <div className="bl-list">
            {posts.map((post) => (
              <article key={post.title} className="bl-article">
                <div className="bl-article-header">
                  <h2 className="bl-article-title">{post.title}</h2>
                  <div className="bl-article-date">{post.date}</div>
                </div>
                <div
                  className="bl-article-image"
                  style={{ background: post.gradient }}
                >
                  <Link href={post.href} className="bl-article-expand">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="bl-article-body">
                  <div className="bl-article-aside">
                    <strong>{post.tag}</strong>
                  </div>
                  <p className="bl-article-excerpt">{post.excerpt}</p>
                  <Link href={post.href} className="bl-article-btn">
                    Read article
                  </Link>
                </div>
              </article>
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
                    <input className="contact-field-input" type="email" placeholder="you@company.com" />
                  </div>
                </div>
                <div className="contact-field">
                  <label className="contact-field-label">
                    Company <span className="contact-field-optional">optional</span>
                  </label>
                  <input className="contact-field-input" placeholder="Company name" />
                </div>
                <div className="contact-field">
                  <label className="contact-field-label">
                    Project <span className="contact-field-required">*</span>
                  </label>
                  <textarea className="contact-field-input contact-field-textarea" placeholder="Tell us what you want to automate..." />
                </div>
                <button type="submit" className="shiny-cta" style={{ width: "100%", justifyContent: "center" }}>
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
