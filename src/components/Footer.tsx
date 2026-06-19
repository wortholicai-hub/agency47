"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" style={{ 
        marginTop: '15vh', 
        padding: '60px 40px 40px', 
        background: 'radial-gradient(circle at center, rgba(10, 10, 20, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
        <div className="footer-brand">
          <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '20px', fontStyle: 'italic', fontFamily: '"Chakra Petch", sans-serif', fontWeight: 'bold' }}>Agency47</h3>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>The autonomous agency protocol.</p>
        </div>
        <div className="footer-links">
          <h4 style={{ color: '#fff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: '"Chakra Petch", sans-serif' }}>Systems</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#666', lineHeight: '2.2', fontSize: '1.1rem' }}>
            <li><Link href="/protocols" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Autonomous Sales</Link></li>
            <li><Link href="/protocols" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>AI Marketing</Link></li>
            <li><Link href="/protocols" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Operations Core</Link></li>
            <li><Link href="/protocols" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Support Agents</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4 style={{ color: '#fff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: '"Chakra Petch", sans-serif' }}>Network</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#666', lineHeight: '2.2', fontSize: '1.1rem' }}>
            <li><Link href="/architecture" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Architecture</Link></li>
            <li><Link href="/case-studies" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Case Studies</Link></li>
            <li><Link href="/deploy" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Telemetry Data</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1a1a1a', paddingTop: '30px', color: '#555', fontSize: '1rem', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#00ff00', borderRadius: '50%', boxShadow: '0 0 10px #00ff00' }}></div>
          <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontFamily: '"Chakra Petch", sans-serif' }}>All 47 nodes operational</span>
        </div>
          <div>&copy; {new Date().getFullYear()} Agency47. Powered by specialized intelligence.</div>
        </div>
      </div>
    </footer>
  );
}
