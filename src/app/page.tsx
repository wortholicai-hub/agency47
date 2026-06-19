"use client";
import Header from "@/components/Header";
import LuminousCard from "@/components/LuminousCard/LuminousCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        {/* Hero Section */}
        <header className="hero">
          <div className="hero-glass-panel" style={{
            background: 'radial-gradient(circle at center, rgba(10, 10, 20, 0.2) 0%, rgba(0, 0, 0, 0.05) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: 'none',
            padding: '60px 40px',
            borderRadius: '0',
            maxWidth: '1000px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <h1 className="title">
              <span className="title-main">Agency47</span>
            </h1>
            <p className="tagline" id="tagline">Your agency, fully automated by 47 AI agents working together.</p>
            <p className="description" style={{ color: '#fff' }}>
              A unified AI system that runs an entire digital agency autonomously.<br />
              Handles sales, marketing, support, and operations with zero human intervention.
            </p>
          </div>
        </header>

        {/* The 47 Protocols */}
        <section id="protocols" className="protocols-section" style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px', justifyContent: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '3rem', textTransform: 'uppercase' }}>
              The 47 Protocols
            </h2>
          </div>
          <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '32px' }}>
            <LuminousCard 
              title="Autonomous Sales" 
              description="The AI Closer. No sick days. No emotions. Just relentless follow-ups and closed deals directly synced to your pipeline." 
            />
            <LuminousCard 
              title="Operational Core" 
              description="The Fulfillment Matrix. Instant execution of SOPs at lightning speed. Human error eliminated from your delivery mechanisms." 
            />
            <LuminousCard 
              title="Support Hivemind" 
              description="24/7/365 Omnichannel Support. Anticipating and resolving client issues natively before they even realize there is a problem." 
            />
          </div>
        </section>

        {/* Architectural Case Studies (Video Carousel) */}
        <section id="case-studies" className="case-studies-section" style={{ marginTop: '15vh', marginBottom: '15vh' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px', justifyContent: 'center', flexDirection: 'column' }}>
            <h2 className="section-title" style={{ fontSize: '3rem', textTransform: 'uppercase' }}>
              Architectural Case Studies
            </h2>
            <p style={{ color: '#888', marginTop: '16px', fontSize: '1.2rem' }}>Real-world deployments of the 47 Protocol.</p>
          </div>
          
          <div className="carousel-container">
            <div className="carousel-track">
              {/* Card 1 */}
              <div className="video-card">
                <div className="video-placeholder-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div className="video-status-text">System Booting... Waiting for Video Feed.</div>
                <div className="video-card-content">
                  <h4 className="video-card-title">Client: REDACTED</h4>
                  <p className="video-card-meta">Transformation: $15k MRR &rarr; $2.1M MRR</p>
                  <p style={{ color: '#555', marginTop: '12px', fontSize: '0.85rem' }}>Operations Deployed: Full Autonomous Sales Pipeline</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="video-card">
                <div className="video-placeholder-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div className="video-status-text">System Booting... Waiting for Video Feed.</div>
                <div className="video-card-content">
                  <h4 className="video-card-title">Client: CLASSIFIED</h4>
                  <p className="video-card-meta">Transformation: 85h/wk manual &rarr; 0h/wk</p>
                  <p style={{ color: '#555', marginTop: '12px', fontSize: '0.85rem' }}>Operations Deployed: The Fulfillment Matrix</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="video-card">
                <div className="video-placeholder-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div className="video-status-text">System Booting... Waiting for Video Feed.</div>
                <div className="video-card-content">
                  <h4 className="video-card-title">Client: OMEGA PROTOCOL</h4>
                  <p className="video-card-meta">Transformation: 2 Support Staff &rarr; AI Hivemind</p>
                  <p style={{ color: '#555', marginTop: '12px', fontSize: '0.85rem' }}>Operations Deployed: 24/7/365 Omnichannel Support</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="video-card">
                <div className="video-placeholder-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div className="video-status-text">System Booting... Waiting for Video Feed.</div>
                <div className="video-card-content">
                  <h4 className="video-card-title">Client: ALPHA-01</h4>
                  <p className="video-card-meta">Transformation: Zero outbounding &rarr; 5k touchpoints/day</p>
                  <p style={{ color: '#555', marginTop: '12px', fontSize: '0.85rem' }}>Operations Deployed: The Neural Scripts AI Closer</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="video-card">
                <div className="video-placeholder-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div className="video-status-text">System Booting... Waiting for Video Feed.</div>
                <div className="video-card-content">
                  <h4 className="video-card-title">Client: BLACKOUT</h4>
                  <p className="video-card-meta">Transformation: Custom Architecture</p>
                  <p style={{ color: '#555', marginTop: '12px', fontSize: '0.85rem' }}>Operations Deployed: Snapshot Architecture Integration</p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="video-card">
                <div className="video-placeholder-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div className="video-status-text">System Booting... Waiting for Video Feed.</div>
                <div className="video-card-content">
                  <h4 className="video-card-title">Client: GHOST WARE</h4>
                  <p className="video-card-meta">Transformation: $0 &rarr; $150k MRR</p>
                  <p style={{ color: '#555', marginTop: '12px', fontSize: '0.85rem' }}>Operations Deployed: The Ghost Framework</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* The Arsenal */}
        <section id="arsenal" className="arsenal-section" style={{ marginTop: '15vh', marginBottom: '15vh' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px', justifyContent: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '3rem', textTransform: 'uppercase' }}>
              The Arsenal
            </h2>
          </div>
          <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '32px' }}>
            <LuminousCard 
              title="Neural Scripts" 
              description="Copy & paste our exact sales scripts, directly injected into your AI agents' logic cores. Overcome any objection autonomously." 
            />
            <LuminousCard 
              title="Snapshot Architecture" 
              description="Pre-built GoHighLevel snapshots configured for full autonomous handover. Deploy the infrastructure of the future in seconds." 
            />
            <LuminousCard 
              title="The Ghost Framework" 
              description="Our exact blueprint for scaling an agency to $150k MRR with zero human employees. A pure system of leverage." 
              autoPulse={true}
            />
          </div>
        </section>

        {/* Deploy or Die CTA */}
        <section id="deploy" className="cta-section" style={{ marginTop: '15vh', marginBottom: '10vh', padding: '80px 40px', backgroundColor: 'rgba(5, 5, 5, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '0', border: '1px solid #222', textAlign: 'center' }}>
          <h2 style={{ fontSize: '4rem', textTransform: 'uppercase', marginBottom: '40px', color: '#fff', letterSpacing: '2px' }}>Deploy or Die</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: '#aaa', fontSize: '1.3rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '24px' }}>
              Welcome to 2047. The era of the human agency is dead. <br />
              If you are still relying on sick days, emotions, and manual labor, you are already obsolete.
            </p>
            <p style={{ marginBottom: '24px' }}>
              We don't beg for clients. We deploy systems. <br />
              If you're ready to replace your primitive workflow with 47 interconnected AI agents, initiate the deployment below.
            </p>
            <p style={{ marginBottom: '50px', fontWeight: 'bold', color: '#ff4d4d', fontSize: '1.4rem' }}>
              If you're just browsing or need someone to hold your hand... go watch a YouTube video and do not waste our time.
            </p>
            <button style={{ backgroundColor: '#fff', color: '#000', padding: '20px 60px', fontSize: '1.2rem', fontWeight: 'bold', border: 'none', borderRadius: '0', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ccc'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'scale(1)'; }}>
              Initiate Deployment Sequence
            </button>
          </div>
        </section>

      </main>
    </>
  );
}
