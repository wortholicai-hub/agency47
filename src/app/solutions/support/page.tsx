"use client";
import Header from "@/components/Header";
import LuminousCard from "@/components/LuminousCard/LuminousCard";

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '120px', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <header className="hero" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 className="title" style={{ fontSize: '4rem', marginBottom: '20px' }}>
            <span className="title-main">The 24/7/365 AI Support Hivemind</span>
          </h1>
          <p className="description" style={{ fontSize: '1.4rem', color: '#aaa', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Resolving 80% of client tickets before a human even reads them. Flawless, instantaneous customer support across every platform.
          </p>
        </header>

        <section className="features-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', marginBottom: '100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', alignItems: 'stretch' }}>
            <LuminousCard 
              title="Instant Resolution" 
              description="Native integrations with Zendesk and Intercom to instantly answer questions across Chat, Email, and Socials."
              autoPulse={true}
            />
            <LuminousCard 
              title="Context-Aware Memory" 
              description="Agents remember past interactions, purchases, and pain points across all platforms to deliver personalized help."
            />
            <LuminousCard 
              title="Seamless Escalation" 
              description="When human intervention is truly needed, the agent hands over full context, summaries, and suggested replies to your team."
            />
          </div>
        </section>

        <section className="cta-section" style={{ textAlign: 'center', padding: '80px 20px', borderTop: '1px solid #222', background: 'radial-gradient(ellipse at top, rgba(255,77,77,0.05) 0%, transparent 70%)' }}>
          <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '30px', color: '#fff', letterSpacing: '2px' }}>Deploy or Die</h2>
          <button style={{ backgroundColor: '#fff', color: '#000', padding: '16px 48px', fontSize: '1.2rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ccc'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'scale(1)'; }}>
            Initialize Support Hivemind
          </button>
        </section>
      </main>
    </>
  );
}
