import React from 'react';

import { MealItem, Actions } from './components';

import styles from './styles.scss';

class ItemGroup extends React.Component {
  handleAddItemsToList() {
    const { groupKey, handleAddItemsToList } = this.props;
    handleAddItemsToList(groupKey);
  }

  render() {
    const {
      groupKey,
      name = '',
      items = [],
      handleName,
      handleQuantity,
    } = this.props;

    return (
      <div className={styles.groupWrapper}>
        <div className={styles.groupHeader}>
          <h5>{name}</h5>
          <Actions handleAddItemsToList={this.handleAddItemsToList.bind(this)}/>
        </div>
        <ul>
          {items.map(item => (
            <MealItem
              mealId={groupKey}
              handleName={handleName}
              handleQuantity={handleQuantity}
              key={`${groupKey}-${item.id}`}
              item={item}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemGroup;
