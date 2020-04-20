import React, {useEffect, useState} from "react";
import "./AppNotesList.scss";
import AppListItem from "../AppListItem/AppListItem";
import { useHistory } from "react-router-dom";
import cls from "classnames";
import buttonStyles from "../AppNavButton/AppNavButton.module.scss";
import styles from "../../pages/edit/edit.module.scss";

function NotesList(props) {
  const renderedItemsCount = 3;
  const [state, updateState] = useState([]);
  const [stateSliced, updateStateSliced] = useState({
    isSliced: false,
    items: []
  });
  useEffect(() => {
    updateState(props.items);

    if(props.items.length > renderedItemsCount) {
      updateStateSliced({
        items: props.items.slice(0, renderedItemsCount),
        isSliced: true
      });
    }
    else {
      updateStateSliced({
        items: props.items,
        isSliced: false
      });
    }
  }, [props.items]);

  const handleLoadMore = () => {
    updateStateSliced({
      items: state.slice(0, stateSliced.items.length + renderedItemsCount),
      isSliced: true
    });
  };

  const history = useHistory();
  function toggleNote(id) {
    history.push("/edit/" + id );
  }

  return (
    <>
      <div className="items__list">
        {
          (stateSliced.items && stateSliced.items.length > 0) ? stateSliced.items.map((note, index) => {
              return (<AppListItem key={note.id ? note.id : index} {...note} onClick={toggleNote}/>)
            }
          ) : ''
        }
      </div>
      <div className={styles.list_actions}>
        {
          (stateSliced.items.length !== state.length) &&
          <button
            className={cls(buttonStyles.button, buttonStyles.button__primary)}
            onClick={handleLoadMore}
          > Load more </button>
        }
      </div>
    </>
  )
}

export default NotesList
