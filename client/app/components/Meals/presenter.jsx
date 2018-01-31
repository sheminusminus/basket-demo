import React from 'react';

import { getMealsHashMapFromSnapshotVals } from '../../utils';

import { ItemGroup } from './components';

import styles from './styles.scss';

const NoItems = () => (
  <div className={styles.empty}>Save some items as meals to see them here!</div>
);

class Meals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: {},
    };
  }

  componentDidMount() {
    const { listenToMeals } = this.props;
    listenToMeals(this.handleValues.bind(this));
  }

  handleValues(values) {
    const meals = getMealsHashMapFromSnapshotVals(values);
    this.setState({ meals });
  }

  render() {
    const { anchor, editItemQuantity, editItemName, addMealItemsToList } = this.props;
    const { meals } = this.state;

    const contents = Object.keys(meals).length ? (
      Object.keys(meals).map(key => (
        <ItemGroup
          handleAddItemsToList={addMealItemsToList}
          handleQuantity={editItemQuantity}
          handleName={editItemName}
          name={meals[key].name}
          items={meals[key].items}
          groupKey={key}
          key={key} />
      ))
    ) : <NoItems />;

    return (
      <div className={styles.meals} id={anchor}>
        <h4>Meals</h4>
        <div className={styles.mealsWrapper}>
          {contents}
        </div>
      </div>
    );
  }
}

export default Meals;
