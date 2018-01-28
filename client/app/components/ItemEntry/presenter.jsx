import React from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.scss';

let modalRoot = null;
if (global.document) modalRoot = document.querySelector('#modal-root');

class ItemEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(evt) {
    evt.stopPropagation();
    const { db } = this.props;
  }

  renderItemEntry() {
    const { toggleItemEntry } = this.props;

    return (
      <div>
        <div className={styles.underlay} onClick={toggleItemEntry} />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
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
