"use client";

import Link from "next/link";
import Image from "next/image";

const works = [
  {
    name: "Atlas Commerce",
    year: "2025",
    tag: "AI Agents + CRM",
    href: "/portfolio/atlas-commerce",
    desc: "AI-powered lead qualification and CRM automation that tripled conversion rates and eliminated manual follow-up for an e-commerce brand.",
  },
  {
    name: "Northline Ops",
    year: "2025",
    tag: "Workflow Automation",
    href: "/portfolio/northline-ops",
    desc: "End-to-end operations automation connecting inventory, logistics, and billing into one self-running system for a logistics company.",
  },
  {
    name: "Signal Haus",
    year: "2024",
    tag: "Voice AI + Outreach",
    href: "/portfolio/signal-haus",
    desc: "Voice AI receptionist and automated outreach pipeline that captured 3x more leads and booked meetings on autopilot for a creative agency.",
  },
  {
    name: "Quantum AI",
    year: "2024",
    tag: "AI Pipeline + Analytics",
    href: "/portfolio/quantum-ai",
    desc: "Automated data processing pipelines that replaced 40+ hours of manual analyst work per week with real-time AI-powered insights.",
  },
];

export default function WorksSection() {
  return (
    <section className="works-section" id="work">
      <div className="works-header">
        <div className="works-header-line" />
        <div className="works-header-content">
          <h2 className="works-title">
            Automations that moved<br />the <em>needle</em>
          </h2>
        </div>
        <div className="works-header-line" />
      </div>

      <div className="container">
        <div className="showcase-list">
          {works.map((w, i) => (
            <Link href={w.href} key={w.name} className={`showcase-card ${i % 2 !== 0 ? "showcase-card--reverse" : ""}`}>
              <div className="showcase-card-img">
                <Image
                  src="/47logo.png"
                  alt="Agency 47"
                  width={200}
                  height={200}
                  className="showcase-card-logo"
                />
              </div>
              <div className="showcase-card-info">
                <div className="showcase-card-meta">
                  <span className="showcase-card-tag">{w.tag}</span>
                  <span className="showcase-card-year">{w.year}</span>
                </div>
                <h3 className="showcase-card-name">{w.name}</h3>
                <p className="showcase-card-desc">{w.desc}</p>
                <span className="showcase-card-cta">
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
