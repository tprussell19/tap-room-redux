import React from 'react';
import PropTypes from 'prop-types';

function Beverage(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBeverageClicked(props.id)}>
        <h2>{props.name} --- ${props.price}</h2>
        <h3>{props.brand}</h3>
        <p>{props.style}</p>
        <p>ABV: {props.abv}%</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Beverage.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenBeverageClicked: PropTypes.func
};

export default Beverage;