'use client';

import React from 'react';
import styles from './page.module.css';

export default function Profile() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meu Perfil</h1>
      
      <div className={styles.profileContent}>
        <div className={styles.profileSection}>
          <h2 className={styles.sectionTitle}>Informações Pessoais</h2>
          
          <div className={styles.profileInfo}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatarPlaceholder}>Foto</div>
              <button className={styles.changePhotoButton}>
                Alterar Foto
              </button>
            </div>
            
            <div className={styles.infoFields}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue="João Silva"
                  className={styles.input}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="joao.silva@example.com"
                  className={styles.input}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  defaultValue="(11) 99999-9999"
                  className={styles.input}
                />
              </div>
              
              <button className={styles.saveButton}>
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
        
        <div className={styles.profileSection}>
          <h2 className={styles.sectionTitle}>Endereços Salvos</h2>
          
          <div className={styles.addressList}>
            <div className={styles.addressCard}>
              <h3 className={styles.addressTitle}>Casa</h3>
              <p className={styles.addressText}>
                Rua das Flores, 123<br />
                São Paulo, SP<br />
                CEP: 01234-567
              </p>
              <div className={styles.addressActions}>
                <button className={styles.editButton}>Editar</button>
                <button className={styles.deleteButton}>Excluir</button>
              </div>
            </div>
            
            <div className={styles.addressCard}>
              <h3 className={styles.addressTitle}>Trabalho</h3>
              <p className={styles.addressText}>
                Av. Paulista, 1000<br />
                São Paulo, SP<br />
                CEP: 01310-100
              </p>
              <div className={styles.addressActions}>
                <button className={styles.editButton}>Editar</button>
                <button className={styles.deleteButton}>Excluir</button>
              </div>
            </div>
            
            <button className={styles.addAddressButton}>
              + Adicionar Novo Endereço
            </button>
          </div>
        </div>
        
        <div className={styles.profileSection}>
          <h2 className={styles.sectionTitle}>Histórico de Pedidos</h2>
          
          <div className={styles.orderHistory}>
            <div className={styles.orderCard}>
              <div className={styles.orderHeader}>
                <span className={styles.orderId}>Pedido #12345</span>
                <span className={styles.orderDate}>25/07/2026</span>
              </div>
              <div className={styles.orderDetails}>
                <span className={styles.orderItems}>3 itens</span>
                <span className={styles.orderTotal}>R$ 89,90</span>
                <span className={styles.orderStatus}>Entregue</span>
              </div>
            </div>
            
            <div className={styles.orderCard}>
              <div className={styles.orderHeader}>
                <span className={styles.orderId}>Pedido #12344</span>
                <span className={styles.orderDate}>20/07/2026</span>
              </div>
              <div className={styles.orderDetails}>
                <span className={styles.orderItems}>2 itens</span>
                <span className={styles.orderTotal}>R$ 56,70</span>
                <span className={styles.orderStatus}>Entregue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}