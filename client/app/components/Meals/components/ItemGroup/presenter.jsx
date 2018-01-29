import React from 'react';

export default ({ groupKey, name = '', items = [] }) => (
  <div>
    <h4>{name}</h4>
    <ul>
      {items.map(item => <li key={`${groupKey}-${item.id}`}>{item.name}</li>)}
    </ul>
  </div>
);
