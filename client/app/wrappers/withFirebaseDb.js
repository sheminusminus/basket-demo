import React from 'react';

export default function withFirebaseDb(Component, db) {
  class ComponentWithDb extends React.Component {
    static handleAddItem(name, quantity = 1, recurring = false) {
      const { key } = db.ref('items').push();

      db.ref(`items/${key}`).set({
        name,
        quantity,
        recurring,
      });

      db.ref(`list/${key}`).set(true);
    }

    static handleRemoveItem(itemId) {
      db.ref('items').update({ [itemId]: null });
      db.ref('list').update({ [itemId]: null });
    }

    static handleAddItemToBasket(itemId) {
      db.ref('basket').update({ [itemId]: true });
      db.ref('list').update({ [itemId]: null });
    }

    static handleRemoveItemFromBasket(itemId) {
      db.ref('basket').update({ [itemId]: null });
      db.ref('list').update({ [itemId]: true });
    }

    static handleAddItemToList(itemId) {
      db.ref('list').update({ [itemId]: true });
    }

    static handleRemoveItemFromList(itemId) {
      db.ref('list').update({ [itemId]: null });
    }

    static listenToItems(callback) {
      db.ref('items').on('value', snapshot => callback(snapshot.val()));
    }

    static getItemsOnce(callback) {
      db.ref('items').once('value', snapshot => callback(snapshot.val()));
    }

    static listenToBasket(callback) {
      db.ref('basket').on('value', snapshot => callback(snapshot.val()));
    }

    static getBasketOnce(callback) {
      db.ref('basket').once('value', snapshot => callback(snapshot.val()));
    }

    static listenToMeals(callback) {
      db.ref('meals').on('value', snapshot => callback(snapshot.val()));
    }

    static getMealsOnce(callback) {
      db.ref('meals').once('value', snapshot => callback(snapshot.val()));
    }

    render() {
      const { ...props } = this.props;
      return (
        <Component
          db={db}
          listenToItems={ComponentWithDb.listenToItems}
          listenToBasket={ComponentWithDb.listenToBasket}
          listenToMeals={ComponentWithDb.listenToMeals}
          getItemsOnce={ComponentWithDb.listenToItems}
          getBasketOnce={ComponentWithDb.getBasketOnce}
          getMealsOnce={ComponentWithDb.getMealsOnce}
          handleAddItemToBasket={ComponentWithDb.handleAddItemToBasket}
          handleRemoveItemFromBasket={ComponentWithDb.handleRemoveItemFromBasket}
          handleRemoveItem={ComponentWithDb.handleRemoveItem}
          handleAddItem={ComponentWithDb.handleAddItem}
          handleAddItemToList={ComponentWithDb.handleAddItemToList}
          handleRemoveItemFromList={ComponentWithDb.handleRemoveItemFromList}
          { ...props } />
      );
    }
  }

  return ComponentWithDb;
}
