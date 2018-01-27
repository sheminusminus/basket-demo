import React from 'react';
import { Route } from 'react-router-dom';

import { Paths } from '../../constants';
import { withFirebaseDb } from '../../../root/wrappers';

import { ItemList, ItemGroup, ItemEntry, ItemBasket } from '../../../root/components';

const Routes = ({ db }) => (
  <div>
    <Route path={Paths.LISTS} component={withFirebaseDb(ItemList, db)} />
    <Route path={Paths.BASKET} component={withFirebaseDb(ItemBasket, db)} />
    <Route path={Paths.MEALS} component={withFirebaseDb(ItemGroup, db)} />
    <Route path={Paths.HOME} component={withFirebaseDb(ItemEntry, db)} />
  </div>
);

export default Routes;
