import React from 'react';

import styles from './styles.scss';

export default ({ handleAddItemsToList }) => (
  <div>
    <button className={styles.actions} onClick={handleAddItemsToList}>
      Add to Shopping List
    </button>
  </div>
);