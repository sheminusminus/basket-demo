import React from 'react';

import { getMealsWithItemsHashMapFromSnapshotVals } from '../../utils';

import { ItemGroup } from './components';

import styles from './styles.scss';

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
    const { getItemsOnce } = this.props;
    getItemsOnce((itemValues) => {
      const meals = getMealsWithItemsHashMapFromSnapshotVals(values, itemValues);
      this.setState({ meals }, () => console.log(this.state.meals));
    });
  }

  render() {
    const { anchor } = this.props;
    const { meals } = this.state;

    return (
      <div className={styles.meals} id={anchor}>
        Meals
        {Object.keys(meals).map(key => (
          <ItemGroup
            name={meals[key].name}
            items={meals[key].items}
            groupKey={key}
            key={key} />
        ))}
      </div>
    );
  }
}

export default Meals;
