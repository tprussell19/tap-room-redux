import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.kegList).map((keg) => (
        <Keg
        whenKegClicked={props.onKegSelection}
        name={keg.name}
        brand={keg.brand}
        style={keg.style}
        abv={keg.abv}
        price={keg.price}
        pints={keg.pints}
        id={keg.id}
        key={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;