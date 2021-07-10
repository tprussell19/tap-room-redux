import * as c from './../actions/ActionTypes';

const selectedKegReducer = (state = {}, action) => {
  const { name, brand, style, abv, price, pints, id } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      return {
        name: name,
        brand: brand,
        style: style,
        abv: abv,
        price: price,
        pints: pints,
        id: id
      }
    default:
      return state;
  }
}

export default selectedKegReducer;