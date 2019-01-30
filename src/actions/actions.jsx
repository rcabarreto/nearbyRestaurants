
export const isLoadingAction = () => ({
  type: 'TOGGLE_SHOW_LOADER',
})

export const updateLocation = location => ({
  type: 'UPDATE_LOCATION',
  location,
})

export const updatePopularity = popularity => ({
  type: 'UPDATE_POPULARITY',
  popularity,
})

export const addRestaurants = restaurants => ({
  type: 'ADD_RESTAURANTS',
  restaurants,
})
