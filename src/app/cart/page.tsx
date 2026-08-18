'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import styles from './page.module.css';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  
  const deliveryFee = 5.90;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  // Função para finalizar compra
  const handleCheckout = () => {
    // Em uma aplicação real, aqui redirecionaríamos para a página de checkout
    alert('Redirecionando para a página de checkout...');
    // Limpar o carrinho após finalizar compra
    clearCart();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Seu Carrinho</h1>
      
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Seu carrinho está vazio</p>
          <Link href="/restaurants" className={styles.continueShoppingButton}>
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.itemsSection}>
            <h2 className={styles.sectionTitle}>Itens no Carrinho</h2>
            
            <div className={styles.cartItems}>
              {cartItems.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    <div className={styles.imagePlaceholder}>Imagem</div>
                  </div>
                  
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemPrice}>
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className={styles.quantityControls}>
                    <button
                      className={styles.quantityButton}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button
                      className={styles.quantityButton}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className={styles.itemTotal}>
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <button
                    className={styles.removeItemButton}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.summarySection}>
            <h2 className={styles.sectionTitle}>Resumo do Pedido</h2>
            
            <div className={styles.summaryDetails}>
              <div className={styles.summaryRow}>
                <span>Subtotal:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              
              <div className={styles.summaryRow}>
                <span>Taxa de entrega:</span>
                <span>R$ {deliveryFee.toFixed(2)}</span>
              </div>
              
              <div className={styles.summaryRowTotal}>
                <span>Total:</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>
            
            <button
              className={styles.checkoutButton}
              onClick={handleCheckout}
            >
              Finalizar Compra
            </button>
            
            <Link href="/restaurants" className={styles.continueShoppingButton}>
              Continuar Comprando
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}