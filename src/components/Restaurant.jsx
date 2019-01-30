/* eslint camelcase: "off" */

import React from 'react'
import PropTypes from 'prop-types'

const Restaurant = (props) => {
  const {
    name, cuisines, location, featured_image, price_range,
  } = props

  const inlineStyle = {
    height: '225px',
    width: '100%',
    display: 'block',
  }

  return (

    <div className="col-md-4">
      <div className="card mb-4 box-shadow">

        { featured_image && <img className="card-img-top" alt="Thumbnail [100%x225]" style={inlineStyle} src={featured_image} />}

        <div className="card-body">
          <h4>{name}</h4>
          <h6>{cuisines}</h6>

          <p className="card-text">Location: {location.address}</p>

          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">Price range: {price_range}</small>
          </div>
        </div>
      </div>
    </div>

  )
}

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  cuisines: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  featured_image: PropTypes.string.isRequired,
  price_range: PropTypes.string.isRequired,
}

export default Restaurant
