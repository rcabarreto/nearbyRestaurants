import React  from 'react'
import { connect } from 'react-redux'

const Location = (props) => {

  let {location, dispatch} = props;

  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Restaurants nearby {location.title}, {location.city_name}</h1>
      </div>
    </section>
  )
};

export default connect(
  (state) => {
    return {
      location: state.location
    };
  }
)(Location);
