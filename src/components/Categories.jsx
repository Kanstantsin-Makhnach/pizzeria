import React, { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState('');

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const handleActiveCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => handleActiveCategory(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
