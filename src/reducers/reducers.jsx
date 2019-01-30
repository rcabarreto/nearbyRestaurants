
export var isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_LOADER':
      return !state;
    default:
      return state;
  }
};

export let locationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return {
        ...action.location
      };
    default:
      return state;
  }
};

export let popularityReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_POPULARITY':
      return {
        ...action.popularity
      };
    default:
      return state;
  }
};

export let restaurantsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESTAURANTS':
      return [
        ...state,
        ...action.restaurants
      ];
    default:
      return state;
  }
};
