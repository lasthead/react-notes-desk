import React, {Component} from "react";
import { connect } from 'react-redux';
import "./AppNotesList.scss";
import AppListItem from "../AppListItem/AppListItem";
import PropTypes from 'prop-types';

function NotesList(state) {
  return (
    <div className="items__list">
      {
        state.notes.map((note, index) => {
            return (<AppListItem key={note.id ? note.id : index} {...note} onClick={() => toggleNote(note.id)}/>)
          }
        )
      }
    </div>
  )
}

function toggleNote(id) {
  return false;
}
// NotesList.propTypes = {
//   notes: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   toggleNote: PropTypes.func.isRequired
// }
const mapStateToProps = function(state) {
  return state;
}
export default connect(mapStateToProps)(NotesList)
