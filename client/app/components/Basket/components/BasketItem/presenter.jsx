import React from 'react';

import styles from './styles.scss';

class BasketItem extends React.PureComponent {
  handleRemoveItem() {
    const { item, handleRemoveItem } = this.props;
    handleRemoveItem(item.id);
  }

  handleQuantity(evt) {
    const { item, handleQuantity } = this.props;
    handleQuantity(item.id, evt.target.value);
  }

  handleName(evt) {
    const { item, handleName } = this.props;
    handleName(item.id, evt.target.value);
  }

  render() {
    const { item } = this.props;

    return (
      <li className={styles.item}>
        <input value={item.quantity} type="number" onChange={this.handleQuantity.bind(this)} />
        <input value={item.name} type="text" onChange={this.handleName.bind(this)} />
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
