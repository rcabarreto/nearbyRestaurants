import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Location = (props) => {
  const { location } = props

  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Restaurants nearby {location.title}, {location.city_name}</h1>
      </div>
    </section>
  )
}

Location.propTypes = {
  location: PropTypes.node.isRequired,
}

export default connect(
  state => ({
    location: state.location,
  }),
)(Location)
