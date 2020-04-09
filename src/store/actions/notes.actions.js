import { NOTES_CONSTANTS } from '../constants/';
import { SESSION_CONSTANTS } from '../constants'

import {createNoteApi, getItemsListApi, updateNoteApi, removeNoteApi, getItemByIdApi} from "../../services/API";

export const addNote = (object) => async dispatch  => {
  try {
    dispatch({ type: SESSION_CONSTANTS.LOADING });
    await createNoteApi(object);
  } catch (e) {
    console.log('error');
  }
  dispatch({ type: SESSION_CONSTANTS.STOP_LOADING });
  dispatch({
    type: NOTES_CONSTANTS.ADD_NOTE,
    object
  });
};


export const getNotesList = () => async dispatch => {
  try {
    const response = await getItemsListApi();
    dispatch({
      type: NOTES_CONSTANTS.SET_NOTES_LIST,
      payload: response.data
    });
  }
  catch (e) {
    console.log('error');
  }
};

export const getNoteById = (id) => async dispatch => {
  try {
    const response = await getItemByIdApi(id);
    dispatch({
      type: NOTES_CONSTANTS.SET_NOTE_BY_ID,
      payload: response.data
    });
  }
  catch (e) {
    console.log('error');
  }
};

export const updateNote = (object) => async dispatch => {
  try {
    dispatch({ type: SESSION_CONSTANTS.LOADING });
    await updateNoteApi(object);
    dispatch({ type: SESSION_CONSTANTS.STOP_LOADING });
    dispatch({
      type: NOTES_CONSTANTS.UPDATE_NOTE,
      payload: object
    });
  } catch (e) {}
};

export const removeNote = (id) => async dispatch => {
  try {
    await removeNoteApi(id);
    dispatch({
      type: NOTES_CONSTANTS.REMOVE_NOTE,
      id
    });
  } catch (e) {}
};
