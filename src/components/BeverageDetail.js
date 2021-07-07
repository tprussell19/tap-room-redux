import React from 'react';
import PropTypes from 'prop-types';

function BeverageDetail(props) {
  const { beverage, onClickingDelete, onClickingOrderAPint } = props;

  const beverageSoldOut = beverage.pints <= 0;
  let orderButtonText;
  if (beverageSoldOut) {
    orderButtonText = "SOLD OUT"
  } else {
    orderButtonText = "Order a Pint"
  }

  return (
    <React.Fragment>
      <h2>{beverage.name} --- ${beverage.price}</h2>
      <h4>{beverage.brand}</h4>
      <p>Style: {beverage.style}</p>
      <p>ABV: {beverage.abv}%</p>
      <p>Pints remaining in keg:{beverage.pints}</p><button onClick={() => onClickingOrderAPint(beverage.id)} disabled={beverageSoldOut}>{orderButtonText}</button>
      <button onClick={props.onClickingEdit}>Update Beverage</button>
      <button onClick={() => onClickingDelete(beverage.id)}>Delete Beverage</button>
      <hr />
    </React.Fragment>
  );
}

BeverageDetail.propTypes = {
  beverage: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingOrderAPint: PropTypes.func
};

export default BeverageDetail;