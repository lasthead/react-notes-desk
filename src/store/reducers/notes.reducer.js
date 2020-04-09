import { NOTES_CONSTANTS } from "../constants/"

const defaultState = [];
const noteDetailState = {};

export const notesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NOTES_CONSTANTS.ADD_NOTE:
      return [
        ...state,
        {
          id: action.object.id ? action.object.id : state.length,
          name: action.object.name,
          text: action.object.text,
          completed: action.object.completed
        }
      ];
    case NOTES_CONSTANTS.UPDATE_NOTE:
      return state.map(note => note.id === action.payload.id ?
        { ...note,  name: action.payload.name, text: action.payload.text } :
        note
      );
    case NOTES_CONSTANTS.REMOVE_NOTE:
      return state.filter((note) => note.id !== action.id);
    case NOTES_CONSTANTS.SET_NOTES_LIST:
      return [
        ...action.payload
      ];
    default:
      return state
  }
};

export const noteDetailReducer = (state = noteDetailState, action) => {
  if (action.type === NOTES_CONSTANTS.SET_NOTE_BY_ID) {
    return action.payload;
  } else {
    return state
  }
};
