import React from 'react';

import styles from './styles.scss';

import { Item } from './components';

const ItemList = (props) => {
  const {
    items,
    handleRemoveItem,
    handleAddItemToBasket,
    handleSelectItem,
    listKey,
    selectedItems,
    handleItemName,
    handleItemQuantity,
  } = props;

  return (
    <div className={styles.itemList}>
      <ul>
        {items.map(item => (
          <Item
            handleName={handleItemName}
            handleQuantity={handleItemQuantity}
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
  items: [],
  handleRemoveItem: () => {},
  handleAddItemToBasket: () => {},
};

export default ItemList;
