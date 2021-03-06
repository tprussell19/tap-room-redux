import selectedKegReducer from './../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

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
    expect(selectedKegReducer(undefined, { type: null })).toEqual(null);
  });

  test('Should successfully return data from the selected keg', () => {
    const action = {
      type: c.SELECT_KEG,
      ...kegData
    };
    expect(selectedKegReducer(undefined, action)).toEqual(kegData);
  });

  test('Should return an empty object keg selection is cleared', () => {
    const action = {
      type: c.CLEAR_SELECTED_KEG
    };
    expect(selectedKegReducer(kegData, action)).toEqual(null);
  });

})