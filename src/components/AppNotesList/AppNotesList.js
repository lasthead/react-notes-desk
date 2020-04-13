import React from "react";
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
        props.items.length > 0 ? props.items.map((note, index) => {
            return (<AppListItem key={note.id ? note.id : index} {...note} onClick={toggleNote}/>)
          }
        ) : ''
      }
    </div>
  )
}

export default NotesList
