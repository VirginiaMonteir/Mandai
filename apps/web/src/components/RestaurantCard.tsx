'use client';

import React from 'react';
import Link from 'next/link';
import styles from './RestaurantCard.module.css';

interface Restaurant {
  id: number;
  name: string;
  description: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image?: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {restaurant.image ? (
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className={styles.restaurantImage}
          />
        ) : (
          <div className={styles.placeholder}>Imagem do Restaurante</div>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{restaurant.name}</h3>
        <p className={styles.description}>{restaurant.description}</p>
        
        <div className={styles.details}>
          <span className={styles.rating}>⭐ {restaurant.rating}</span>
          <span className={styles.deliveryTime}>⏱️ {restaurant.deliveryTime}</span>
          <span className={styles.deliveryFee}>R$ {restaurant.deliveryFee.toFixed(2)}</span>
        </div>
      </div>
      
      <Link href={`/restaurants/${restaurant.id}`} className={styles.link}>
        Ver Cardápio
      </Link>
    </div>
  );
}