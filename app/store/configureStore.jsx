import { combineReducers, createStore, compose } from 'redux';
import { isLoadingReducer, locationReducer, popularityReducer, restaurantsReducer } from 'reducers'

export var configure = (initialState = {}) => {

  let reducer = combineReducers({
    isLoading: isLoadingReducer,
    location: locationReducer,
    popularity: popularityReducer,
    restaurants: restaurantsReducer
  });

  let store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
