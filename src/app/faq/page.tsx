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
    question: "What does Agency 47 build?",
    answer:
      "Premium websites, brand systems, custom software, mobile apps, and AI-enabled automation. Most projects combine two or more disciplines for a cohesive result.",
    category: "General",
  },
  {
    num: "02",
    question: "Do you work with startups or only established companies?",
    answer:
      "Both. We work with funded startups launching their first product and established companies upgrading their digital presence. The common thread is ambition and clear goals.",
    category: "General",
  },
  {
    num: "03",
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We integrate with your designers, developers, or marketing team. We adapt to your tools, repos, and communication style.",
    category: "General",
  },
  {
    num: "04",
    question: "What does the process look like?",
    answer:
      "Strategy first, then design, then build, then launch. Each phase has clear deliverables and review points. You are involved at every stage without micromanaging.",
    category: "Process",
  },
  {
    num: "05",
    question: "How long does a typical project take?",
    answer:
      "Focused websites take 4 to 6 weeks. Brand systems take 6 to 8 weeks. Software and app builds are scoped by milestone. We give you a timeline in the first proposal.",
    category: "Process",
  },
  {
    num: "06",
    question: "What about ongoing support after launch?",
    answer:
      "We offer retainer packages for ongoing development, updates, and optimization. Many clients keep us on for iterative improvements after launch.",
    category: "Process",
  },
  {
    num: "07",
    question: "What technologies do you use?",
    answer:
      "Next.js, React, TypeScript, and Tailwind for web. React Native for mobile. Node.js, Python, and PostgreSQL for backends. We choose the stack based on your specific needs.",
    category: "Technical",
  },
  {
    num: "08",
    question: "Do we get the source code?",
    answer:
      "Yes. Full source code, deployment documentation, and repository access are included. You own everything we build.",
    category: "Technical",
  },
  {
    num: "09",
    question: "How much does a project cost?",
    answer:
      "Projects typically range from $8k to $50k+ depending on scope. We provide a detailed quote after understanding your requirements in the initial consultation.",
    category: "Pricing",
  },
  {
    num: "10",
    question: "How do we get started?",
    answer:
      "Send us a brief through the contact form. Include your goals, timeline, and any reference material. We respond within 24 hours with a clear next step.",
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
            Everything you need to know before we start working together.
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
                Let&apos;s build something <em>remarkable</em>
              </h2>
              <p className="cta-sub">
                Tell us about your project and we&apos;ll respond within 24 hours
                with a clear next step — no sales pitch, just a sharp plan.
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
