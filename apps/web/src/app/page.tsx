'use client';

import React, { useState, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import PromoBanner from '../components/PromoBanner/PromoBanner';
import { getAllRestaurants, getAllCategories, Restaurant } from '../lib/api/restaurantService';
import styles from './page.module.css';

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carregar restaurantes e categorias ao montar o componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [restaurantsData, categoriesData] = await Promise.all([
          getAllRestaurants(),
          getAllCategories()
        ]);
        setRestaurants(restaurantsData);
        setCategories(categoriesData);
      } catch (err) {
        setError('Falha ao carregar os dados. Por favor, tente novamente mais tarde.');
        console.error('Erro ao carregar dados:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filtrar restaurantes por categoria selecionada
  const filteredRestaurants = selectedCategory
    ? restaurants.filter(restaurant =>
        restaurant.menu && restaurant.menu.some(item => item.category === selectedCategory)
      )
    : restaurants;

  // Mostrar mensagem de carregamento
  if (loading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Restaurantes perto de você</h1>
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
        <h1 className={styles.title}>Restaurantes perto de você</h1>
        <div className={styles.error}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Restaurantes perto de você</h1>
      
      <PromoBanner
        title="FRETE GRÁTIS em pedidos acima de R$50"
        buttonText="Ver promoções"
        onButtonClick={() => console.log('Ver promoções clicado')}
      />
      
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <div className={styles.restaurantGrid}>
        {filteredRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}