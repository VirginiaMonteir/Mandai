'use client';

import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>Mandaí</h3>
          <p className={styles.description}>
            Sua solução de delivery favorita. Rápido, confiável e conveniente.
          </p>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.subtitle}>Links Rápidos</h4>
          <ul className={styles.list}>
            <li><a href="#" className={styles.link}>Sobre Nós</a></li>
            <li><a href="#" className={styles.link}>Restaurantes</a></li>
            <li><a href="#" className={styles.link}>Promoções</a></li>
            <li><a href="#" className={styles.link}>Contato</a></li>
          </ul>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.subtitle}>Contato</h4>
          <address className={styles.address}>
            <p>Email: contato@mandai.com</p>
            <p>Telefone: (11) 99999-9999</p>
          </address>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Mandaí - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}