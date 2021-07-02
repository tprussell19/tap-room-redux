import React from 'react';
import PropTypes from 'prop-types';

function Beverage(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBeverageClicked(props.id)}>
        <h3>{props.name} --- ${props.price}</h3>
        <p>{props.brand}</p>
        <p>{props.style} || ABV: {props.abv}%</p>
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
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenBeverageClicked: PropTypes.func
};

export default Beverage;