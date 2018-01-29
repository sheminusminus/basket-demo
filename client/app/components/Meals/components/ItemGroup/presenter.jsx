import React from 'react';

import { MealItem, Actions } from './components';

import styles from './styles.scss';

export default ({ groupKey, name = '', items = [], handleAddItemsToList }) => (
  <div className={styles.groupWrapper}>
    <div className={styles.groupHeader}>
      <h5>{name}</h5><Actions handleAddItemsToList={handleAddItemsToList} />
    </div>
    <ul>
      {items.map(item => <MealItem key={`${groupKey}-${item.id}`} item={item} />)}
    </ul>
  </div>
);
