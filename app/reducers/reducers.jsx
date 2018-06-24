
export let locationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...action
      };
    default:
      return state;
  }
};

export let popularityReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...action
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
        ...action.todos
      ];
    default:
      return state;
  }
};
