import React from 'react';
import styles from './LuminousCard.module.css';

interface LuminousCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  autoPulse?: boolean;
}

export default function LuminousCard({ title, description, icon, autoPulse }: LuminousCardProps) {
  return (
    <div className={`${styles.card} ${autoPulse ? styles.blinking : ''}`}>
      <div className={styles.lightLayer}>
        <div className={styles.slit}></div>
        <div className={styles.lumen}>
          <div className={styles.min}></div>
          <div className={styles.mid}></div>
          <div className={styles.hi}></div>
        </div>
        <div className={styles.darken}>
          <div className={styles.sl}></div>
          <div className={styles.ll}></div>
          <div className={styles.slt}></div>
          <div className={styles.srt}></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <h4>{title}</h4>
        </div>
        <div className={styles.bottom}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
