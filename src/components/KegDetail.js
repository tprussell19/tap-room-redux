import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingOrderAPint } = props;

  const kegSoldOut = keg.pints <= 0;
  let orderButtonText;
  if (kegSoldOut) {
    orderButtonText = "SOLD OUT"
  } else {
    orderButtonText = "Order a Pint"
  }

  return (
    <React.Fragment>
      <h2>{keg.name} --- ${keg.price}</h2>
      <h4>{keg.brand}</h4>
      <p>Style: {keg.style}</p>
      <p>ABV: {keg.abv}%</p>
      <p>Pints remaining in keg:{keg.pints}</p><button onClick={() => onClickingOrderAPint(keg.id)} disabled={kegSoldOut}>{orderButtonText}</button>
      <button onClick={props.onClickingEdit}>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingOrderAPint: PropTypes.func
};

export default KegDetail;