"use client";
import Header from "@/components/Header";
import LuminousCard from "@/components/LuminousCard/LuminousCard";

export default function ContentPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '120px', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <header className="hero" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 className="title" style={{ fontSize: '4rem', marginBottom: '20px' }}>
            <span className="title-main">Autonomous Content Pipelines</span>
          </h1>
          <p className="description" style={{ fontSize: '1.4rem', color: '#aaa', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Your entire social media footprint, researched, generated, and distributed by a fleet of creative agents.
          </p>
        </header>

        <section className="features-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', marginBottom: '100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', alignItems: 'stretch' }}>
            <LuminousCard 
              title="Trend Analysis" 
              description="Agents continuously monitor industry news and competitor channels to suggest and draft highly engaging, viral topics."
              autoPulse={true}
            />
            <LuminousCard 
              title="Multi-Format Generation" 
              description="Turns a single podcast or blog post into Twitter threads, LinkedIn thought leadership, and short-form video scripts."
            />
            <LuminousCard 
              title="Scheduled Distribution" 
              description="Posts automatically formatted and published across all your chosen platforms at peak audience engagement times."
            />
          </div>
        </section>

        <section className="cta-section" style={{ textAlign: 'center', padding: '80px 20px', borderTop: '1px solid #222', background: 'radial-gradient(ellipse at top, rgba(255,77,77,0.05) 0%, transparent 70%)' }}>
          <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '30px', color: '#fff', letterSpacing: '2px' }}>Deploy or Die</h2>
          <button style={{ backgroundColor: '#fff', color: '#000', padding: '16px 48px', fontSize: '1.2rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ccc'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'scale(1)'; }}>
            Initialize Content Fleet
          </button>
        </section>
      </main>
    </>
  );
}
