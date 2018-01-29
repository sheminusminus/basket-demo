import React from 'react';

import {
  getItemsHashMapFromSnapshotVals,
  getAllItemsFromMap,
} from '../../utils';

import { ItemList, Actions } from './components';

import styles from './styles.scss';

const NoItems = () => (
  <div className={styles.empty}>Add some items to your shopping list to see them here!</div>
);

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
      editItemRecurring,
    } = this.props;

    const { items, selections } = this.state;

    const listItems = getAllItemsFromMap(items);

    const contents = listItems.length ? (
      <ItemList
        handleItemRecurring={editItemRecurring}
        handleItemName={editItemName}
        handleItemQuantity={editItemQuantity}
        selectedItems={selections}
        handleSelectItem={this.handleSelectItem.bind(this)}
        handleAddItemToBasket={handleAddItemToBasket}
        handleRemoveItem={handleRemoveItem}
        listKey="recurring"
        items={listItems} />
    ) : <NoItems />;

    return (
      <div className={styles.lists} id={anchor}>
        <div>
          <div className={styles.listsHeader}>
            <h4>Shopping List</h4>
            <span className={styles.legend}>
              <span className={styles.box} />
              <span className={styles.text}>Recurring</span>
            </span>
          </div>
          {
            selections.length > 0 &&
            <Actions
              handleMealName={this.handleMealName.bind(this)}
              handleSaveMeal={this.handleSaveAsMeal.bind(this)}/>
          }
        </div>
        {contents}
      </div>
    );
  }
}

export default ShoppingLists;
