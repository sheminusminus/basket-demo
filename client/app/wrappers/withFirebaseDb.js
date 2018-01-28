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
      db.ref(`items/${itemId}`).set(null);
      db.ref(`list/${itemId}`).set(null);
    }

    static handleAddItemToBasket(itemId) {
      db.ref('basket').update({ [itemId]: true });
      db.ref(`list/${itemId}`).update(null);
    }

    static handleRemoveItemFromBasket(itemId) {
      db.ref('basket').update({ [itemId]: null });
      db.ref(`list/${itemId}`).update(true);
    }

    static handleAddItemToList(itemId) {
      db.ref('list').update({ [itemId]: true });
    }

    static handleRemoveItemFromList(itemId) {
      db.ref('list').update({ [itemId]: null });
    }

    render() {
      const { ...props } = this.props;
      return (
        <Component
          db={db}
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
