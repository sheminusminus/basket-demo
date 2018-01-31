import React from 'react';

import styles from './styles.scss';

const Header = ({ toggleItemEntry, toggleSchedule, date = 'This Week' }) => (
  <div className={styles.headerWrapper} id="basket">
    <header className={styles.header}>
      <div className={styles.scheduleWrapper}>
        <span className={styles.date}>{date}</span>
        <button className={styles.schedule} onClick={toggleSchedule} />
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
