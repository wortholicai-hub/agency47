import Link from "next/link";

const values = [
  {
    num: "01",
    title: "Craftsmanship",
    desc: "Every pixel, every line of code, every interaction is intentional. We don't ship work that's just good enough — we ship work we're proud of.",
  },
  {
    num: "02",
    title: "Speed",
    desc: "We move fast without cutting corners. Most projects launch in 4-6 weeks because we plan sharply and execute without drift.",
  },
  {
    num: "03",
    title: "Transparency",
    desc: "No hidden fees, no vague timelines, no black boxes. You see the work, the progress, and the decisions as they happen.",
  },
  {
    num: "04",
    title: "Partnership",
    desc: "We don't disappear after launch. We stay invested in your success with ongoing optimization, support, and honest feedback.",
  },
];

const stats = [
  { num: "50+", label: "Projects shipped" },
  { num: "6", label: "Years running" },
  { num: "97", label: "Avg. Lighthouse" },
  { num: "4", label: "Disciplines" },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "React Native",
  "Figma",
  "Framer",
  "Vercel",
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
            A digital design studio that handles strategy, identity, engineering,
            and launch under one roof — so the final product feels inevitable.
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
                Agency 47 was founded on a simple observation: most digital projects
                fail not because of bad ideas, but because of fragmented execution.
                Strategy happens in one room, design in another, engineering in a third
                — and by the time it ships, the original vision is unrecognizable.
              </p>
              <p className="about-text">
                We built a studio where every discipline lives under one roof. From the
                first strategy session to the final deployment, one team owns the full
                lifecycle. The result is digital products that feel cohesive, perform
                measurably, and ship on time.
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
              Tools we <em>trust</em>
            </h2>
            <p>
              We choose proven technologies that scale, perform, and let us ship
              with confidence.
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
              Let&apos;s build something <em>remarkable</em>
            </h2>
            <p className="cta-sub" style={{ marginBottom: 0 }}>
              Tell us about your project and we&apos;ll respond within 24 hours
              with a clear next step — no sales pitch, just a sharp plan.
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
