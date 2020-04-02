import { NOTES_CONSTANTS } from '../constants/';

export function addNote(object) {
  return {
    type: NOTES_CONSTANTS.ADD_NOTE,
    object
  };
}

export function toggleNote(id) {
  return {
    type: NOTES_CONSTANTS.TOGGLE_NOTE,
    id
  };
}

export function removeNote(id) {
  return {
    type: NOTES_CONSTANTS.REMOVE_NOTE,
    id
  };
}
