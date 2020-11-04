import React from 'react';
import { useSelector } from 'react-redux';

import CartContent from '../components/CartContent';
import EmptyCart from '../components/EmptyCart';

const Cart = () => {
  const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart);

  return (
    <div className="content">
      <div className="container container--cart">
        {!items.length ? (
          <EmptyCart />
        ) : (
          <CartContent items={items} totalCount={totalCount} totalPrice={totalPrice} />
        )}
      </div>
    </div>
  );
};

export default Cart;
