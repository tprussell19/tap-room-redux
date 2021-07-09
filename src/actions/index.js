export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id: id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { name, brand, style, abv, price, pints, id } = keg;
  return {
    type: "ADD_KEG",
    name: name,
    brand: brand,
    style: style,
    abv: abv,
    price: price,
    pints: pints,
    id: id
  }
}