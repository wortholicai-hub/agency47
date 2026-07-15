"use client";

import { useState, useEffect } from "react";

const words = ["Autonomous", "Intelligent", "Automated", "Self-Driving", "Adaptive", "Scalable"];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="rotating-word-wrapper" style={{ "--i": 1 } as React.CSSProperties}>
      <span className={`rotating-word ${animating ? "rotating-word--out" : "rotating-word--in"}`}>
        {words[index]}
      </span>
    </span>
  );
}
