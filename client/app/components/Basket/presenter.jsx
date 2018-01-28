import React from 'react';

import { ItemBasket } from './components';

import styles from './styles.scss';

export default ({ db, items = [], anchor }) => (
  <div className={styles.basket} id={anchor}>
    Basket
    <ItemBasket />
  </div>
);