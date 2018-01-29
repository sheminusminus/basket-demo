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

export const getItemsHashMapFromSnapshotFilteringIds = (filterIds, values) => {
  if (!values) return {};

  const keys = Object.keys(values);
  const filtered = keys.filter(key => !filterIds.includes(key));

  return filtered.reduce((hashMap, key) => ({
    ...hashMap,
    [key]: {
      id: key,
      name: values[key].name,
      quantity: values[key].quantity,
      recurring: values[key].recurring,
    },
  }), {});
};

export const getAllItemsFromMap = (hm) => {
  const keys = Object.keys(hm);
  return keys.map(key => ({
    ...hm[key],
  }));
};

export const getMealsHashMapFromSnapshotVals = (values) => {
  if (!values) return {};

  const mealKeys = Object.keys(values);

  return mealKeys.reduce((hashMap, key) => ({
    ...hashMap,
    [key]: {
      id: key,
      name: values[key].name,
      items: getAllItemsFromMap(values[key].items),
    },
  }), {});
};
