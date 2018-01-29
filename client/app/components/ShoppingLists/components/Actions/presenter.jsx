import React from 'react';

import styles from './styles.scss';

export default ({ name, handleMealName, handleSaveMeal }) => (
  <div>
    <input type="text" value={name} onChange={handleMealName} placeholder="Meal Name" />
    <button className={styles.actions} onClick={handleSaveMeal}>Save as Meal</button>
  </div>
);
