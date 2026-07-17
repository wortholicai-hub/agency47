"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Audit",
    desc: "We map your current operations, identify bottlenecks, and find the highest-ROI automation opportunities.",
    detail:
      "Our team dives deep into your existing workflows, tools, and team structure. We interview stakeholders, analyze data flows, and surface the repetitive tasks eating your team's time, then rank every opportunity by potential ROI.",
  },
  {
    num: "02",
    title: "Architect",
    desc: "We design the system: which tools to connect, what logic to build, and how data flows between them.",
    detail:
      "With a clear map of your operations, we blueprint the entire automation stack. Tool selection, API integrations, decision logic, error handling, and fallback flows, all planned before a single line is written.",
  },
  {
    num: "03",
    title: "Build & Test",
    desc: "We build every workflow, agent, and integration. Rigorous testing with your real data before anything goes live.",
    detail:
      "We develop each workflow, AI agent, and integration in isolated sprints. Every component is stress-tested with your actual data and edge cases. Nothing ships until it handles the unexpected gracefully.",
  },
  {
    num: "04",
    title: "Deploy & Optimize",
    desc: "Go live with monitoring dashboards. We track performance, fix edge cases, and continuously improve your system.",
    detail:
      "Launch day is just the beginning. We set up real-time dashboards, monitor every automation run, and continuously tune performance. Your system gets smarter and faster over time.",
  },
];

function CharReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Kill previous trigger if text changed
    if (triggerRef.current) {
      triggerRef.current.kill();
      triggerRef.current = null;
    }

    const chars = el.querySelectorAll(".str-char");
    if (chars.length === 0) return;

    const tween = gsap.fromTo(
      chars,
      { color: "#a6a49f" },
      {
        color: "#ffffff",
        stagger: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 30%",
          scrub: true,
        },
      }
    );

    triggerRef.current = tween.scrollTrigger || null;

    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
    };
  }, [text]);

  const chars = text.split("").map((char, i) => (
    <span key={i} className="str-char">
      {char}
    </span>
  ));

  return (
    <p ref={ref} className={className}>
      {chars}
    </p>
  );
}

export default function ProcessPanel() {
  const [active, setActive] = useState(0);

  return (
    <section className="section process-panel-section" id="process">
      <div className="process-panel-header">
        <span className="services-offer-eyebrow">
          Our process
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
        <h2 className="services-offer-title">
          Four phases. Zero <em>guesswork</em>
        </h2>
      </div>

      <div className="process-panel">
        {/* Left: active detail */}
        <div className="process-panel-detail">
          <h3 className="process-panel-detail-title" key={`title-${active}`}>
            {steps[active].title}
          </h3>
          <div
            className="process-panel-detail-line"
            key={`line-${active}`}
          />
          <CharReveal
            key={`detail-${active}`}
            text={steps[active].detail}
            className="process-panel-detail-desc"
          />
        </div>

        {/* Right: card grid */}
        <div className="process-panel-cards">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`process-tile ${i === active ? "process-tile--active" : ""}`}
              onMouseEnter={() => setActive(i)}
            >
              <span className="process-tile-bar">
                <span className="process-tile-dot process-tile-dot--red" />
                <span className="process-tile-dot process-tile-dot--orange" />
                <span className="process-tile-dot process-tile-dot--green" />
              </span>
              <div className="process-tile-body">
                <h4 className="process-tile-title">{step.title}</h4>
                <CharReveal text={step.desc} className="process-tile-desc" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
