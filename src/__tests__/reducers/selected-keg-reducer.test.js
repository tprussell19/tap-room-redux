import selectedKegReducer from './../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {

  const kegData = {
    name: 'Sticky Hands',
    brand: 'Block 15',
    style: 'Hop Experience Ale',
    abv: '8.1',
    price: '6.50',
    pints: 124,
    id: 1,
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectedKegReducer({}, { type: null})).toEqual({});
  });

})