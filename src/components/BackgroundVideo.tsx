"use client";
import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="background-wrapper" aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -2, overflow: 'hidden' }}>
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          width: '100vw', 
          height: '100vh', 
          objectFit: 'cover', 
          transform: 'translate(-50%, -50%) scale(1.05)',
          filter: 'blur(2px)'
        }}
      >
        <source src="/assets/background/background.mp4?v=2047_update" type="video/mp4" />
      </video>
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'radial-gradient(circle at bottom left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          maskImage: 'radial-gradient(circle at bottom left, black 0%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(circle at bottom left, black 0%, transparent 60%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
