import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const Home = () => {
  const dispatch = useDispatch();

  const pizzas = useSelector((state) => state.pizzas.items);
  const isLoaded = useSelector((state) => state.pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);

  const onSelectSortType = React.useCallback((idx) => {
    dispatch(setSortBy(idx));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickCategory={onSelectCategory} activeCategory={category} />
        <SortPopup activeSortType={sortBy} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((pizzaDetails) => <PizzaBlock key={pizzaDetails.id} {...pizzaDetails} />)
          : Array(12)
              .fill(0)
              .map((_, idx) => <PizzaLoadingBlock key={idx} />)}
      </div>
    </div>
  );
};

export default Home;
