import { isMatch } from 'lodash';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const updateCartItem = (itemInCart, pizzaObj, quantity) => {
  if (!itemInCart) {
    return {
      ...pizzaObj,
      totalCount: 1,
      totalPrice: pizzaObj.price,
    };
  }

  return {
    ...itemInCart,
    totalCount: itemInCart.totalCount + quantity,
    totalPrice: itemInCart.totalPrice + itemInCart.price * quantity,
  };
};

const updateCartItems = (item, idx, cartItems) => {
  if (item.totalCount === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx < 0) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCart = (state, pizzaObj, quantity) => {
  const itemIdx = state.items.findIndex((obj) => isMatch(obj, pizzaObj));
  const itemInCart = state.items[itemIdx];

  const newCartItem = updateCartItem(itemInCart, pizzaObj, quantity);
  const newCartItems = updateCartItems(newCartItem, itemIdx, state.items);
  const totalPrice = newCartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const totalCount = newCartItems.reduce((acc, item) => acc + item.totalCount, 0);

  return {
    totalPrice,
    totalCount,
    items: newCartItems,
  };
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      return updateCart(state, action.payload, 1);
    case 'REMOVE_PIZZA_CART':
      return updateCart(state, action.payload, -1);
    case 'REMOVE_PIZZAS_BY_TYPE':
      return updateCart(state, action.payload, -action.payload.totalCount);
    case 'CLEAR_CART':
      return {
        items: [],
        totalCount: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};

export default cart;
