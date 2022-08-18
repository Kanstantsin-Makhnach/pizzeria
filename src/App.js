import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
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
              <PizzaBlock title="Сырная" price="200" />
              <PizzaBlock title="Несырная" price="233" />
              <PizzaBlock title="С ананасами" price="345" />
              <PizzaBlock title="Мясная" price="111" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
