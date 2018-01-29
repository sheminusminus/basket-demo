import React from 'react';

import {
  getAllItemsFromMap,
  getItemsHashMapFromSnapshotVals,
} from '../../utils';

import { BasketItem } from './components';

import styles from './styles.scss';

const NoItems = () => (
  <div className={styles.empty}>Add some items to your basket to see them here!</div>
);

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketItems: {},
    };
  }

  componentDidMount() {
    const { listenToBasket } = this.props;
    listenToBasket(this.handleValues.bind(this));
  }

  handleValues(values) {
    const basketItems = getItemsHashMapFromSnapshotVals(values);
    this.setState({ basketItems });
  }

  handleBasketPurchased() {
    const { handleBasketPurchased } = this.props;
    const { basketItems } = this.state;
    handleBasketPurchased(basketItems);
  }

  render() {
    const {
      anchor,
      handleRemoveItemFromBasket,
      editItemQuantity,
      editItemName,
    } = this.props;

    const { basketItems } = this.state;

    const items = getAllItemsFromMap(basketItems);

    const contents = items.length ? (
      <ul>
        {items.map(item => (
          <BasketItem
            handleQuantity={editItemQuantity}
            handleName={editItemName}
            handleRemoveItem={handleRemoveItemFromBasket}
            key={`basket-${item.id}`}
            item={item} />
        ))}
      </ul>
    ) : <NoItems />;

    return (
      <div className={styles.basket} id={anchor}>
        <div className={styles.header}>
          <h4>In the Basket</h4>
          {
            items.length > 0 &&
            <button
              className={styles.clear}
              onClick={this.handleBasketPurchased.bind(this)}>
              Mark All Purchased
            </button>
          }
        </div>
        {contents}
      </div>
    );
  }
}

export default Basket;
