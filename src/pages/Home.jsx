import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const Home = () => {
  const dispatch = useDispatch();

  const pizzas = useSelector((state) => state.pizzas.items);
  const isLoaded = useSelector((state) => state.pizzas.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);

  const onSelectSortType = React.useCallback((sortBy) => {
    dispatch(setSortBy(sortBy));
  }, []);

  const onAddPizzaToCart = React.useCallback((pizzaObj) => {
    dispatch(addPizzaToCart(pizzaObj));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickCategory={onSelectCategory} activeCategory={category} />
        <SortPopup activeSortType={sortBy.type} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((pizzaDetails) => (
              <PizzaBlock
                key={pizzaDetails.id}
                {...pizzaDetails}
                onClickAddPizza={onAddPizzaToCart}
                addedCount={cartItems[pizzaDetails.id] && cartItems[pizzaDetails.id].length}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, idx) => <PizzaLoadingBlock key={idx} />)}
      </div>
    </div>
  );
};

export default Home;
