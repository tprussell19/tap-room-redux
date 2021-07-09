import formVisibleReducer from "../../reducers/form-visible-reducer";

describe("formVisibleReducer", () => {

  test('Should return default state if no action is recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  })

});