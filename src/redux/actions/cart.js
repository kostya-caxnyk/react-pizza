export const addPizzaToCart = (pizzaObj) => {
  return {
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
  };
};

export const removePizzaFromCart = (pizzaObj) => {
  return {
    type: 'REMOVE_PIZZA_CART',
    payload: pizzaObj,
  };
};

export const removePizzasByTypeFromCart = (pizzaObj) => {
  return {
    type: 'REMOVE_PIZZAS_BY_TYPE',
    payload: pizzaObj,
  };
};

export const removeAllPizzasFromCart = () => {
  return {
    type: 'REMOVE_ALL_PIZZAS_CART',
  };
};
