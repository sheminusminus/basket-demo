import React from 'react';

import styles from './styles.scss';

export default ({ name, handleMealName, handleSaveMeal }) => (
  <div>
    <input
      className={styles.input}
      type="text"
      value={name}
      onChange={handleMealName}
      placeholder="Meal Name" />
    <button className={styles.save} onClick={handleSaveMeal}>Save as Meal</button>
  </div>
);
