import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id: id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { name, brand, style, abv, price, pints, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    style: style,
    abv: abv,
    price: price,
    pints: pints,
    id: id
  }
}