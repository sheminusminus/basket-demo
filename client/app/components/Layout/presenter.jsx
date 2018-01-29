import React from 'react';

import { Nav, Body } from './components';

import styles from './styles.scss';

export default ({ children, toggleItemEntry, toggleSchedule, date }) => (
  <div className={styles.layout}>
    <Nav />

    <Body
      date={date}
      toggleItemEntry={toggleItemEntry}
      toggleSchedule={toggleSchedule}>
      {children}
    </Body>
  </div>
);
