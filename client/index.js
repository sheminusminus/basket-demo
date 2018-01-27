import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './app';

const Main = () => (
  <App />
);

render(
  <Main />,
  document.querySelector('#app-root'),
);
