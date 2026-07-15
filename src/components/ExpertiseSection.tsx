"use client";

const services = [
  {
    num: "01",
    title: "AI Agents",
    desc: "Custom AI agents that handle leads, qualify prospects, and close deals. Running 24/7 without human intervention.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="service-icon">
        <path d="M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M5 12h14" />
        <path d="M5 12a7 7 0 007 7 7 7 0 007-7" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
    capabilities: [
      { label: "Lead qualification", icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></> },
      { label: "Conversational AI", icon: <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></> },
      { label: "Smart routing", icon: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="M12 7v4l-7 6M12 11l7 6" /></> },
      { label: "Self-improving", icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></> },
    ],
  },
  {
    num: "02",
    title: "Workflows",
    desc: "End-to-end business automation that connects your CRM, email, invoicing, and support into one self-running system.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="service-icon">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" />
      </svg>
    ),
    capabilities: [
      { label: "CRM automation", icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></> },
      { label: "Email sequences", icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></> },
      { label: "Invoice & billing", icon: <><rect x="2" y="3" width="20" height="18" rx="2" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="12" y2="14" /></> },
      { label: "Multi-step logic", icon: <><polyline points="8 7 3 12 8 17" /><polyline points="16 7 21 12 16 17" /><line x1="14" y1="5" x2="10" y2="19" /></> },
    ],
  },
  {
    num: "03",
    title: "Voice AI",
    desc: "AI-powered phone systems that answer, route, and resolve calls. Your always-on receptionist that never drops a lead.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="service-icon">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    capabilities: [
      { label: "Inbound & outbound", icon: <><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.74 20.99 20.48 21 20.21 21C10.63 21 3 13.37 3 3.79C3 3.52 3.01 3.26 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08" /><polyline points="15 2 15 8 21 8" /></> },
      { label: "Natural language", icon: <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="12" y2="13" /></> },
      { label: "Call analytics", icon: <><line x1="3" y1="20" x2="21" y2="20" /><rect x="6" y="13" width="3" height="7" /><rect x="11" y="8" width="3" height="12" /><rect x="16" y="4" width="3" height="16" /></> },
      { label: "CRM sync", icon: <><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" /></> },
    ],
  },
  {
    num: "04",
    title: "Outreach",
    desc: "Automated multi-channel outreach. Email, LinkedIn, and SMS sequences that book meetings on autopilot.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="service-icon">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
    capabilities: [
      { label: "Email campaigns", icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></> },
      { label: "LinkedIn automation", icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
      { label: "SMS sequences", icon: <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></> },
      { label: "A/B split testing", icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="6.5" y1="12" x2="9" y2="12" /><line x1="15" y1="12" x2="17.5" y2="12" /></> },
    ],
  },
];

function TextRoll({ text }: { text: string }) {
  const chars = text.split("");
  return (
    <span className="text-roll" aria-label={text}>
      <span className="text-roll-row">
        {chars.map((ch, i) => (
          <span key={`a-${i}`} className="text-roll-letter" style={{ "--i": i } as React.CSSProperties}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
      <span className="text-roll-row text-roll-clone" aria-hidden="true">
        {chars.map((ch, i) => (
          <span key={`b-${i}`} className="text-roll-letter" style={{ "--i": i } as React.CSSProperties}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function ExpertiseSection() {
  return (
    <section className="section" id="expertise">
      <div className="container">
        <div className="section-head">
          <h2>Four systems. Zero <em>bottlenecks</em></h2>
        </div>

        <div className="expertise-grid">
          {services.map((service) => (
            <article key={service.num} className="service-card">
              <span className="service-card-accent" aria-hidden="true" />
              <span className="service-card-watermark" aria-hidden="true">{service.num}</span>

              <header className="service-head">
                {service.icon}
                <h3 className="service-title">
                  <TextRoll text={service.title} />
                </h3>
              </header>

              <div className="service-body">
                <p className="service-description">{service.desc}</p>
              </div>
              <div className="service-divider" aria-hidden="true" />
              <ul className="service-capabilities">
                {service.capabilities.map((cap) => (
                  <li key={cap.label} className="service-capability">
                    <span className="capability-icon-box">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="capability-icon">
                        {cap.icon}
                      </svg>
                    </span>
                    <span className="capability-label">{cap.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
