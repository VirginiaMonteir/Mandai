'use client';

import React from 'react';
import styles from './PromoBanner.module.css';

interface PromoBannerProps {
  title: string;
  buttonText: string;
  onButtonClick: () => void;
}

export default function PromoBanner({ title, buttonText, onButtonClick }: PromoBannerProps) {
  return (
    <div className={styles.promoBanner}>
      <div className={styles.promoContent}>
        <span className={styles.promoText}>{title}</span>
        <button className={styles.promoButton} onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}