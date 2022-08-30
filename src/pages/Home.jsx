import React, { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import SkeletLoad from '../components/SkeletLoad';

const URL = 'https://630678bec0d0f2b8011dcac9.mockapi.io/items';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({ name: 'по популярности', sortProperty: 'rating' });

  const sortBy = sortType.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';

  async function request() {
    setIsLoading(true);
    try {
      let requestResult = await fetch(`${URL}?${category}&sortBy=${sortBy}&order=${order}`);
      if (!requestResult.ok) {
        throw new Error('Ошибка запроса');
      }
      let result = await requestResult.json();
      setPizzas(result);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(true);
    }
  }

  useEffect(() => {
    request();
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <SkeletLoad key={index} />)
          : pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} errorMessage={errorMessage} />
            ))}
      </div>
    </div>
  );
}

export default Home;
