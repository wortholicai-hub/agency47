"use client";
import Header from "@/components/Header";
import LuminousCard from "@/components/LuminousCard/LuminousCard";

export default function ArchitecturePage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '120px' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 className="section-title" style={{ fontSize: '4rem', textTransform: 'uppercase', color: '#fff' }}>
            System Architecture
          </h1>
          <p style={{ color: '#888', marginTop: '16px', fontSize: '1.2rem', maxWidth: '800px', margin: '16px auto 0' }}>
            The backbone of Agency47. Explore the infrastructure that allows 47 autonomous agents to seamlessly replace an entire human workforce.
          </p>
        </div>

        <section style={{ marginBottom: '10vh' }}>
          <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <LuminousCard 
              title="Snapshot Architecture" 
              description="Pre-built GoHighLevel snapshots configured for full autonomous handover. Deploy the infrastructure of the future in seconds." 
            />
            <LuminousCard 
              title="The Ghost Framework" 
              description="Our exact blueprint for scaling an agency to $150k MRR with zero human employees. A pure system of leverage." 
            />
            <LuminousCard 
              title="Neural Router" 
              description="The central nervous system that directs incoming leads, support tickets, and operational tasks to the correct autonomous agent in milliseconds." 
            />
          </div>
        </section>
      </main>
    </>
  );
}
