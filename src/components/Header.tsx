"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinkStyle = (linkName: string) => ({
    color: hoveredLink === linkName ? '#fff' : '#aaa',
    textTransform: 'uppercase' as const,
    fontFamily: '"Chakra Petch", sans-serif',
    fontWeight: '600',
    letterSpacing: '2px',
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    textShadow: hoveredLink === linkName ? '0 0 10px rgba(255, 77, 77, 0.8)' : 'none',
  });

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '80px',
      zIndex: 100,
      background: 'linear-gradient(180deg, rgba(5,5,5,0.9) 0%, rgba(10,10,15,0.4) 100%)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 77, 77, 0.15)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        
        {/* Logo Section */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }} onMouseEnter={() => setHoveredLink('logo')} onMouseLeave={() => setHoveredLink(null)}>
          <div style={{
            width: '40px',
            height: '40px',
            background: hoveredLink === 'logo' ? 'rgba(255, 77, 77, 0.1)' : 'transparent',
            border: `1px solid ${hoveredLink === 'logo' ? '#ff4d4d' : 'rgba(255, 77, 77, 0.4)'}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: hoveredLink === 'logo' ? '0 0 15px rgba(255, 77, 77, 0.4)' : 'none',
            transition: 'all 0.3s ease'
          }}>
            <span style={{ color: '#ff4d4d', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1.2rem' }}>47</span>
          </div>
          <span style={{ 
            color: '#fff', 
            fontFamily: '"Chakra Petch", sans-serif', 
            fontWeight: 'bold', 
            letterSpacing: '3px',
            fontSize: '1.1rem',
            textTransform: 'uppercase'
          }}>
            Agent System
          </span>
        </Link>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {/* Solutions Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setHoveredLink('solutions')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span style={{
              ...navLinkStyle('solutions'),
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              Solutions
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: hoveredLink === 'solutions' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            
            {/* Dropdown Menu Container */}
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              paddingTop: '20px', /* Invisible bridge to prevent hover loss */
              opacity: hoveredLink === 'solutions' ? 1 : 0,
              visibility: hoveredLink === 'solutions' ? 'visible' : 'hidden',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 1000,
              pointerEvents: hoveredLink === 'solutions' ? 'auto' : 'none'
            }}>
              <div style={{
                background: 'rgba(10, 10, 15, 0.95)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 77, 77, 0.2)',
                borderRadius: '12px',
                padding: '24px',
                minWidth: '640px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 77, 77, 0.15)',
                transform: `translateY(${hoveredLink === 'solutions' ? '0' : '10px'})`,
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                position: 'relative'
              }}>
                {/* Dropdown Indicator Triangle */}
                <div style={{
                  position: 'absolute',
                  top: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(45deg)',
                  width: '12px',
                  height: '12px',
                  background: 'rgba(10, 10, 15, 0.95)',
                  borderLeft: '1px solid rgba(255, 77, 77, 0.2)',
                  borderTop: '1px solid rgba(255, 77, 77, 0.2)',
                }} />

                {[
                  { title: "Voice AI Agents", desc: "Inbound & Outbound AI", path: "/solutions/voice-ai" },
                  { title: "CRM Automations", desc: "GoHighLevel, HubSpot, Salesforce", path: "/solutions/crm" },
                  { title: "Omnichannel Support", desc: "AI Support & Ticketing", path: "/solutions/support" },
                  { title: "Lead Gen & Outreach", desc: "Cold Email & LinkedIn", path: "/solutions/outreach" },
                  { title: "Operational Workflows", desc: "Make & Zapier Integrations", path: "/solutions/workflows" },
                  { title: "Content Systems", desc: "Social Media & Marketing", path: "/solutions/content" },
                ].map((item, idx) => (
                  <Link key={idx} href={item.path} style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    textDecoration: 'none',
                    transition: 'background 0.2s ease, transform 0.2s ease',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    position: 'relative',
                    zIndex: 2,
                    border: '1px solid transparent'
                  }}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.background = 'rgba(255, 77, 77, 0.05)';
                    e.currentTarget.style.border = '1px solid rgba(255, 77, 77, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.border = '1px solid transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    <span style={{ color: '#fff', fontFamily: '"Chakra Petch", sans-serif', fontWeight: 'bold', fontSize: '1.05rem', letterSpacing: '1px' }}>{item.title}</span>
                    <span style={{ color: '#aaa', fontSize: '0.8rem', lineHeight: '1.4' }}>{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link 
            href="/protocols" 
            style={navLinkStyle('protocols')}
            onMouseEnter={() => setHoveredLink('protocols')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            The 47 Agents
          </Link>
          <Link 
            href="/case-studies" 
            style={navLinkStyle('case-studies')}
            onMouseEnter={() => setHoveredLink('case-studies')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Case Studies
          </Link>
          
          {/* Initialize Button */}
          <Link 
            href="/deploy" 
            style={{
              padding: '10px 24px',
              background: hoveredLink === 'deploy' ? '#ff4d4d' : 'transparent',
              border: '1px solid #ff4d4d',
              color: hoveredLink === 'deploy' ? '#000' : '#ff4d4d',
              fontFamily: '"Chakra Petch", sans-serif',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              letterSpacing: '2px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: hoveredLink === 'deploy' ? '0 0 20px rgba(255, 77, 77, 0.5)' : 'none'
            }}
            onMouseEnter={() => setHoveredLink('deploy')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Initialize
          </Link>
        </nav>
      </div>
    </header>
  );
}
