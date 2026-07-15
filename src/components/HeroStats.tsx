"use client";

import { useRef, useState, useCallback, useEffect } from "react";

const stats = [
  {
    num: "97+",
    label: "Performance",
    words: ["Fast", "Reliable", "SEO", "Accessible", "Optimized"],
  },
  {
    num: "48h",
    label: "Turnaround",
    words: ["Discovery", "Planning", "Prototype", "Kickoff", "Delivery"],
  },
  {
    num: "6+",
    label: "Years",
    words: ["Building", "Scaling", "Learning", "Innovation", "Experience"],
  },
];

function StatCard({
  stat,
  onHoverChange,
}: {
  stat: (typeof stats)[0];
  onHoverChange: (hovering: boolean) => void;
}) {
  const [word, setWord] = useState(stat.label);
  const [changing, setChanging] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef(0);

  const startCycling = useCallback(() => {
    onHoverChange(true);
    indexRef.current = 0;
    intervalRef.current = setInterval(() => {
      setChanging(true);
      setTimeout(() => {
        setWord(stat.words[indexRef.current]);
        setChanging(false);
        indexRef.current = (indexRef.current + 1) % stat.words.length;
      }, 180);
    }, 500);
  }, [stat.words, onHoverChange]);

  const stopCycling = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    onHoverChange(false);
    setWord(stat.label);
    setChanging(false);
    indexRef.current = 0;
  }, [stat.label, onHoverChange]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="stat-card"
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
    >
      <span className="stat-card-num">{stat.num}</span>
      <span className={`stat-card-word ${changing ? "stat-card-word--out" : ""}`}>
        {word}
      </span>
    </div>
  );
}

export default function HeroStats() {
  const [flash, setFlash] = useState(false);

  return (
    <div className={`hero-stats-bar ${flash ? "hero-stats-bar--flash" : ""}`}>
      <div className="hero-stats-inner">
        {stats.map((s, i) => (
          <div key={s.label} style={{ display: "contents" }}>
            {i > 0 && <div className="stat-divider" />}
            <StatCard stat={s} onHoverChange={setFlash} />
          </div>
        ))}
      </div>
    </div>
  );
}
