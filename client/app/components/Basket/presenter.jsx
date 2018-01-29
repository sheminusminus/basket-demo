import React from 'react';

import { getBasketHashMapFromSnapshotVals } from '../../utils';

import { ItemBasket } from './components';

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
    const { getItemsOnce } = this.props;
    if (!values) return;

    const keys = Object.keys(values);
    getItemsOnce((itemValues) => {
      const basketItems = getBasketHashMapFromSnapshotVals(keys, itemValues);
      this.setState({ basketItems }, () => console.log(this.state.basketItems));
    });
  }

  render() {
    const { anchor } = this.props;

    return (
      <div className={styles.basket} id={anchor}>
        Basket
        <ItemBasket />
      </div>
    );
  }
}

export default Basket;
