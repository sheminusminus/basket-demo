import React from 'react';

import { Nav, Body } from './components';

import styles from './styles.scss';

export default ({ children, toggleItemEntry }) => (
  <div className={styles.layout}>
    <Nav />

    <Body toggleItemEntry={toggleItemEntry}>
      {children}
    </Body>
  </div>
);
