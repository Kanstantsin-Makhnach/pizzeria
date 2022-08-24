import React, { useState, useEffect } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import SkeletLoad from './components/SkeletLoad';

const URL = 'https://630678bec0d0f2b8011dcac9.mockapi.io/items';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  async function request() {
    try {
      let requestResult = await fetch(URL);
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
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? [...new Array(6)].map((_, index) => <SkeletLoad key={index} />)
                : pizzas.map((pizza) => (
                    <PizzaBlock key={pizza.id} {...pizza} errorMessage={errorMessage} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
