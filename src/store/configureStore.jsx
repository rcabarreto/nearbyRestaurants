import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { isLoadingReducer, locationReducer, popularityReducer, restaurantsReducer } from 'reducers/reducers'

export default (initialState = {}) => {
  const reducer = combineReducers({
    isLoading: isLoadingReducer,
    location: locationReducer,
    popularity: popularityReducer,
    restaurants: restaurantsReducer,
  })

  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ))

  return store
}
