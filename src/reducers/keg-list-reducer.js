import * as c from './../actions/ActionTypes';

const kegListReducer = (state = {}, action) => {
  const { name, brand, style, abv, price, pints, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          style: style,
          abv: abv,
          price: price,
          pints: pints,
          id: id
        }
      });
    case c.DELETE_KEG:
      let newState = { ...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default kegListReducer;