import React from 'react';

export default ({ items = [] }) => (
  <ul>
    {items.map(item => <li key={`basket-${item.id}`}>{item.name}</li>)}
  </ul>
);
