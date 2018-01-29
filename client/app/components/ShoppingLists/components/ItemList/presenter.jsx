import React from 'react';

const ItemList = ({ title, items, handleRemoveItem, handleAddItemToBasket, listKey }) => (
  <div>
    <h4>{title}</h4>
    <ul>
      {items.map(item => <li key={`${listKey}-${item.id}`}>{item.name}</li>)}
    </ul>
  </div>
);

ItemList.defaultProps = {
  title: '',
  items: [],
  handleRemoveItem: () => {},
  handleAddItemToBasket: () => {},
};

export default ItemList;
