import React from 'react';
import { render } from 'react-dom';

import { Nav } from './components';

export default ({ children }) => (
  <div>
    <Nav />
    {children}
  </div>
);
