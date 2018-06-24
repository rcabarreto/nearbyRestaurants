import React  from 'react'
import { connect } from 'react-redux'

const Restaurant = (props) => {

  let { name, cuisines, location, featured_image, price_range, dispatch } = props;

  const inlineStyle = {
    height: '225px',
    width: '100%',
    display: 'block'
  };

  return (

    <div className="col-md-4">
      <div className="card mb-4 box-shadow">

        { featured_image && <img className="card-img-top" alt="Thumbnail [100%x225]" style={inlineStyle} src={featured_image}/>}

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
};

export default connect()(Restaurant);


