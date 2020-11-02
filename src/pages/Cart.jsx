import React from 'react';
import CartContent from '../components/CartContent';
import EmptyCart from '../components/EmptyCart';
window.arr = [1];
const Cart = () => {
  return (
    <div className="content">
      <div className="container container--cart">
        {window.arr.length ? <CartContent /> : <EmptyCart />}
      </div>
    </div>
  );
};

export default Cart;
