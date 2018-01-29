import React from 'react';

import { getMealsHashMapFromSnapshotVals } from '../../utils';

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
    const meals = getMealsHashMapFromSnapshotVals(values);
    this.setState({ meals }, () => console.log(this.state.meals));
  }

  render() {
    const { anchor, editItemQuantity, editItemName } = this.props;
    const { meals } = this.state;

    return (
      <div className={styles.meals} id={anchor}>
        <h4>Meals</h4>
        {Object.keys(meals).map(key => (
          <ItemGroup
            handleQuantity={editItemQuantity}
            handleName={editItemName}
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
