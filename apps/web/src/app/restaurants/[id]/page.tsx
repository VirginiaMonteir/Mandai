'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { getRestaurantById, getMenuItemsByCategory } from '../../../lib/api/restaurantService';
import type { Restaurant, MenuItem } from '../../../lib/api/restaurantService';

export default function RestaurantDetail({ params }: { params: { id: string } }) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Carregar detalhes do restaurante ao montar o componente
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        setLoading(true);
        const restaurantId = parseInt(params.id);
        
        if (isNaN(restaurantId)) {
          throw new Error('ID do restaurante inválido');
        }
        
        const fetchedRestaurant = await getRestaurantById(restaurantId);
        setRestaurant(fetchedRestaurant || null);
      } catch (err) {
        setError('Falha ao carregar os detalhes do restaurante. Por favor, tente novamente mais tarde.');
        console.error('Erro ao carregar restaurante:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [params.id]);

  // Obter categorias únicas do menu
  const getUniqueCategories = () => {
    if (!restaurant || !restaurant.menu) return [];
    
    const categories = restaurant.menu.map(item => item.category);
    return ['Todos', ...Array.from(new Set(categories))];
  };

  // Filtrar itens do menu por categoria
  const filteredMenu = () => {
    if (!restaurant || !restaurant.menu) return [];
    
    if (selectedCategory === 'Todos') {
      return restaurant.menu;
    }
    
    return restaurant.menu.filter(item => item.category === selectedCategory);
  };

  // Mostrar mensagem de carregamento
  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          Carregando detalhes do restaurante...
        </div>
      </div>
    );
  }

  // Mostrar mensagem de erro
  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          {error}
        </div>
      </div>
    );
  }

  // Mostrar mensagem se restaurante não encontrado
  if (!restaurant) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h2>Restaurante não encontrado</h2>
          <p>Desculpe, não conseguimos encontrar o restaurante solicitado.</p>
          <Link href="/restaurants" className={styles.backButton}>
            Voltar para restaurantes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.image}>
          <div className={styles.placeholder}>Imagem do Restaurante</div>
        </div>
        
        <div className={styles.info}>
          <h1 className={styles.name}>{restaurant.name}</h1>
          <p className={styles.description}>{restaurant.description}</p>
          
          <div className={styles.details}>
            <span className={styles.rating}>⭐ {restaurant.rating}</span>
            <span className={styles.deliveryTime}>⏱️ {restaurant.deliveryTime}</span>
            <span className={styles.deliveryFee}>R$ {restaurant.deliveryFee.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className={styles.menuSection}>
        <h2 className={styles.menuTitle}>Cardápio</h2>
        
        <div className={styles.categories}>
          {getUniqueCategories().map(category => (
            <button
              key={category}
              className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className={styles.menuItems}>
          {filteredMenu().map(item => (
            <div key={item.id} className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
                <p className={styles.itemPrice}>R$ {item.price.toFixed(2)}</p>
              </div>
              <button className={styles.addButton}>
                Adicionar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}