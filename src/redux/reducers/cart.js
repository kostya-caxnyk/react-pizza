const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const newItems = {
        ...state.items,
        [action.payload.id]: state.items[action.payload.id]
          ? [...state.items[action.payload.id], action.payload]
          : [action.payload],
      };

      const allItems = [].concat(...Object.values(newItems));

      return {
        ...state,
        items: newItems,
        totalCount: allItems.length,
        totalPrice: allItems.reduce((sum, obj) => sum + obj.price, 0),
      };
    default:
      return state;
  }
};

export default cart;
