import axios from 'axios';

const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

const setPizzas = (pizzas) => ({
  type: 'SET_PIZZAS',
  payload: pizzas,
});

const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get('http://localhost:3001/pizzas').then(({ data }) => dispatch(setPizzas(data)));
};

export { setPizzas, fetchPizzas, setLoaded };
