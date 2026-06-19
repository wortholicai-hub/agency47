"use client";
import Header from "@/components/Header";
import LuminousCard from "@/components/LuminousCard/LuminousCard";

export default function VoiceAIPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '120px', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <header className="hero" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 className="title" style={{ fontSize: '4rem', marginBottom: '20px' }}>
            <span className="title-main">The AI Caller That Never Sleeps</span>
          </h1>
          <p className="description" style={{ fontSize: '1.4rem', color: '#aaa', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Deploy human-like, conversational AI agents capable of handling thousands of concurrent inbound and outbound calls. No scripts required—just pure LLM intelligence.
          </p>
        </header>

        <section className="features-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', marginBottom: '100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', alignItems: 'stretch' }}>
            <LuminousCard 
              title="Lead Qualification" 
              description="Calls and qualifies leads instantly the moment they hit your CRM. Uncovers budget, timeline, and authority autonomously."
              autoPulse={true}
            />
            <LuminousCard 
              title="Customer Support" 
              description="Resolves complex queries over the phone by querying your internal knowledge base in real-time. Zero hold times."
            />
            <LuminousCard 
              title="Appointment Setting" 
              description="Books meetings directly onto your sales team's calendars without any human touch. Integrates directly with your scheduling software."
            />
          </div>
        </section>

        <section className="cta-section" style={{ textAlign: 'center', padding: '80px 20px', borderTop: '1px solid #222', background: 'radial-gradient(ellipse at top, rgba(255,77,77,0.05) 0%, transparent 70%)' }}>
          <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '30px', color: '#fff', letterSpacing: '2px' }}>Deploy or Die</h2>
          <button style={{ backgroundColor: '#fff', color: '#000', padding: '16px 48px', fontSize: '1.2rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ccc'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'scale(1)'; }}>
            Initialize Voice Protocol
          </button>
        </section>
      </main>
    </>
  );
}
