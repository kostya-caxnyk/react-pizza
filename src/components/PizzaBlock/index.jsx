import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';

const availableTypes = ['тонкое', 'традиционное'];
const availableSizes = [26, 30, 40];

const PizzaBlock = ({ imageUrl, name, price, sizes, types, id, onClickAddPizza, addedCount }) => {
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeType, setActiveType] = useState(types[0]);

  const onSelectSize = (size) => {
    setActiveSize(size);
  };
  const onSelectType = (idx) => {
    setActiveType(idx);
  };

  const onAddPizza = () => {
    const pizzaObj = {
      imageUrl,
      name,
      price,
      size: activeSize,
      type: availableTypes[activeType],
      id,
    };
    onClickAddPizza(pizzaObj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, idx) => (
            <li
              key={idx}
              className={classNames({
                disabled: !types.includes(idx),
                active: idx === activeType,
              })}
              onClick={() => onSelectType(idx)}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, idx) => (
            <li
              key={`${size}_${idx}`}
              className={classNames({
                disabled: !sizes.includes(size),
                active: size === activeSize,
              })}
              onClick={() => onSelectSize(size)}>
              {size} cм
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button className="button--add" onClick={onAddPizza} outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {!!addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
};

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  price: PropTypes.number.isRequired,
  onClickAddPizza: PropTypes.func.isRequired,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  price: 0,
  types: [],
  sizes: [],
};

export default PizzaBlock;
