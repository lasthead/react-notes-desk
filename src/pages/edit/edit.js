import React from "react";
import AppFormEditItem from "../../components/AppFormEditItem/AppFormEditItem";
import "./edit.scss";
import AppNavButton from "../../components/AppNavButton/AppNavButton";
import { addNote, updateNote } from "../../store/actions/notes.actions.js";
import { useHistory, useParams } from "react-router-dom";
import {useSelector, useStore} from "react-redux";

function Edit(props) {
  const store = useStore();
  const params = useParams();
  const object = useSelector(state => state.notes[params.id]);
  const history = useHistory();
  const actions = (formData) => {
    if(params.mode === 'edit'){
      store.dispatch(updateNote(formData));
    }
    else {
      store.dispatch(addNote(formData));
    }
    history.push('/');
  };
  const handleClick = () => {
    history.push("/");
  };
  return(
    <div>
      <div className="content__wrapper container__edit">
        <div className="block content__block">
          <AppNavButton action={handleClick} className={'button button__nav button__action--prev'} />
          <AppFormEditItem {...object} goBack={handleClick} onSubmit={actions}/>
        </div>
      </div>
    </div>
  )
}

export default Edit;
