import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as api from '../api/RestaurantsAPI'

import Restaurant from './Restaurant'

class RestaurantList extends Component {
  render() {
    const { restaurants } = this.props

    const renderRestaurants = () => {
      const filteredRestaurants = api.filterRestaurants(restaurants, '')

      if (filteredRestaurants.length === 0) { return <p className="message">No restaurants nearby</p> }


      return filteredRestaurants.map(restaurant => (
        <Restaurant key={restaurant.restaurant.id} {...restaurant.restaurant} />
      ))
    }

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

RestaurantList.propTypes = {
  restaurants: PropTypes.node.isRequired,
}

export default connect(state => ({
  restaurants: state.restaurants,
}))(RestaurantList)
