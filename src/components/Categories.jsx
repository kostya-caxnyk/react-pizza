import React from 'react';

import PropTypes from 'prop-types';

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories = React.memo(({ activeCategory, onClickCategory }) => {
  console.log('rerender');

  return (
    <div className="categories">
      <ul>
        {categoryNames.map((name, index) => (
          <li
            className={index === activeCategory ? 'active' : ''}
            key={`${name}_${index}`}
            onClick={() => onClickCategory(index)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  onClick: PropTypes.func,
  activeCategory: PropTypes.number,
};

Categories.defaultProps = {
  onClickCategory: () => {},
  activeCategory: 0,
};

export default Categories;
