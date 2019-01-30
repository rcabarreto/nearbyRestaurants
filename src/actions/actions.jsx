
export var isLoadingAction = () => {
  return {
    type: 'TOGGLE_SHOW_LOADER'
  }
};

export const updateLocation = (location) => {
  return {
    type: 'UPDATE_LOCATION',
    location
  };
};

export const updatePopularity = (popularity) => {
  return {
    type: 'UPDATE_POPULARITY',
    popularity
  }
};

export const addRestaurants = (restaurants) => {
  return {
    type: 'ADD_RESTAURANTS',
    restaurants
  };
};
