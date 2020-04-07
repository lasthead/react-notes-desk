import { combineReducers } from 'redux'
import notesReducer from './notes.reducer'
import sessionReducer from './session.reducer'
import produce from "immer"

export default combineReducers({
  notes: notesReducer,
  session: sessionReducer
})
