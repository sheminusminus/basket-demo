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

export const getBasketHashMapFromSnapshotVals = (basketItemIds, values) => {
  if (!values || !basketItemIds) return {};

  return basketItemIds.reduce((hashMap, key) => ({
    ...hashMap,
    [key]: {
      id: key,
      name: values[key].name,
      quantity: values[key].quantity,
      recurring: values[key].recurring,
    },
  }), {});
};
