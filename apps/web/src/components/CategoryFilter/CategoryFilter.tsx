'use client';

import React from 'react';
import styles from './CategoryFilter.module.css';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className={styles.categories}>
      <div className={styles.categoriesScroll}>
        <button
          className={`${styles.categoryItem} ${selectedCategory === null ? styles.active : ''}`}
          onClick={() => onSelectCategory(null)}
        >
          Todos
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.categoryItem} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}