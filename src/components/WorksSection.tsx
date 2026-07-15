"use client";

import Link from "next/link";

const works = [
  { num: "01", name: "Atlas Commerce", year: "2025", tag: "Website + Branding", href: "/portfolio/atlas-commerce" },
  { num: "02", name: "Northline Ops", year: "2025", tag: "Software + Automation", href: "/portfolio/northline-ops" },
  { num: "03", name: "Signal Haus", year: "2024", tag: "Brand + Website", href: "/portfolio/signal-haus" },
  { num: "04", name: "Quantum AI", year: "2024", tag: "Website + Software", href: "/portfolio/quantum-ai" },
];

function TextRoll({ text }: { text: string }) {
  const chars = text.split("");

  const rowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexShrink: 0,
    height: "1.1em",
    whiteSpace: "nowrap",
  };

  const letterStyle = (i: number): React.CSSProperties => ({
    display: "inline-block",
    whiteSpace: "pre",
    "--i": i,
  } as React.CSSProperties);

  return (
    <span
      className="text-roll"
      style={{
        display: "inline-flex",
        flexDirection: "column",
        overflow: "hidden",
        height: "1.1em",
        lineHeight: 1,
        verticalAlign: "bottom",
      }}
    >
      <span className="text-roll-row" style={rowStyle} aria-hidden="true">
        {chars.map((ch, i) => (
          <span key={`a-${i}`} className="text-roll-letter" style={letterStyle(i)}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
      <span className="text-roll-row" style={rowStyle}>
        {chars.map((ch, i) => (
          <span key={`b-${i}`} className="text-roll-letter" style={letterStyle(i)}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function WorksSection() {
  return (
    <section className="works-section" id="work">
      <div className="works-header">
        <div className="works-header-line" />
        <div className="works-header-content">
          <h2 className="works-title">
            Projects that moved<br />the <em>needle</em>
          </h2>
        </div>
        <div className="works-header-line" />
      </div>

      <div className="container">
        <div className="work-list">
          {works.map((w) => (
            <div key={w.num} className="work-item">
              <Link href={w.href} className="work-link">
                <span className="work-num">{w.num}</span>
                <span className="work-name">
                  <TextRoll text={w.name} />
                </span>
                <span className="work-end">
                  <span className="work-tag">{w.tag}</span>
                  <span className="work-end-sep" />
                  <span className="work-year">{w.year}</span>
                  <span className="work-end-sep" />
                  <span className="work-arrow">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
