import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'
import * as api from '../api/RestaurantsAPI'


import Location from './Location'
import Popularity from './Popularity'
import RestaurantList from './RestaurantList'


class RestaurantApp extends Component {

  constructor(props) {
    super(props);

    this.loadNearbyRestaurants = this.loadNearbyRestaurants.bind(this);
  }

  componentDidMount() {
    let { dispatch } = this.props;
    // dispatch(actions.isLoadingAction());
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.loadNearbyRestaurants, this.errorMessageHandler);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }


  loadNearbyRestaurants(position) {

    let { dispatch } = this.props;

    api.getNearbyRestaurants(position).then(response => {
      console.log(response);
      dispatch(actions.updateLocation(response.location));
      dispatch(actions.updatePopularity(response.popularity));
      dispatch(actions.addRestaurants(response.nearby_restaurants));

    }).catch(err => {
      console.log(err);
    });

  }

  errorMessageHandler(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        this.handleError({ code: 110, message: "User denied the request for Geolocation."});
        break;
      case error.POSITION_UNAVAILABLE:
        this.handleError({ code: 112, message: "Location information is unavailable."});
        break;
      case error.TIMEOUT:
        this.handleError({ code: 113, message: "The request to get user location timed out."});
        break;
      case error.UNKNOWN_ERROR:
        this.handleError({ code: 999, message: "An unknown error occurred."});
        break;
    }
  }


  render() {

    return (
      <React.Fragment>
        <Location/>
        <Popularity/>
        <RestaurantList/>
      </React.Fragment>
    )
  }

}

export default connect()(RestaurantApp);