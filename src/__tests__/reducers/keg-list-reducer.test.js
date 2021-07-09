import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    name: 'Sticky Hands',
    brand: 'Block 15',
    style: 'Hop Experience Ale',
    abv: '8.1',
    price: '6.50',
    pints: 124,
    id: 1,
  }

  const currentState = {
    1: {name: 'Sticky Hands',
    brand: 'Block 15',
    style: 'Hop Experience Ale',
    abv: '8.1',
    price: '6.50',
    pints: 124,
    id: 1,},
    2: {name: 'keg 2',
    brand: 'another brewery',
    style: 'IPA',
    abv: '5.3',
    price: '5',
    pints: 124,
    id: 2,}
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, style, abv, price, pints, id } = kegData;
    action = {
      type: "ADD_KEG",
      name: name,
      brand: brand,
      style: style,
      abv: abv,
      price: price,
      pints: pints,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        style: style,
        abv: abv,
        price: price,
        pints: pints,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: 'keg 2',
      brand: 'another brewery',
      style: 'IPA',
      abv: '5.3',
      price: '5',
      pints: 124,
      id: 2,}
    });
  });

});