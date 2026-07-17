"use client";

import { useEffect } from "react";

const reviews = {
  col1: [
    { initials: "SW", name: "Si Wong", quote: "The team showed a deep understanding of our brand and turned a complex campaign into something focused, polished, and effective. The communication throughout the project was excellent." },
    { initials: "TN", name: "Tom Nicholls", quote: "Much more than just automation. The final system feels premium, fast, and completely aligned with our business goals." },
    { initials: "BL", name: "Bunchi Ltd", quote: "Reliable, responsive, and always willing to go beyond the original scope. They have become an invaluable technology partner for us." },
    { initials: "JS", name: "Jacqueline Smith", quote: "Amazing support exactly when we needed it most." },
  ],
  col2: [
    { initials: "AK", name: "Aiden Khan", quote: "They made the entire process simple. Every detail was considered, and the finished product was noticeably stronger than our original direction." },
    { initials: "EL", name: "Emma Lewis", quote: "From strategy through execution, the team was proactive and extremely organized. Our new workflow removed hours of repetitive work and gave us much better visibility across the business." },
    { initials: "RM", name: "Ryan Moore", quote: "Fast delivery, excellent communication, and no unnecessary complexity." },
    { initials: "NP", name: "Nora Patel", quote: "Their technical knowledge is exceptional, but what stood out most was how clearly they explained every decision." },
  ],
  col3: [
    { initials: "DM", name: "Daniel Morris", quote: "A smooth and professional experience from day one." },
    { initials: "HL", name: "Hannah Lee", quote: "They understood exactly what our customers needed and translated it into a digital experience that feels effortless. Engagement improved almost immediately after launch." },
    { initials: "OT", name: "Oliver Taylor", quote: "Thoughtful design, strong engineering, and a team that genuinely cared about the outcome." },
    { initials: "SF", name: "Sophie Foster", quote: "They took ownership, identified issues we had missed, and delivered a solution that is easier for our team to manage." },
  ],
};

function ReviewCard({ initials, name, quote }: { initials: string; name: string; quote: string }) {
  return (
    <article className="rv-card">
      <div className="rv-card-top">
        <div className="rv-avatar">{initials}</div>
        <div className="rv-person">
          <p className="rv-name">{name}</p>
          <div className="rv-stars">★★★★★</div>
        </div>
      </div>
      <p className="rv-quote">&ldquo;{quote}&rdquo;</p>
    </article>
  );
}

function Column({ items, direction }: { items: typeof reviews.col1; direction: "up" | "down" }) {
  const doubled = [...items, ...items];
  return (
    <div className={`rv-column rv-move-${direction}`}>
      <div className="rv-track">
        {doubled.map((r, i) => (
          <ReviewCard key={`${r.initials}-${i}`} {...r} />
        ))}
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".rv-card");
    function onMove(this: HTMLElement, e: PointerEvent) {
      const rect = this.getBoundingClientRect();
      this.style.setProperty("--x", `${e.clientX - rect.left}px`);
      this.style.setProperty("--y", `${e.clientY - rect.top}px`);
    }
    cards.forEach((card) => {
      (card as HTMLElement).addEventListener("pointermove", onMove as EventListener);
    });
    return () => {
      cards.forEach((card) => {
        (card as HTMLElement).removeEventListener("pointermove", onMove as EventListener);
      });
    };
  }, []);

  return (
    <section className="rv-section" id="reviews">
      <header className="rv-heading">
        <h2 className="rv-title">What our clients say about us</h2>
        <p className="rv-sub">
          Real feedback from teams that trusted us to design, automate, and scale their digital operations.
        </p>
        <div className="rv-rating">
          <span className="rv-stars-big">★★★★★</span>
          <strong>5.0</strong>
          <span className="rv-review-count">· 47 reviews</span>
        </div>
      </header>

      <div className="rv-grid">
        <Column items={reviews.col1} direction="up" />
        <Column items={reviews.col2} direction="down" />
        <Column items={reviews.col3} direction="up" />
      </div>
    </section>
  );
}
