import React from 'react';

import styles from './styles.scss';

export default ({ groupKey, name = '', items = [] }) => (
  <div className={styles.groupWrapper}>
    <h4>{name}</h4>
    <ul>
      {items.map(item => <li key={`${groupKey}-${item.id}`}>{item.name}</li>)}
    </ul>
  </div>
);
