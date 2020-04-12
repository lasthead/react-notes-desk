import React, {useEffect, useState} from 'react'
import AppHeader from "../components/AppHeader/AppHeader";
import ProgressBar from "../components/BaseUI/ProgressBar/ProgressBar";
import { setNotesList } from "../store/actions";
import {getItemsListApi} from "../services/API";
import {useDispatch, useStore} from "react-redux";

import "./notes.scss";
import {FilteredItemsList} from "../components/FilteredItemsList/FilteredItemsList";

const asyncGetItemsList = async () => {
  return await getItemsListApi();
  //dispatch(await getNotesList());
};

export const Notes = (props) => {
  const [state, updateState] = useState([]);
  useEffect( () => {
    asyncGetItemsList().then(result => updateState(result.data))
  }, []);
  //const dispatch = useDispatch();
  // dispatch(setNotesList(state));
  //useFetching;

  // let items = notes;


  //console.log(items);
  return (
    <div>
      <AppHeader history={props.history} />
      { state.length < 1 && <ProgressBar/> }
      <div className="content__wrapper">
        <div className="block content__block">
          <FilteredItemsList items={state} />
        </div>
      </div>
    </div>
  );
}
