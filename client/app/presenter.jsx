import 'babel-polyfill';
import React from 'react';

import { db } from './db';

import { NavLinks } from './constants';

import { Basket, Meals, ShoppingLists } from './views';
import { Layout, ItemEntry } from './components';
import { withFirebaseDb } from './wrappers';

const BasketWithDb = withFirebaseDb(Basket, db);
const MealsWithDb = withFirebaseDb(Meals, db);
const ShoppingListsWithDb = withFirebaseDb(ShoppingLists, db);
const ItemEntryWithDb = withFirebaseDb(ItemEntry, db);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showItemAdd: false,
    };
    this.toggleItemEntry = this.toggleItemEntry.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  toggleItemEntry() {
    this.setState({ showItemAdd: !this.state.showItemAdd });
  }

  handleAddItem(evt) {
    evt.stopPropagation();
    console.log(this.props);
  }

  render() {
    const { showItemAdd } = this.state;

    return (
      <Layout toggleItemEntry={this.toggleItemEntry}>
        <ShoppingListsWithDb anchor={NavLinks.LISTS} />
        <BasketWithDb anchor={NavLinks.BASKET} />
        <MealsWithDb anchor={NavLinks.MEALS} />
        {
          showItemAdd &&
          <ItemEntryWithDb
            toggleItemEntry={this.toggleItemEntry} />
        }
      </Layout>
    );
  }
}

export default App;
