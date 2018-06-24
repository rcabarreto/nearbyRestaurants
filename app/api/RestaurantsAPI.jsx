import axios from 'axios'

const RESTAURANT_API_URL = 'https://developers.zomato.com/api/v2.1';
const RESTAURANT_API_KEY = '10424a973965acc57172531f80be8c63';


export const getNearbyRestaurants = (position) => {

  return new Promise((resolve, reject) => {

    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);

    const apiEndPoint = 'geocode';

    axios.get(`${RESTAURANT_API_URL}/${apiEndPoint}?lat=${position.coords.latitude}&lon=${position.coords.longitude}`, { headers: { "user-key": RESTAURANT_API_KEY } }).then(response => {
      resolve(response.data);
    })

  });

};


export var filterRestaurants = (restaurants, filter) => {
  let filteredRestaurants = restaurants;

  // // Filter by showActive
  // filteredRestaurants = filteredRestaurants.filter((restaurant) => {
  //   return todo.completed || filter.showActive;
  // });
  //
  // // Filter by showCompleted
  // filteredRestaurants = filteredRestaurants.filter((restaurant) => {
  //   return !todo.completed || filter.showCompleted;
  // });
  //
  // // Sort todos with non-completed first
  // filteredRestaurants.sort((a, b) => {
  //   if (!a.completed && b.completed) {
  //     return -1;
  //   } else if (a.completed && !b.completed) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });

  return filteredRestaurants;

};

