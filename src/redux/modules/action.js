export const ADD_SPEND = 'ADD_SPEND';
export const DELETE_SPEND = 'DELETE_SPEND';
export const EDIT_SPEND = 'EDIT_SPEND';

export const addSpend = (newSpend) => {
  return {
    type: ADD_SPEND,
    payload: newSpend
  };
};

export const deleteSpend = (id) => {
  return {
    type: DELETE_SPEND,
    payload: id
  };
};

export const editSpend = (updatedSpend) => {
  return {
    type: EDIT_SPEND,
    payload: updatedSpend
  };
};
