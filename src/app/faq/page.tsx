"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "All" | "General" | "Process" | "Technical" | "Pricing";

interface FaqItem {
  num: string;
  question: string;
  answer: string;
  category: Category;
}

const tabs: { label: Category; count: number }[] = [
  { label: "All", count: 10 },
  { label: "General", count: 3 },
  { label: "Process", count: 3 },
  { label: "Technical", count: 2 },
  { label: "Pricing", count: 2 },
];


const faqs: FaqItem[] = [
  {
    num: "01",
    question: "What does Agency 47 do?",
    answer:
      "We build AI agents, workflow automations, voice AI systems, CRM pipelines, and automated outreach. Most projects combine multiple systems into one unified, self-running operation.",
    category: "General",
  },
  {
    num: "02",
    question: "Do you work with startups or only enterprise?",
    answer:
      "Both. We work with funded startups automating from day one and established companies replacing manual processes with AI. The common thread is a desire to scale without scaling headcount.",
    category: "General",
  },
  {
    num: "03",
    question: "Can you work with our existing systems?",
    answer:
      "Absolutely. We integrate with your existing CRM, tools, and platforms. We don't rip and replace. We connect and automate what you already use.",
    category: "General",
  },
  {
    num: "04",
    question: "What does the process look like?",
    answer:
      "Audit first. We map your operations and find the highest-ROI opportunities. Then we architect, build, test, and deploy. Each phase has clear deliverables. Most systems go live within 2-4 weeks.",
    category: "Process",
  },
  {
    num: "05",
    question: "How long does implementation take?",
    answer:
      "Focused automations take 1 to 2 weeks. Multi-system builds take 3 to 6 weeks. Enterprise deployments are scoped by milestone. We give you a timeline in the first proposal.",
    category: "Process",
  },
  {
    num: "06",
    question: "What about ongoing support after deployment?",
    answer:
      "We offer monitoring and optimization retainers. We track performance, fix edge cases, and continuously improve your automations. Most clients keep us on because automation is never truly finished.",
    category: "Process",
  },
  {
    num: "07",
    question: "What platforms do you integrate with?",
    answer:
      "n8n, Make, Zapier, GoHighLevel, HubSpot, Salesforce, OpenAI, Anthropic, Twilio, ElevenLabs, Retell AI, SendGrid, Slack, and dozens more. If your business runs on it, we can automate it.",
    category: "Technical",
  },
  {
    num: "08",
    question: "Do we own the automations you build?",
    answer:
      "Yes. Every workflow, agent, and integration belongs to you. Full documentation, access credentials, and handover are included so your team can maintain and extend them.",
    category: "Technical",
  },
  {
    num: "09",
    question: "How much does a project cost?",
    answer:
      "Automation projects start at $3,000 for focused workflows. AI agent builds and enterprise integrations range from $8k to $40k+. We provide a detailed quote after understanding your requirements.",
    category: "Pricing",
  },
  {
    num: "10",
    question: "How do we get started?",
    answer:
      "Send us a brief through the contact form. Tell us what processes are eating your team's time. We respond within 24 hours with a free automation audit and a clear plan.",
    category: "Pricing",
  },
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs =
    activeTab === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeTab);

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

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
              Frequently{" "}
            </span>
            <span className="word" style={{ "--i": 1 } as React.CSSProperties}>
              Asked{" "}
            </span>
            <span
              className="word hero-word-em"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              Questions
            </span>
          </h1>
          <p className="hero-sub">
            Everything you need to know before we automate your operations.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          {/* TABS */}
          <div className="faq-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                className={`faq-tab${activeTab === tab.label ? " faq-tab--active" : ""}`}
                onClick={() => {
                  setActiveTab(tab.label);
                  setOpenIndex(null);
                }}
              >
                {tab.label}
                <span className="faq-tab-count">{tab.count}</span>
              </button>
            ))}
          </div>

          {/* FAQ LIST */}
          <div className="faq-list">
            {filteredFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.num}
                  className={`faq-item${isOpen ? " faq-item--open" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => handleToggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-num">{faq.num}</span>
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-question-icon">
                      <span />
                      <span />
                    </span>
                  </button>
                  <div className="faq-answer-wrap">
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{ marginTop: 80, textAlign: "center" }}>
            <p style={{ color: "var(--text-soft)", marginBottom: 24 }}>
              Still have questions? We&apos;re happy to help.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in touch &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-left">
              <h2 className="cta-title">
                Let&apos;s automate your <em>growth</em>
              </h2>
              <p className="cta-sub">
                Tell us about your operations and we&apos;ll respond within 24 hours
                with a free automation audit. No sales pitch, just a clear plan.
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
