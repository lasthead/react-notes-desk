import React from "react";
import { connect } from 'react-redux';
import "./AppNotesList.scss";
import AppListItem from "../AppListItem/AppListItem";
import { useHistory } from "react-router-dom";


function NotesList(props) {
  const history = useHistory();
  function toggleNote(id) {
    history.push("/edit/" + id );
  }

  return (
    <div className="items__list">
      {
        props.items.map((note, index) => {
            return (<AppListItem key={note.id ? note.id : index} {...note} onClick={toggleNote}/>)
          }
        )
      }
    </div>
  )
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

export default NotesList
