import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id: id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => ({
    type: c.ADD_KEG,
    ...keg
});

export const selectKeg = (keg) => ({
    type: c.SELECT_KEG,
    ...keg
});

export const clearSelectedKeg = () => ({
    type: c.CLEAR_SELECTED_KEG
});