import 'babel-polyfill';
import React from 'react';
import moment from 'moment';

import { db } from './db';

import { NavLinks } from './constants';

import { Basket, Meals, ShoppingLists, Layout, ItemEntry } from './components';
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
      showSchedule: false,
      date: '',
    };
    this.toggleSchedule = this.toggleSchedule.bind(this);
    this.toggleItemEntry = this.toggleItemEntry.bind(this);
  }

  componentDidMount() {
    db.ref('schedule').on('value', (snapshot) => {
      const { day } = snapshot.val();
      const date = moment().day(day);
      this.setState({
        date: date.format('MMM DD, YYYY'),
      });
    });
  }

  toggleSchedule() {
    this.setState({ showSchedule: !this.state.showSchedule });
  }

  toggleItemEntry() {
    this.setState({ showItemAdd: !this.state.showItemAdd });
  }

  render() {
    const { showItemAdd, date } = this.state;

    return (
      <Layout
        date={date}
        toggleSchedule={this.toggleSchedule}
        toggleItemEntry={this.toggleItemEntry}>
        <BasketWithDb anchor="" />
        <ShoppingListsWithDb anchor={NavLinks.LISTS} />
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
