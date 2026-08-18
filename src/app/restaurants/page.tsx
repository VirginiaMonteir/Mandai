'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { getAllRestaurants, Restaurant, MenuItem } from '../../lib/api/restaurantService';
import styles from './page.module.css';

export default function Restaurants() {
  const { addToCart } = useCart();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carregar restaurantes ao montar o componente
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const data = await getAllRestaurants();
        setRestaurants(data);
      } catch (err) {
        setError('Falha ao carregar os restaurantes. Por favor, tente novamente mais tarde.');
        console.error('Erro ao carregar restaurantes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Função para adicionar item ao carrinho
  const handleAddToCart = (item: Omit<MenuItem, 'category'>) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price
    });
  };

  // Mostrar mensagem de carregamento
  if (loading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Nossos Restaurantes</h1>
        <p className={styles.subtitle}>
          Descubra uma variedade de opções deliciosas perto de você
        </p>
        <div className={styles.loading}>
          Carregando restaurantes...
        </div>
      </div>
    );
  }

  // Mostrar mensagem de erro
  if (error) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Nossos Restaurantes</h1>
        <p className={styles.subtitle}>
          Descubra uma variedade de opções deliciosas perto de você
        </p>
        <div className={styles.error}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nossos Restaurantes</h1>
      <p className={styles.subtitle}>
        Descubra uma variedade de opções deliciosas perto de você
      </p>
      
      <div className={styles.restaurantList}>
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className={styles.restaurantCard}>
            <div className={styles.restaurantImage}>
              <div className={styles.placeholder}>Imagem do Restaurante</div>
            </div>
            <div className={styles.restaurantInfo}>
              <h2 className={styles.restaurantName}>{restaurant.name}</h2>
              <p className={styles.restaurantDescription}>
                {restaurant.description}
              </p>
              <div className={styles.restaurantDetails}>
                <span className={styles.rating}>⭐ {restaurant.rating}</span>
                <span className={styles.deliveryTime}>⏱️ {restaurant.deliveryTime}</span>
              </div>
              
              <div className={styles.menuSection}>
                <h3 className={styles.menuTitle}>Cardápio</h3>
                <div className={styles.menuItems}>
                  {restaurant.menu.map(item => (
                    <div key={item.id} className={styles.menuItem}>
                      <div className={styles.menuItemInfo}>
                        <h4 className={styles.menuItemName}>{item.name}</h4>
                        <p className={styles.menuItemDescription}>{item.description}</p>
                        <p className={styles.menuItemPrice}>R$ {item.price.toFixed(2)}</p>
                      </div>
                      <button
                        className={styles.addToCartButton}
                        onClick={() => handleAddToCart(item)}
                      >
                        Adicionar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}