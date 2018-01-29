import React from 'react';

import { MealItem } from './components';

import styles from './styles.scss';

export default ({ groupKey, name = '', items = [] }) => (
  <div className={styles.groupWrapper}>
    <h4>{name}</h4>
    <ul>
      {items.map(item => <MealItem key={`${groupKey}-${item.id}`} item={item} />)}
    </ul>
  </div>
);
