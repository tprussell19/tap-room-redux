import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(a.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(a.addKeg({name: 'Sticky Hands', brand: 'Block 15', style: 'Hop Experience Ale', abv: '8.1', price: '6.50', pints: 124, id: 1,})).toEqual({
      type: c.ADD_KEG,
      name: 'Sticky Hands',
      brand: 'Block 15',
      style: 'Hop Experience Ale',
      abv: '8.1',
      price: '6.50',
      pints: 124,
      id: 1,
    })
  })

});