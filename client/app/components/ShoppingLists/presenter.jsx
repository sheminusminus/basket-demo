import React from 'react';

import {
  getItemsHashMapFromSnapshotVals,
  getItemsHashMapFromSnapshotFilteringIds,
  getRecurringItemsFromMap,
  getNonRecurringItemsFromMap,
} from '../../utils';

import { ItemList } from './components';

import styles from './styles.scss';

class ShoppingLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
    };
  }

  componentDidMount() {
    const { listenToList } = this.props;
    listenToList(this.handleValues.bind(this));
  }

  handleValues(values) {
    if (!values) return;

    const items = getItemsHashMapFromSnapshotVals(values);
    this.setState({ items }, () => console.log(this.state.items));
  }

  render() {
    const { anchor, handleAddItemToBasket, handleRemoveItem } = this.props;
    const { items } = this.state;

    const recurringItems = getRecurringItemsFromMap(items);
    const onceItems = getNonRecurringItemsFromMap(items);

    return (
      <div className={styles.lists} id={anchor}>
        Shopping Lists
        <ItemList
          handleAddItemToBasket={handleAddItemToBasket}
          handleRemoveItem={handleRemoveItem}
          title="Every Week"
          listKey="recurring"
          items={recurringItems} />
        <ItemList
          handleAddItemToBasket={handleAddItemToBasket}
          handleRemoveItem={handleRemoveItem}
          title="Only This Week"
          listKey="recurring"
          items={onceItems} />
      </div>
    );
  }
}

export default ShoppingLists;
