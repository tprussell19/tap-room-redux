import * as c from './../actions/ActionTypes';

const selectedKegReducer = (state = null, action) => {
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
    case c.CLEAR_SELECTED_KEG:
      return null;
    default:
      return state;
  }
}

export default selectedKegReducer;