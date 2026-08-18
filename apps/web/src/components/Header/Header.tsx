'use client';

import React from 'react';
import Link from 'next/link';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';

export default function Header() {
  const handleSearch = (term: string) => {
    // Implementar lógica de busca
    console.log('Buscando por:', term);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          MANDAÍ
        </Link>
        
        <SearchBar onSearch={handleSearch} />
        
        <div className={styles.actions}>
          <Link href="/cart" className={styles.cartLink}>
            🛒 <span className={styles.cartCount}>3</span>
          </Link>
        </div>
      </div>
    </header>
  );
}