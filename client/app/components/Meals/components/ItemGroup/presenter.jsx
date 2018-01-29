import React from 'react';

import { MealItem, Actions } from './components';

import styles from './styles.scss';

export default (props) => {
  const {
    groupKey,
    name = '',
    items = [],
    handleAddItemsToList,
    handleName,
    handleQuantity,
  } = props;

  return (
    <div className={styles.groupWrapper}>
      <div className={styles.groupHeader}>
        <h5>{name}</h5><Actions handleAddItemsToList={handleAddItemsToList}/>
      </div>
      <ul>
        {items.map(item => (
          <MealItem
            mealId={groupKey}
            handleName={handleName}
            handleQuantity={handleQuantity}
            key={`${groupKey}-${item.id}`}
            item={item}/>
        ))}
      </ul>
    </div>
  );
};
