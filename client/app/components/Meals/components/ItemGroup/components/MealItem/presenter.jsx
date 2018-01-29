import React from 'react';

import styles from './styles.scss';

class MealItem extends React.PureComponent {
  handleQuantity(evt) {
    const { item, handleQuantity, mealId } = this.props;
    handleQuantity(item.id, evt.target.value, mealId);
  }

  handleName(evt) {
    const { item, handleName, mealId } = this.props;
    handleName(item.id, evt.target.value, mealId);
  }

  render() {
    const { item } = this.props;
    return (
      <li className={styles.item}>
        <input
          onChange={this.handleQuantity.bind(this)}
          className={styles.quantity}
          value={item.quantity}
          type="number" />
        <input
          onChange={this.handleName.bind(this)}
          className={styles.name}
          value={item.name}
          type="text" />
      </li>
    );
  }
}

export default MealItem;
