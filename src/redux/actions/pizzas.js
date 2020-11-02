import axios from 'axios';

const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

const setPizzas = (pizzas) => ({
  type: 'SET_PIZZAS',
  payload: pizzas,
});

const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy.type}&_order=${sortBy.order}`,
    )
    .then(({ data }) => dispatch(setPizzas(data)));
};

export { setPizzas, fetchPizzas, setLoaded };
