export default (state = {}, action) => {
  const { name, brand, style, abv, price, pints, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
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
    default:
      return state;
  }
};