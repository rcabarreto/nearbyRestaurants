
export const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_SHOW_LOADER':
    return !state
  default:
    return state
  }
}

export const locationReducer = (state = {}, action) => {
  switch (action.type) {
  case 'UPDATE_LOCATION':
    return {
      ...action.location,
    }
  default:
    return state
  }
}

export const popularityReducer = (state = {}, action) => {
  switch (action.type) {
  case 'UPDATE_POPULARITY':
    return {
      ...action.popularity,
    }
  default:
    return state
  }
}

export const restaurantsReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_RESTAURANTS':
    return [
      ...state,
      ...action.restaurants,
    ]
  default:
    return state
  }
}
