import Link from "next/link";

export default function TermsPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="legal-hero-bg" />
        <div className="legal-hero-overlay" />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container)", margin: "0 auto" }}>
          <div className="legal-hero-topbar">
            <Link href="/" className="legal-back">&larr; Home</Link>
            <span className="legal-meta">Last updated: July 2026</span>
          </div>
          <div className="legal-head">
            <h1 className="legal-title">Terms</h1>
            <p className="legal-lede">
              The following terms and conditions govern all engagements between
              Agency 47 and its clients. Please read them carefully before
              commissioning any work.
            </p>
          </div>
        </div>
      </section>

      <div className="legal-shell">
        <aside className="legal-toc">
          <nav className="legal-toc-list">
            <a href="#scope">01 &mdash; Scope</a>
            <a href="#services">02 &mdash; Services</a>
            <a href="#pricing">03 &mdash; Pricing &amp; Payment</a>
            <a href="#ip">04 &mdash; Intellectual Property</a>
            <a href="#liability">05 &mdash; Liability</a>
            <a href="#termination">06 &mdash; Termination</a>
          </nav>
        </aside>

        <div className="legal-content">
          <div className="legal-section" id="scope">
            <div className="legal-section-head">
              <span className="legal-section-num">01</span>
              <h2 className="legal-heading">Scope</h2>
            </div>
            <p className="legal-paragraph">
              These terms apply to all services provided by Agency 47,
              including but not limited to web design, web development,
              branding, mobile application development, and digital strategy
              consulting. By engaging Agency 47, the client acknowledges and
              accepts these terms in full.
            </p>
            <p className="legal-paragraph">
              Any deviations from these terms must be agreed upon in writing by
              both parties. Oral agreements or informal communications do not
              constitute binding amendments.
            </p>
          </div>

          <div className="legal-section" id="services">
            <div className="legal-section-head">
              <span className="legal-section-num">02</span>
              <h2 className="legal-heading">Services</h2>
            </div>
            <p className="legal-paragraph">
              Agency 47 will deliver the services outlined in the project
              proposal or statement of work agreed upon by both parties. The
              scope, timeline, and deliverables will be defined in that
              document. Any additional work requested beyond the original scope
              will be quoted separately and requires written approval before
              commencement.
            </p>
            <p className="legal-paragraph">
              We reserve the right to engage qualified subcontractors or
              freelancers to assist in service delivery, provided they operate
              under equivalent confidentiality obligations.
            </p>
          </div>

          <div className="legal-section" id="pricing">
            <div className="legal-section-head">
              <span className="legal-section-num">03</span>
              <h2 className="legal-heading">Pricing &amp; Payment</h2>
            </div>
            <p className="legal-paragraph">
              All pricing is stated in the project proposal and is exclusive of
              applicable taxes unless otherwise noted. A deposit of 50% is
              required before work commences, with the remaining balance due
              upon project completion or as outlined in the payment schedule.
            </p>
            <p className="legal-paragraph">
              Invoices are payable within 14 days of issue. Late payments may
              incur interest at 1.5% per month on the outstanding balance.
              Agency 47 reserves the right to pause work on any project with
              overdue invoices until the account is settled.
            </p>
          </div>

          <div className="legal-section" id="ip">
            <div className="legal-section-head">
              <span className="legal-section-num">04</span>
              <h2 className="legal-heading">Intellectual Property</h2>
            </div>
            <p className="legal-paragraph">
              Upon receipt of full payment, ownership of all custom-created
              deliverables transfers to the client. This includes design files,
              source code, and written content produced specifically for the
              project. Pre-existing frameworks, libraries, and tools used
              during development remain the property of their respective
              owners and are licensed, not sold.
            </p>
            <p className="legal-paragraph">
              Agency 47 retains the right to showcase completed work in its
              portfolio, case studies, and marketing materials unless the
              client requests otherwise in writing.
            </p>
          </div>

          <div className="legal-section" id="liability">
            <div className="legal-section-head">
              <span className="legal-section-num">05</span>
              <h2 className="legal-heading">Liability</h2>
            </div>
            <p className="legal-paragraph">
              Agency 47 will perform all services with reasonable skill and
              care. However, our total liability for any claim arising from a
              project shall not exceed the total fees paid by the client for
              that project. We are not liable for indirect, incidental, or
              consequential damages, including loss of revenue or data.
            </p>
          </div>

          <div className="legal-section" id="termination">
            <div className="legal-section-head">
              <span className="legal-section-num">06</span>
              <h2 className="legal-heading">Termination</h2>
            </div>
            <p className="legal-paragraph">
              Either party may terminate an engagement with 14 days&rsquo;
              written notice. In the event of termination, the client is
              responsible for payment of all work completed up to the
              termination date. Any deposits paid for work not yet commenced
              will be refunded, minus reasonable administrative costs.
            </p>
            <p className="legal-paragraph">
              Agency 47 reserves the right to terminate an engagement
              immediately if the client is in material breach of these terms,
              including non-payment of invoices exceeding 30 days overdue.
            </p>
          </div>

          <div className="legal-footer">
            <span className="legal-meta">Last updated: July 2026</span>
            <Link href="/" className="legal-back">&larr; Back to home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
