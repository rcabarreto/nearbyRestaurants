import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as api from '../api/ZomatoAPI'

class RestaurantApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      apiResponse: ''
    };

    this.loadNearbyRestaurants = this.loadNearbyRestaurants.bind(this);
  }

  componentDidMount() {
    let {dispatch} = this.props;
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
    let response = api.getNearbyRestaurants(position).then(response => {
      this.setState({apiResponse: JSON.stringify(response)});
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

    let { apiResponse } = this.state;

    return (
      <React.Fragment>
        <h1>Nearby Restaurants</h1>
        <pre>{apiResponse}</pre>
      </React.Fragment>
    )
  }

}

export default connect()(RestaurantApp);