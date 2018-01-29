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
        <span>{item.quantity}</span>
        <span>{item.name}</span>
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
