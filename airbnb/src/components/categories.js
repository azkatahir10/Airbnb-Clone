import React, { useState } from 'react';
import './Categories.css';

const categories = ['Beachfront', 'Cabins', 'Trending', 'Luxury', 'Unique Stays'];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('Trending');

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={category === activeCategory ? 'active' : ''}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
