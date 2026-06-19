"use client";
import Header from "@/components/Header";

export default function DeployPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '120px' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 className="section-title" style={{ fontSize: '4rem', textTransform: 'uppercase', color: '#ff4d4d', textShadow: '0 0 20px rgba(255, 77, 77, 0.5)' }}>
            Deployment Console
          </h1>
          <p style={{ color: '#888', marginTop: '16px', fontSize: '1.2rem', maxWidth: '800px', margin: '16px auto 0' }}>
            Warning: Initiating this sequence will permanently alter your operational architecture.
          </p>
        </div>

        <section style={{ marginBottom: '10vh', display: 'flex', justifyContent: 'center' }}>
          <form style={{ width: '100%', maxWidth: '600px', background: 'rgba(10, 10, 15, 0.6)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid #333', padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }} onSubmit={(e) => e.preventDefault()}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#fff', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: '"Chakra Petch", sans-serif', fontWeight: 'bold', fontStyle: 'italic' }}>Access Code / Agency Name</label>
              <input type="text" style={{ padding: '16px', background: 'rgba(0,0,0,0.5)', border: '1px solid #444', color: '#fff', outline: 'none', fontSize: '1.1rem', fontFamily: 'monospace' }} placeholder="Enter designation..." />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#fff', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: '"Chakra Petch", sans-serif', fontWeight: 'bold', fontStyle: 'italic' }}>Current MRR Target</label>
              <select style={{ padding: '16px', background: 'rgba(0,0,0,0.5)', border: '1px solid #444', color: '#fff', outline: 'none', fontSize: '1.1rem', fontFamily: 'monospace' }}>
                <option value="10k">&lt; $10k / mo</option>
                <option value="50k">$10k - $50k / mo</option>
                <option value="150k">$50k - $150k / mo</option>
                <option value="scale">Scale to Infinity</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#fff', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: '"Chakra Petch", sans-serif', fontWeight: 'bold', fontStyle: 'italic' }}>Primary Bottleneck</label>
              <textarea rows={4} style={{ padding: '16px', background: 'rgba(0,0,0,0.5)', border: '1px solid #444', color: '#fff', outline: 'none', fontSize: '1.1rem', fontFamily: 'monospace', resize: 'none' }} placeholder="Identify human failure points..."></textarea>
            </div>

            <button type="submit" style={{ marginTop: '20px', backgroundColor: '#ff4d4d', color: '#000', padding: '20px', fontSize: '1.2rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.3s ease', boxShadow: '0 0 20px rgba(255, 77, 77, 0.4)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.6)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#ff4d4d'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 77, 77, 0.4)'; }}>
              Initialize Deployment
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
