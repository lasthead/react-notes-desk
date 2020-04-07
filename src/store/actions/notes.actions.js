import { NOTES_CONSTANTS } from '../constants/';

export const addNote = (object) => {
  return {
    type: NOTES_CONSTANTS.ADD_NOTE,
    object
  };
};

export const updateNote = (object) => {
  return {
    type: NOTES_CONSTANTS.UPDATE_NOTE,
    object
  };
};

export const removeNote = (id) => {
  return {
    type: NOTES_CONSTANTS.REMOVE_NOTE,
    id
  };
};
