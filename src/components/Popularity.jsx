import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Popularity = (props) => {
  const { popularity } = props

  return (
    <h4>Popularity: {popularity.popularity}, Night life index: {popularity.nightlife_index}</h4>
  )
}

Popularity.propTypes = {
  popularity: PropTypes.node.isRequired,
}

export default connect(
  state => ({
    popularity: state.popularity,
  }),
)(Popularity)
