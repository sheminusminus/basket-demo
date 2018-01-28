import React from 'react';

import { ItemGroup } from './components';

import styles from './styles.scss';

export default ({ items = [], anchor }) => (
  <div className={styles.meals} id={anchor}>
    Meals
    <ItemGroup />
  </div>
);
