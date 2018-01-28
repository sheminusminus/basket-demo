import React from 'react';

import styles from './styles.scss';

const Header = ({ toggleItemEntry }) => (
  <div className={styles.headerWrapper} id="header">
    <header className={styles.header}>
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
