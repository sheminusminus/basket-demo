import React from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.scss';

let modalRoot = null;
if (global.document) modalRoot = document.querySelector('#modal-root');

class ItemEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      recurring: false,
    };
    this.handleName = this.handleName.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(evt) {
    evt.stopPropagation();
    const { handleAddItem, toggleItemEntry } = this.props;
    const { name, quantity, recurring } = this.state;

    if (!name) return;

    handleAddItem(name, quantity, recurring);
    toggleItemEntry();
  }

  handleName(evt) {
    this.setState({ name: evt.target.value });
  }

  handleQuantity(evt) {
    this.setState({ quantity: parseInt(evt.target.value, 10) || '' });
  }

  renderItemEntry() {
    const { toggleItemEntry } = this.props;
    const { name, quantity, recurring } = this.state;

    return (
      <div>
        <div className={styles.underlay} onClick={toggleItemEntry} />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={this.handleName} />
            <input
              type="number"
              placeholder="Name"
              value={quantity}
              onChange={this.handleQuantity} />
            <button onClick={this.handleAdd}>Save</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const component = this.renderItemEntry();

    if (modalRoot) return createPortal(component, modalRoot);

    return component;
  }
}

ItemEntry.defaultProps = {
  toggleItemEntry: () => {},
};

export default ItemEntry;
