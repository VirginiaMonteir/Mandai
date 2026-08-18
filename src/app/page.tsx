'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bem-vindo ao Mandaí</h1>
        <p className={styles.subtitle}>Sua solução de delivery favorita</p>
      </header>

      <main>
        <div className={styles.card}>
          <h2 className={styles.description}>Entrega rápida e confiável</h2>
          <p>
            Encontre os melhores restaurantes e faça seu pedido com apenas alguns cliques.
          </p>
          <Link href="/restaurants" className={styles.button}>
            Explorar Restaurantes
          </Link>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Variedade</h3>
            <p className={styles.featureDescription}>Diversos restaurantes e opções deliciosas para todos os gostos.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Rapidez</h3>
            <p className={styles.featureDescription}>Entregas rápidas diretamente na sua porta.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Facilidade</h3>
            <p className={styles.featureDescription}>Navegação simples e pagamento seguro.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Mandaí - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}