import { combineReducers, createStore, compose } from 'redux';
import { locationReducer, popularityReducer, restaurantsReducer } from 'reducers'

export var configure = (initialState = {}) => {

  let reducer = combineReducers({
    loader: loaderReducer,
    user: userReducer
  });

  let store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
