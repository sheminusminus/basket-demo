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

  render() {
    const { item, isSelected } = this.props;

    let classes = styles.item;
    if (isSelected) classes = `${classes} ${styles.selected}`;

    let recurBoxClasses = styles.recurBox;
    if (item.recurring) recurBoxClasses = `${recurBoxClasses} ${styles.filled}`;

    return (
      <li className={classes} onClick={this.handleSelect.bind(this)}>
        <span className={styles.recur}>
          <span className={recurBoxClasses} />
        </span>
        <span className={styles.quantity}>
          {item.quantity}
        </span>
        <span className={styles.name}>
          {item.name}
        </span>
        <span className={styles.actions}>
          <button onClick={this.handleAddToBasket.bind(this)} className={styles.add}>+</button>
        </span>
      </li>
    );
  }
}

export default Item;
