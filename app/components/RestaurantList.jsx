import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as api from '../api/RestaurantsAPI'

import Restaurant from './Restaurant'

class RestaurantList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let { restaurants } = this.props;

    let renderRestaurants = () => {

      let filteredRestaurants = api.filterRestaurants(restaurants, '');

      if (filteredRestaurants.length === 0) {
        return (
          <p className="message">No restaurants nearby</p>
        );
      }

      return filteredRestaurants.map((restaurant) => {
        return (
          <Restaurant key={restaurant.restaurant.id} {...restaurant.restaurant}/>
        );
      });
    };

    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">

            {renderRestaurants()}

          </div>
        </div>
      </div>
    )
  }

}

export default connect((state) => { return {
  restaurants: state.restaurants
} })(RestaurantList);