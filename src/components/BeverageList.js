import React from 'react';
import Beverage from './Beverage';
import PropTypes from 'prop-types';

function BeverageList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.beverageList.map((beverage) => (
        <Beverage
        whenBeverageClicked={props.onBeverageSelection}
        name={beverage.name}
        brand={beverage.brand}
        style={beverage.style}
        abv={beverage.abv}
        price={beverage.price}
        quantity={beverage.quantity}
        id={beverage.id}
        key={beverage.id}
        />
      ))}
    </React.Fragment>
  );
}

BeverageList.propTypes = {
  beverageList: PropTypes.array,
  onBeverageSelection: PropTypes.func
};

export default BeverageList;