import React from 'react';
import { render } from 'react-dom';

import { ItemGroup } from '../../components';

import styles from './styles.scss';

export default ({ items = [], anchor }) => (
  <div className={styles.meals} id={anchor}>
    Meals
    <ItemGroup />
  </div>
);
