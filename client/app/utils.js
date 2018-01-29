export const getItemsHashMapFromSnapshotVals = (values) => {
  if (!values) return {};

  const keys = Object.keys(values);

  return keys.reduce((hashMap, key) => ({
    ...hashMap,
    [key]: {
      id: key,
      name: values[key].name,
      quantity: values[key].quantity,
      recurring: values[key].recurring,
    },
  }), {});
};

export const getRecurringItemsFromMap = (hm) => {
  const keys = Object.keys(hm);
  const filtered = keys.filter(key => hm[key].recurring);
  return filtered.map(key => ({
    ...hm[key],
  }));
};

export const getNonRecurringItemsFromMap = (hm) => {
  const keys = Object.keys(hm);
  const filtered = keys.filter(key => !hm[key].recurring);
  return filtered.map(key => ({
    ...hm[key],
  }));
};

export const getAllItemsFromMap = (hm) => {
  const keys = Object.keys(hm);
  return keys.map(key => ({
    ...hm[key],
  }));
};

export const getHashMapFromSnapshotValsForIds = (itemIds, values) => {
  if (!values || !itemIds) return {};

  return itemIds.reduce((hashMap, key) => ({
    ...hashMap,
    [key]: {
      id: key,
      name: values[key].name,
      quantity: values[key].quantity,
      recurring: values[key].recurring,
    },
  }), {});
};

export const getMealsWithItemsHashMapFromSnapshotVals = (mealValues, itemValues) => {
  if (!mealValues || !itemValues) return {};

  const mealKeys = Object.keys(mealValues);

  return mealKeys.reduce((hashMap, key) => ({
    ...hashMap,
    [key]: {
      id: key,
      name: mealValues[key].name,
      items: getAllItemsFromMap(
        getHashMapFromSnapshotValsForIds(
          Object.keys(mealValues[key].items),
          itemValues,
        ),
      ),
    },
  }), {});
};
