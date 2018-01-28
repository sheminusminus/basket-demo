import React from 'react';

import { ItemList } from './components';

import styles from './styles.scss';

export default ({ items = [], anchor }) => (
  <div className={styles.lists} id={anchor}>
    Shopping Lists
    <ItemList />
  </div>
);
