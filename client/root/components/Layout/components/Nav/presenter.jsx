import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import { Paths } from '../../../../../routes/constants';

export default () => (
  <div>
    <Link to={Paths.HOME}>Home</Link>
    <Link to={Paths.LISTS}>Lists</Link>
    <Link to={Paths.BASKET}>Basket</Link>
    <Link to={Paths.MEALS}>Meals</Link>
  </div>
);
