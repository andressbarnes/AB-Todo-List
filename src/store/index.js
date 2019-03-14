import { createStore } from 'redux';
import rootReducer from '../reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import initialState from '../reducers/initialState';

//const store = createStore(rootReducer);

const store = createStore(
  rootReducer,
  initialState,
  devToolsEnhancer()
  // Specify custom devTools options
);

export default store;
