import { combineReducers } from 'redux'
import {notesReducer, noteDetailReducer} from './notes.reducer'
import sessionReducer from './session.reducer'

export default combineReducers({
  notes: notesReducer,
  detailNote: noteDetailReducer,
  session: sessionReducer
})
