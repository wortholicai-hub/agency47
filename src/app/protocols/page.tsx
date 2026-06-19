"use client";
import Header from "@/components/Header";
import LuminousCard from "@/components/LuminousCard/LuminousCard";

export default function ProtocolsPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '120px' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 className="section-title" style={{ fontSize: '4rem', textTransform: 'uppercase', color: '#fff' }}>
            The 47 Protocols
          </h1>
          <p style={{ color: '#888', marginTop: '16px', fontSize: '1.2rem', maxWidth: '800px', margin: '16px auto 0' }}>
            Browse the complete directory of our autonomous agents.
          </p>
        </div>

        <section style={{ marginBottom: '10vh' }}>
          <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <LuminousCard 
              title="Autonomous Sales" 
              description="The AI Closer. No sick days. No emotions. Just relentless follow-ups and closed deals directly synced to your pipeline." 
            />
            <LuminousCard 
              title="AI Marketing" 
              description="Hyper-targeted ad generation, autonomous budget optimization, and omni-channel distribution." 
            />
            <LuminousCard 
              title="Operations Core" 
              description="The Fulfillment Matrix. Instant execution of SOPs at lightning speed. Human error eliminated from your delivery mechanisms." 
            />
            <LuminousCard 
              title="Support Hivemind" 
              description="24/7/365 Omnichannel Support. Anticipating and resolving client issues natively before they even realize there is a problem." 
            />
            <LuminousCard 
              title="Data Analyst" 
              description="Real-time telemetry and predictive analytics. The system learns and optimizes itself without human intervention." 
            />
            <LuminousCard 
              title="Content Engine" 
              description="Autonomous creation and scheduling of SEO-optimized blogs, social media posts, and technical documentation." 
            />
          </div>
        </section>
      </main>
    </>
  );
}
