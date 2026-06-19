"use client";
import Header from "@/components/Header";

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '120px' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 className="section-title" style={{ fontSize: '4rem', textTransform: 'uppercase', color: '#fff' }}>
            Case Studies
          </h1>
          <p style={{ color: '#888', marginTop: '16px', fontSize: '1.2rem', maxWidth: '800px', margin: '16px auto 0' }}>
            Declassified data from real-world deployments.
          </p>
        </div>

        <section style={{ marginBottom: '10vh', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* Case Study 1 */}
          <div style={{ padding: '40px', background: 'rgba(10, 10, 15, 0.4)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid #222' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', textTransform: 'uppercase', fontFamily: '"Chakra Petch", sans-serif', fontWeight: 'bold', fontStyle: 'italic' }}>Client: REDACTED</h2>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '1.1rem' }}>
                  A traditional lead-gen agency struggling to scale past $15k MRR due to human bottlenecking in their sales team. We deployed the full Autonomous Sales Pipeline.
                </p>
              </div>
              <div style={{ flex: 1, minWidth: '300px', background: 'rgba(255, 77, 77, 0.05)', padding: '20px', borderLeft: '4px solid #ff4d4d' }}>
                <h4 style={{ color: '#ff4d4d', fontSize: '1.2rem', marginBottom: '10px', textTransform: 'uppercase', fontFamily: '"Chakra Petch", sans-serif' }}>Telemetry Data</h4>
                <p style={{ color: '#fff', fontSize: '1.1rem' }}><strong>Before:</strong> $15k MRR (5 Sales Reps)</p>
                <p style={{ color: '#fff', fontSize: '1.1rem' }}><strong>After:</strong> $2.1M MRR (0 Sales Reps)</p>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div style={{ padding: '40px', background: 'rgba(10, 10, 15, 0.4)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid #222' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', textTransform: 'uppercase', fontFamily: '"Chakra Petch", sans-serif', fontWeight: 'bold', fontStyle: 'italic' }}>Client: ALPHA-01</h2>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '1.1rem' }}>
                  An enterprise SaaS company requiring massive outbound volume. Human SDRs were capped at 50 touchpoints per day. We injected the Neural Scripts AI Closer.
                </p>
              </div>
              <div style={{ flex: 1, minWidth: '300px', background: 'rgba(255, 77, 77, 0.05)', padding: '20px', borderLeft: '4px solid #ff4d4d' }}>
                <h4 style={{ color: '#ff4d4d', fontSize: '1.2rem', marginBottom: '10px', textTransform: 'uppercase', fontFamily: '"Chakra Petch", sans-serif' }}>Telemetry Data</h4>
                <p style={{ color: '#fff', fontSize: '1.1rem' }}><strong>Before:</strong> 50 touchpoints/day</p>
                <p style={{ color: '#fff', fontSize: '1.1rem' }}><strong>After:</strong> 5,000 touchpoints/day</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
