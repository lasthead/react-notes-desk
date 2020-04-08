import React, {useEffect, useState} from "react";
import AppFormEditItem from "../../components/AppFormEditItem/AppFormEditItem";
import "./edit.scss";
import AppNavButton from "../../components/AppNavButton/AppNavButton";
import { addNote, updateNote, removeNote } from "../../store/actions/notes.actions.js";
import { useHistory, useParams } from "react-router-dom";
import {useDispatch, useStore} from "react-redux";
import {getItemByIdApi} from "../../services/API";

function Edit(props) {
  const store = useStore();
  const params = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const asyncGetItemData = async function() {
    if(props.mode){
      return;
    }
    const result = await getItemByIdApi(params.id);
    setState(result.data);
  };

  useEffect( () => { asyncGetItemData(params.id) }, []);

  const handleRemoveItem = async function (id) {
    try {
      dispatch(await removeNote(id));
      history.push('/');
    } catch (e) {}
  };
  const history = useHistory();
  const actions = (formData) => {
    if(props.mode === 'add'){
      store.dispatch(addNote(formData));
    }
    else {
      store.dispatch(updateNote(formData));
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
          <AppFormEditItem handleRemoveItem={handleRemoveItem} {...state} goBack={handleClick} onSubmit={actions}/>
        </div>
      </div>
    </div>
  )
}

export default Edit;
