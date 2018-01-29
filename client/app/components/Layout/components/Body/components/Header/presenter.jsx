import React from 'react';

import styles from './styles.scss';

const Header = ({ toggleItemEntry, toggleSchedule, date = 'This Week' }) => (
  <div className={styles.headerWrapper} id="basket">
    <header className={styles.header}>
      <div className={styles.scheduleWrapper}>
        <button className={styles.schedule} onClick={toggleSchedule}>{date}</button>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.add} onClick={toggleItemEntry}>+</button>
      </div>
    </header>
  </div>
);

Header.defaultProps = {
  toggleItemEntry: () => {},
};

export default Header;
