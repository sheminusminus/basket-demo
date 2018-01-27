import 'babel-polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import firebase from 'firebase';

import { Routes } from '../routes/components';

import config from '../config';

import { Layout } from '../root/components';

class App extends React.Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config.db);
    this.db = firebase.database();
  }

  render() {
    return (
      <Router>
        <Layout>
          <Routes db={this.db} />
        </Layout>
      </Router>
    );
  }
}

export default App;
