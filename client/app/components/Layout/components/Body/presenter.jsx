import React from 'react';

import { Header } from './components';

import styles from './styles.scss';

export default ({ children, toggleItemEntry }) => (
  <div className={styles.body}>
    <Header toggleItemEntry={toggleItemEntry} />

    <div className={styles.content}>
      {children}
    </div>
  </div>
);
