import React from 'react';

export default function withFirebaseDb(Component, db) {
  class ComponentWithDb extends React.Component {
    static handleAddItem(name, quantity = 1, recurring = false) {
      const { key } = db.ref('items').push();

      db.ref(`items/${key}`).set({
        id: key,
        name,
        quantity,
        recurring,
        inBasket: false,
      });
    }

    static editItemName(itemId, name, mealId) {
      if (mealId) {
        db.ref(`meals/${mealId}/items/${itemId}`).update({
          name,
        });
      } else {
        db.ref(`items/${itemId}`).update({
          name,
        });
      }
    }

    static editItemQuantity(itemId, quantity = 1, mealId) {
      if (mealId) {
        db.ref(`meals/${mealId}/items/${itemId}`).update({
          quantity,
        });
      } else {
        db.ref(`items/${itemId}`).update({
          quantity,
        });
      }
    }

    static editItemRecurring(itemId, recurring) {
      db.ref(`items/${itemId}`).update({
        recurring,
      });
    }

    static handleRemoveItem(itemId) {
      db.ref('items').update({ [itemId]: null });
    }

    static handleAddItemToBasket(itemId) {
      db.ref(`items/${itemId}`).update({ inBasket: true });
    }

    static handleRemoveItemFromBasket(itemId) {
      db.ref(`items/${itemId}`).update({ inBasket: false });
    }

    static listenToItems(callback) {
      db.ref('items').on('value', snapshot => callback(snapshot.val()));
    }

    static getItemsOnce(callback) {
      db.ref('items').once('value', snapshot => callback(snapshot.val()));
    }

    static listenToBasket(callback) {
      db.ref('items').orderByChild('inBasket').equalTo(true).on('value', snapshot => (
        callback(snapshot.val())
      ));
    }

    static getBasketOnce(callback) {
      db.ref('items').orderByChild('inBasket').equalTo(true).once('value', snapshot => (
        callback(snapshot.val())
      ));
    }

    static listenToMeals(callback) {
      db.ref('meals').on('value', snapshot => callback(snapshot.val()));
    }

    static getMealsOnce(callback) {
      db.ref('meals').once('value', snapshot => callback(snapshot.val()));
    }

    static listenToList(callback) {
      db.ref('items').orderByChild('inBasket').equalTo(false).on('value', snapshot => (
        callback(snapshot.val())
      ));
    }

    static getListOnce(callback) {
      db.ref('items').orderByChild('inBasket').equalTo(false).once('value', snapshot => (
        callback(snapshot.val())
      ));
    }

    static saveMeal(name, items) {
      const { key } = db.ref('meals').push();

      db.ref(`meals/${key}`).set({
        id: key,
        name,
        items,
      });
    }

    render() {
      const { ...props } = this.props;
      return (
        <Component
          db={db}
          editItemQuantity={ComponentWithDb.editItemQuantity}
          editItemName={ComponentWithDb.editItemName}
          editItemRecurring={ComponentWithDb.editItemRecurring}
          saveMeal={ComponentWithDb.saveMeal}
          listenToItems={ComponentWithDb.listenToItems}
          listenToBasket={ComponentWithDb.listenToBasket}
          listenToMeals={ComponentWithDb.listenToMeals}
          listenToList={ComponentWithDb.listenToList}
          getItemsOnce={ComponentWithDb.listenToItems}
          getBasketOnce={ComponentWithDb.getBasketOnce}
          getMealsOnce={ComponentWithDb.getMealsOnce}
          getListOnce={ComponentWithDb.getListOnce}
          handleAddItemToBasket={ComponentWithDb.handleAddItemToBasket}
          handleRemoveItemFromBasket={ComponentWithDb.handleRemoveItemFromBasket}
          handleRemoveItem={ComponentWithDb.handleRemoveItem}
          handleAddItem={ComponentWithDb.handleAddItem}
          { ...props } />
      );
    }
  }

  return ComponentWithDb;
}
