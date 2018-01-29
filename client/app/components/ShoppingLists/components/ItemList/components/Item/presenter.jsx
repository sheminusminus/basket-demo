import React from 'react';

import styles from './styles.scss';

class Item extends React.PureComponent {
  handleAddToBasket() {
    const { item, handleAddToBasket } = this.props;
    handleAddToBasket(item.id);
  }

  handleRemove() {
    const { item, handleRemove } = this.props;
    handleRemove(item.id);
  }

  render() {
    const { item } = this.props;

    return (
      <li className={styles.item}>
        <span>{item.quantity}</span>
        <span>{item.name}</span>
        <span>
          <button onClick={this.handleAddToBasket.bind(this)}>+ basket</button>
          <button onClick={this.handleRemove.bind(this)}>x</button>
        </span>
      </li>
    );
  }
}

export default Item;
