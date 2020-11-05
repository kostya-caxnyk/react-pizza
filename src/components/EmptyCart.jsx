import React from 'react';

import { Link } from 'react-router-dom';

import emptyCartImg from '../assets/img/empty-cart.png';
import Button from './Button';

const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <i>😕</i>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCartImg} alt="Empty cart" />
      <Link to="/">
        <Button className="button--black">
          <span>Вернуться назад</span>
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
