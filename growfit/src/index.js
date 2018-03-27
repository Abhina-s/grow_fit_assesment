import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
);


ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
