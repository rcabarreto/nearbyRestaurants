import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LoaderImage from '../images/ajax-loader-white.gif'

const restaurantLoader = (props) => {
  const { isLoading } = props

  if (!isLoading) {
    return null
  }

  return (
    <main id="loader" className="inner cover">
      <p id="loader" className="lead"><img alt="loader" src={LoaderImage} /></p>
    </main>
  )
}

restaurantLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default connect(
  state => ({
    isLoading: state.isLoading,
  }),
)(restaurantLoader)
