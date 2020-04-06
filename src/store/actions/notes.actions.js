import { NOTES_CONSTANTS } from '../constants/';
import axios from "axios";

export function addNote(object) {
  return {
    type: NOTES_CONSTANTS.ADD_NOTE,
    object
  };
}

export function updateNote(object) {
  return {
    type: NOTES_CONSTANTS.UPDATE_NOTE,
    object
  };
}

export function removeNote(id) {
  return {
    type: NOTES_CONSTANTS.REMOVE_NOTE,
    id
  };
}
