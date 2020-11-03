import React from 'react';
import CartContent from '../components/CartContent';
import EmptyCart from '../components/EmptyCart';

const Cart = () => {
  return (
    <div className="content">
      <div className="container container--cart">
        {1 ? (
          <CartContent
            items={[
              {
                size: 26,
                imgUrl:
                  'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
                name: 'Пепперони Фреш с перцем',
                price: 803,
                type: 'тонкое',
                count: 1,
              },
            ]}
          />
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

export default Cart;
