"use client";

import { useRef, useState } from "react";

export default function HeroLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="hero-logo-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      aria-hidden="true"
    >
      {/* Dim base layer — always slightly visible */}
      <img
        src="/47logo.png"
        alt=""
        className="hero-logo-base"
        draggable={false}
      />
      {/* Spotlight layer — only visible where cursor is */}
      <img
        src="/47logo.png"
        alt=""
        className="hero-logo-spotlight"
        draggable={false}
        style={{
          opacity: hovering ? 1 : 0,
          maskImage: `radial-gradient(circle 180px at ${pos.x}% ${pos.y}%, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 180px at ${pos.x}% ${pos.y}%, black 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}
