import React from 'react';
import './itemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  // console.log(greeting);
  return (
    <div className="item-list-container">
      <h2 className='greeting'>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;

