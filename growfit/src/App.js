import React, { Component } from 'react';
import {
  Router,
  Route
} from 'react-router-dom';
import history from './history';
import './App.css';

import Question from './containers/Question';
import Result from './containers/Result';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/question" exact component={Question} />
          <Route path="/result" exact component={Result} />
        </div>
      </Router>
    );
  }
}

export default App;
