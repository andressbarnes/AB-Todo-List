import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { devToolsEnhancer } from 'redux-devtools-extension';
import initialState from './reducers/initialState';

require('./index.css');

//const store = createStore(rootReducer);

const store = createStore(
  rootReducer,
  initialState,
  devToolsEnhancer()
  // Specify custom devTools options
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
