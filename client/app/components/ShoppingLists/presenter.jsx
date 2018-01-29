import React from 'react';

import {
  getItemsHashMapFromSnapshotVals,
  getRecurringItemsFromMap,
  getNonRecurringItemsFromMap,
  getAllItemsFromMap,
} from '../../utils';

import { ItemList, Actions } from './components';

import styles from './styles.scss';

class ShoppingLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      selections: [],
      mealName: '',
    };
  }

  componentDidMount() {
    const { listenToList } = this.props;
    listenToList(this.handleValues.bind(this));
  }

  handleSaveAsMeal() {
    const { getItemsOnce, saveMeal } = this.props;
    const { selections } = this.state;

    getItemsOnce((itemValues) => {
      const items = selections.reduce((hashMap, key) => ({
        ...hashMap,
        [key]: itemValues[key],
      }), {});

      saveMeal(this.state.mealName, items);

      this.setState({
        selections: [],
        mealName: '',
      });
    });
  }

  handleValues(values) {
    const items = getItemsHashMapFromSnapshotVals(values);
    this.setState({ items }, () => console.log(this.state.items));
  }

  handleSelectItem(itemId) {
    const selections = [...this.state.selections];
    const index = selections.indexOf(itemId);

    if (index < 0) selections.push(itemId);
    else selections.splice(index, 1);

    this.setState({ selections });
  }

  handleMealName(evt) {
    this.setState({ mealName: evt.target.value });
  }

  render() {
    const {
      anchor,
      handleAddItemToBasket,
      handleRemoveItem,
      editItemName,
      editItemQuantity,
    } = this.props;

    const { items, selections } = this.state;

    const listItems = getAllItemsFromMap(items);

    return (
      <div className={styles.lists} id={anchor}>
        <div>
          <h4>Shopping List</h4>
          {
            selections.length > 0 &&
            <Actions
              handleMealName={this.handleMealName.bind(this)}
              handleSaveMeal={this.handleSaveAsMeal.bind(this)}/>
          }
        </div>
        <ItemList
          handleItemName={editItemName}
          handleItemQuantity={editItemQuantity}
          selectedItems={selections}
          handleSelectItem={this.handleSelectItem.bind(this)}
          handleAddItemToBasket={handleAddItemToBasket}
          handleRemoveItem={handleRemoveItem}
          listKey="recurring"
          items={listItems} />
      </div>
    );
  }
}

export default ShoppingLists;
