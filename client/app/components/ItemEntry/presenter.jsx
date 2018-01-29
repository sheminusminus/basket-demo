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

  handleRecurring(evt) {
    this.setState({ recurring: evt.target.value === 'true' });
  }

  renderItemEntry() {
    const { toggleItemEntry } = this.props;
    const { name, quantity, recurring } = this.state;

    return (
      <div>
        <div className={styles.underlay} onClick={toggleItemEntry} />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h4>Add a Shopping List Item</h4>
            <label>Name</label>
            <input
              type="text"
              placeholder="e.g. Asparagus"
              value={name}
              onChange={this.handleName} />
            <label>Quantity</label>
            <input
              type="number"
              placeholder="e.g. 2"
              value={quantity}
              onChange={this.handleQuantity} />
            <label>Recurring item?</label>
            <select
              className={styles.select}
              value={recurring}
              onChange={this.handleRecurring.bind(this)}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <button onClick={this.handleAdd} className={styles.save}>Save</button>
            <button onClick={toggleItemEntry} className={styles.cancel}>Cancel</button>
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
