import React from 'react';

import styles from './styles.scss';

export default ({ handleAddItemsToList }) => (
  <button className={styles.actions} onClick={handleAddItemsToList} />
);
