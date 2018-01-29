import React from 'react';

import styles from './styles.scss';

class BasketItem extends React.PureComponent {
  handleRemoveItem() {
    const { item, handleRemoveItem } = this.props;
    handleRemoveItem(item.id);
  }

  render() {
    const { item } = this.props;

    return (
      <li className={styles.item}>
        <input value={item.quantity} type="number" />
        <input value={item.name} type="text" />
        <span>
          <button onClick={this.handleRemoveItem.bind(this)} className={styles.remove}>
            x
          </button>
        </span>
      </li>
    );
  }
}

export default BasketItem;
