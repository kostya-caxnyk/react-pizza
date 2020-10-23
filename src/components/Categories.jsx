import React from 'react';

const Categories = (props) => {

  const { items, onClick } = props;

  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
          <li key={`${name}_${index}`} onClick={() => onClick(name)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
