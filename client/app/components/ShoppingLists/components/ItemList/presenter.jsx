import React from 'react';

import styles from './styles.scss';

import { Item } from './components';

const ItemList = ({ title, items, handleRemoveItem, handleAddItemToBasket, listKey }) => (
  <div className={styles.itemList}>
    <h4>{title}</h4>
    <ul>
      {items.map(item => (
        <Item
          handleAddToBasket={handleAddItemToBasket}
          handleRemove={handleRemoveItem}
          key={`${listKey}-${item.id}`}
          item={item} />
      ))}
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
