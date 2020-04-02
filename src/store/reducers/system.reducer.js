import { NOTES_CONSTANTS } from "../constants/"

const defaultState = {
  isModalOpen: false
};
const notesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NOTES_CONSTANTS.ADD_NOTE:
      return [
        ...state,
        {
          id: action.object.id,
          name: action.object.name,
          text: action.object.text,
          completed: action.object.completed
        }
      ];
    case NOTES_CONSTANTS.TOGGLE_NOTE:
      return state.map(note =>
        (note.id === action.id)
          ? {...note, completed: !note.completed}
          : note
      );
    case NOTES_CONSTANTS.REMOVE_NOTE:
      return state.filter((note) => note.id !== action.id);
    default:
      return state
  }
};

export default notesReducer
