"use client";

import { useEffect, useRef } from "react";

const logos = [
  { src: "/logos/n8n.png", name: "n8n" },
  { src: "/logos/zapier.png", name: "Zapier" },
  { src: "/logos/make.png", name: "Make" },
  { src: "/logos/ghl.png", name: "GoHighLevel" },
  { src: "/logos/hubspot.png", name: "HubSpot" },
  { src: "/logos/openai.png", name: "OpenAI" },
  { src: "/logos/anthropic.png", name: "Anthropic" },
  { src: "/logos/salesforce.png", name: "Salesforce" },
  { src: "/logos/twilio.png", name: "Twilio" },
  { src: "/logos/sendgrid.png", name: "SendGrid" },
  { src: "/logos/slack.png", name: "Slack" },
  { src: "/logos/elevenlabs.png", name: "ElevenLabs" },
  { src: "/logos/activepieces.png", name: "Activepieces" },
  { src: "/logos/retellai.png", name: "Retell AI" },
];

function LogoList({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul className="partners-logos" aria-hidden={ariaHidden || undefined}>
      {logos.map((l) => (
        <li key={l.name} className="partner-logo">
          <img src={l.src} alt={ariaHidden ? "" : l.name} draggable={false} />
        </li>
      ))}
    </ul>
  );
}

export default function PerksSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("partners-open");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tools-section" id="leistungen">
      <div className="tools-header">
        <h2 className="tools-title">The Tools We <em>Orchestrate</em></h2>
        <p className="tools-sub">
          We connect the platforms that power modern business so your operations run themselves.
        </p>
      </div>

      <section className="partners-content" ref={ref}>
        <div className="partners-showcase-frame">
          <span className="partners-node partners-node-tl" />
          <span className="partners-node partners-node-tr" />
          <span className="partners-node partners-node-bl" />
          <span className="partners-node partners-node-br" />

          <div className="partners-showcase" aria-label="Our partners">
            <p className="partners-label">Our tools:</p>
            <div className="partners-logos-viewport">
              <div className="partners-logos-track">
                <LogoList />
                <LogoList ariaHidden />
                <LogoList ariaHidden />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
