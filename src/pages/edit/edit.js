import React, {useEffect, useState} from "react";
import AppFormEditItem from "../../components/AppFormEditItem/AppFormEditItem";
import { addNote, updateNote, removeNote } from "../../store/actions";
import { useHistory, useParams } from "react-router-dom";
import {useDispatch, useStore} from "react-redux";
import {getItemByIdApi} from "../../services/API";
import ProgressBar from "../../components/BaseUI/ProgressBar/ProgressBar";
import cls from "classnames";

import styles from "./edit.module.scss";
import buttonStyles from "../../components/AppNavButton/AppNavButton.module.scss";

function Edit(props) {
  const store = useStore();
  const params = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    item: {},
    preloader: true
  });
  const asyncGetItemData = async function() {
    if(props.mode){
      setState({
        ...state.item,
        preloader: false
      });
      return;
    }
    const result = await getItemByIdApi(params.id);
    setState({
      item: result.data,
      preloader: false
    })
  };

  const handleRemoveItem = function (id) {
    store.dispatch(removeNote(id));
    history.push('/');
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
  useEffect( () => { asyncGetItemData(params.id).then(null) }, []);

  return(
    <div>
      { state.preloader && <ProgressBar className={styles.container__progressbar} /> }
      <div className="content__wrapper container__edit">
        <div className="block content__block">
          <button
            className={cls(buttonStyles.button, buttonStyles.button__action_prev, styles.button__nav)}
            onClick={handleClick}
          />
          <AppFormEditItem removeButton={props.mode !== 'add'} handleRemoveItem={handleRemoveItem} {...state.item} goBack={handleClick} onSubmit={actions}/>
        </div>
      </div>
    </div>
  )
}

export default Edit;
