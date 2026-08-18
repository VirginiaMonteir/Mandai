'use client';

import React, { useState, useEffect } from 'react';
import RestaurantCard from '../../components/RestaurantCard';
import { getAllRestaurants, Restaurant } from '../../lib/api/restaurantService';
import styles from './page.module.css';

export default function Restaurants() {
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
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}