import Link from "next/link";

const posts = [
  {
    title: "AI Automation in 2026: What Actually Works",
    tag: "AI / Automation",
    date: "Jun 2026",
    excerpt:
      "We cut through the noise and share what AI tools, workflows, and strategies are delivering real ROI for businesses right now.",
    href: "/blog/ai-automation-2026",
  },
  {
    title: "Voice AI vs Human Agents: The Real Numbers",
    tag: "Voice AI",
    date: "May 2026",
    excerpt:
      "A data-driven comparison of AI voice agents versus traditional call centers — cost, quality, scalability, and when each one makes sense.",
    href: "/blog/nextjs-vs-wordpress",
  },
  {
    title: "The Workflow Automation Playbook",
    tag: "Workflows",
    date: "Apr 2026",
    excerpt:
      "The exact framework we use to identify, build, and deploy automations that save our clients 20+ hours per week. Step by step.",
    href: "/blog/performance-optimization",
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
            <span className="word" style={{ "--i": 0 } as React.CSSProperties}>
              Dispatches{" "}
            </span>
            <span className="word" style={{ "--i": 1 } as React.CSSProperties}>
              from{" "}
            </span>
            <span className="word" style={{ "--i": 2 } as React.CSSProperties}>
              the{" "}
            </span>
            <span
              className="word hero-word-em"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              lab
            </span>
          </h1>
          <p className="hero-sub">
            Practical thinking on AI, automation, workflows, and building systems
            that scale — straight from the Agency 47 lab.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <Link
                href={post.href}
                key={post.title}
                className="blog-card"
              >
                <div className="blog-card-image">
                  <div
                    style={{ background: "var(--bg-elev)", width: "100%", height: "100%" }}
                  />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-tag">{post.tag}</span>
                    <span className="blog-card-date">{post.date}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-arrow"><svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13L13 5M13 5H6M13 5V12" /></svg></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-left">
              <h2 className="cta-title">
                Let&apos;s automate your <em>growth</em>
              </h2>
              <p className="cta-sub">
                Tell us about your operations and we&apos;ll respond within 24 hours
                with a free automation audit — no sales pitch, just a clear plan.
              </p>
            </div>
            <div className="cta-right">
              <Link href="/contact" className="btn-primary">
                Start a project &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
