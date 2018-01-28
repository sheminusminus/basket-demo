import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './app';

const Root = () => (
  <App />
);

render(
  <Root />,
  document.querySelector('#app-root'),
);
