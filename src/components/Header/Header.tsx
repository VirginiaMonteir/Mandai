'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import styles from './Header.module.css';

export default function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Mandaí
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/restaurants" className={styles.navLink}>
                Restaurantes
              </Link>
            </li>
            <li>
              <Link href="/cart" className={styles.navLink}>
                Carrinho
                {totalItems > 0 && (
                  <span className={styles.cartCount}>{totalItems}</span>
                )}
              </Link>
            </li>
            <li>
              <Link href="/profile" className={styles.navLink}>
                Perfil
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}