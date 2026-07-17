"use client";

import { useEffect, useRef } from "react";

// Simplex-inspired noise (fast 2D gradient noise)
function createNoise() {
  const perm = new Uint8Array(512);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

  const grad = [
    [1, 1], [-1, 1], [1, -1], [-1, -1],
    [1, 0], [-1, 0], [0, 1], [0, -1],
  ];

  return function noise2D(x: number, y: number): number {
    const xi = Math.floor(x) & 255;
    const yi = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);

    const u = xf * xf * (3 - 2 * xf);
    const v = yf * yf * (3 - 2 * yf);

    const g00 = grad[perm[perm[xi] + yi] & 7];
    const g10 = grad[perm[perm[xi + 1] + yi] & 7];
    const g01 = grad[perm[perm[xi] + yi + 1] & 7];
    const g11 = grad[perm[perm[xi + 1] + yi + 1] & 7];

    const n00 = g00[0] * xf + g00[1] * yf;
    const n10 = g10[0] * (xf - 1) + g10[1] * yf;
    const n01 = g01[0] * xf + g01[1] * (yf - 1);
    const n11 = g11[0] * (xf - 1) + g11[1] * (yf - 1);

    const nx0 = n00 + u * (n10 - n00);
    const nx1 = n01 + u * (n11 - n01);
    return nx0 + v * (nx1 - nx0);
  };
}

export default function PlexusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const noise = createNoise();
    let animId: number;
    let time = 0;
    let w = 0;
    let h = 0;

    // Render at lower resolution for performance, then scale up
    const SCALE = 4;
    const MOUSE_RADIUS = 180;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = Math.ceil(w / SCALE);
      canvas!.height = Math.ceil(h / SCALE);
    }

    function draw() {
      const cw = canvas!.width;
      const ch = canvas!.height;
      const imgData = ctx!.createImageData(cw, ch);
      const data = imgData.data;
      const mouse = mouseRef.current;

      // Mouse position in canvas-pixel coords
      const mx = mouse.active ? mouse.x / SCALE : -9999;
      const my = mouse.active ? mouse.y / SCALE : -9999;

      time += 0.003;

      for (let y = 0; y < ch; y++) {
        for (let x = 0; x < cw; x++) {
          const nx = x * 0.008;
          const ny = y * 0.008;

          // Layered noise for organic flow
          const n1 = noise(nx * 1.2 + time * 0.8, ny * 1.2 + time * 0.5);
          const n2 = noise(nx * 2.5 - time * 0.6, ny * 2.5 + time * 0.3) * 0.5;
          const n3 = noise(nx * 5.0 + time * 0.4, ny * 5.0 - time * 0.7) * 0.25;

          // Warp coordinates with noise for fluid distortion
          const warpX = nx + n1 * 0.6 + time * 0.2;
          const warpY = ny + n2 * 0.6 - time * 0.15;
          const n4 = noise(warpX * 1.8, warpY * 1.8);

          let val = (n1 + n2 + n3 + n4 * 0.7) * 0.5 + 0.5;

          // Create ridges — makes it look like veins/cracks of energy
          const ridge = 1 - Math.abs(n4 * 2);
          val = val * 0.5 + ridge * ridge * 0.5;

          // Mouse hover — bright glow distortion
          if (mouse.active) {
            const dx = x - mx;
            const dy = y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const mr = MOUSE_RADIUS / SCALE;
            if (dist < mr) {
              const factor = 1 - dist / mr;
              const smooth = factor * factor * (3 - 2 * factor); // smoothstep
              // Brighten near cursor — red glow reveal
              val += smooth * 0.5;
              val = Math.min(val, 1.3);
            }
          }

          // Color mapping — almost entirely black, faint red traces
          const idx = (y * cw + x) * 4;

          if (val < 0.7) {
            // Pure black (vast majority)
            data[idx] = Math.floor(val * 6);
            data[idx + 1] = 0;
            data[idx + 2] = 0;
          } else if (val < 0.85) {
            // Barely visible dark red hint
            const t = (val - 0.7) / 0.15;
            data[idx] = Math.floor(4 + t * 30);
            data[idx + 1] = 0;
            data[idx + 2] = 0;
          } else if (val < 0.95) {
            // Thin dark red veins
            const t = (val - 0.85) / 0.1;
            data[idx] = Math.floor(34 + t * 55);
            data[idx + 1] = Math.floor(t * 6);
            data[idx + 2] = Math.floor(t * 3);
          } else {
            // Rare bright red edges
            const t = Math.min((val - 0.95) / 0.25, 1);
            data[idx] = Math.floor(89 + t * 60);
            data[idx + 1] = Math.floor(6 + t * 15);
            data[idx + 2] = Math.floor(3 + t * 8);
          }
          data[idx + 3] = 255;
        }
      }

      ctx!.putImageData(imgData, 0, 0);
      animId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    }

    function onMouseLeave() {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }

    resize();
    animId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="services-plexus-canvas"
      aria-hidden="true"
    />
  );
}
