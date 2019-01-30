import React  from 'react'
import { connect } from 'react-redux'

const Popularity = (props) => {

  let {popularity, dispatch} = props;

  return (
    <h4>Popularity: {popularity.popularity}, Night life index: {popularity.nightlife_index}</h4>
  )
};

export default connect(
  (state) => {
    return {
      popularity: state.popularity
    };
  }
)(Popularity);
