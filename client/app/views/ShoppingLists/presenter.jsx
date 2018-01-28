import React from 'react';
import { render } from 'react-dom';

import { ItemList } from '../../components';

import styles from './styles.scss';

export default ({ items = [], anchor }) => (
  <div className={styles.lists} id={anchor}>
    Shopping Lists
    <ItemList />
  </div>
);
