import React from 'react';

import {
  getAllItemsFromMap,
  getItemsHashMapFromSnapshotVals,
} from '../../utils';

import { BasketItem } from './components';

import styles from './styles.scss';

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
    this.setState({ basketItems }, () => console.log(this.state.basketItems));
  }

  render() {
    const { anchor, handleRemoveItemFromBasket } = this.props;
    const { basketItems } = this.state;

    const items = getAllItemsFromMap(basketItems);

    return (
      <div className={styles.basket} id={anchor}>
        Basket
        <ul>
          {items.map(item => (
            <BasketItem
              handleRemoveItem={handleRemoveItemFromBasket}
              key={`basket-${item.id}`}
              item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Basket;
