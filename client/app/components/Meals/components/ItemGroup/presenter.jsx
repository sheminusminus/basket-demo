import React from 'react';

import { MealItem, Actions } from './components';

import styles from './styles.scss';

export default ({ groupKey, name = '', items = [], handleAddItemsToList }) => (
  <div className={styles.groupWrapper}>
    <h4>{name}</h4><Actions handleAddItemsToList={handleAddItemsToList} />
    <ul>
      {items.map(item => <MealItem key={`${groupKey}-${item.id}`} item={item} />)}
    </ul>
  </div>
);
