import beverageListReducer from '../../reducers/beverage-list-reducer';

describe('beverageListReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(beverageListReducer({}, { type: null })).toEqual({});
  });

});