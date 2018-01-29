import React from 'react';

import { Header } from './components';

import styles from './styles.scss';

export default ({ children, toggleItemEntry, toggleSchedule, date }) => (
  <div className={styles.body}>
    <Header
      date={date}
      toggleItemEntry={toggleItemEntry}
      toggleSchedule={toggleSchedule} />

    <div className={styles.content}>
      {children}
    </div>
  </div>
);
