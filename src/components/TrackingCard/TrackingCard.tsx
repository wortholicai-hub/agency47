import React from 'react';
import styles from './TrackingCard.module.css';

interface TrackingCardProps {
  title: string;
  description: string;
}

export default function TrackingCard({ title, description }: TrackingCardProps) {
  return (
    <div className={styles.outer}>
      <div className={styles.dot}></div>
      <div className={styles.card}>
        <div className={styles.ray}></div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={`${styles.line} ${styles.topl}`}></div>
        <div className={`${styles.line} ${styles.leftl}`}></div>
        <div className={`${styles.line} ${styles.bottoml}`}></div>
        <div className={`${styles.line} ${styles.rightl}`}></div>
      </div>
    </div>
  );
}
