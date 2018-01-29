import React from 'react';

import styles from './styles.scss';

import { Item } from './components';

const ItemList = (props) => {
  const {
    title,
    items,
    handleRemoveItem,
    handleAddItemToBasket,
    handleSelectItem,
    listKey,
    selectedItems,
  } = props;

  return (
    <div className={styles.itemList}>
      <h4>{title}</h4>
      <ul>
        {items.map(item => (
          <Item
            isSelected={selectedItems.includes(item.id)}
            handleSelect={handleSelectItem}
            handleAddToBasket={handleAddItemToBasket}
            handleRemove={handleRemoveItem}
            key={`${listKey}-${item.id}`}
            item={item}/>
        ))}
      </ul>
    </div>
  );
};

ItemList.defaultProps = {
  title: '',
  items: [],
  handleRemoveItem: () => {},
  handleAddItemToBasket: () => {},
};

export default ItemList;
