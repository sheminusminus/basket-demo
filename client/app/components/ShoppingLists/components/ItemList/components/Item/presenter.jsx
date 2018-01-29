import React from 'react';

import styles from './styles.scss';

export default ({ item }) => (
  <li className={styles.item}>
    <span>{item.quantity}</span>
    <span>{item.name}</span>
  </li>
);
