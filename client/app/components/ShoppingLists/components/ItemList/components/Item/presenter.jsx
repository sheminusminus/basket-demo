import React from 'react';

import styles from './styles.scss';

class Item extends React.PureComponent {
  handleAddToBasket(evt) {
    evt.stopPropagation();
    const { item, handleAddToBasket } = this.props;
    handleAddToBasket(item.id);
  }

  handleRemove(evt) {
    evt.stopPropagation();
    const { item, handleRemove } = this.props;
    handleRemove(item.id);
  }

  handleSelect() {
    const { item, handleSelect } = this.props;
    handleSelect(item.id);
  }

  handleName(evt) {
    const { item, handleName } = this.props;
    handleName(item.id, evt.target.value);
  }

  handleQuantity(evt) {
    const { item, handleQuantity } = this.props;
    handleQuantity(item.id, evt.target.value);
  }

  handleRecurring(evt) {
    evt.stopPropagation();
    const { item, handleRecurring } = this.props;
    handleRecurring(item.id, !item.recurring);
  }

  /* eslint-disable class-methods-use-this */
  handleInputFocus(evt) {
    evt.stopPropagation();
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { item, isSelected } = this.props;

    let classes = styles.item;
    if (isSelected) classes = `${classes} ${styles.selected}`;

    let recurBoxClasses = styles.recurBox;
    if (item.recurring) recurBoxClasses = `${recurBoxClasses} ${styles.filled}`;

    return (
      <li className={classes} onClick={this.handleSelect.bind(this)}>
        <span className={styles.recur}>
          <span className={recurBoxClasses} onClick={this.handleRecurring.bind(this)} />
        </span>
        <input
          onChange={this.handleQuantity.bind(this)}
          onClick={this.handleInputFocus}
          value={item.quantity}
          type="number"
          className={styles.quantity} />
        <input
          onChange={this.handleName.bind(this)}
          onClick={this.handleInputFocus}
          value={item.name}
          type="text"
          className={styles.name} />
        <span className={styles.actions}>
          <button onClick={this.handleAddToBasket.bind(this)} className={styles.add}>+</button>
        </span>
      </li>
    );
  }
}

export default Item;
