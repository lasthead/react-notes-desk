import React, {useEffect, useState} from 'react'
import AppNotesList from "../components/AppNotesList/AppNotesList";
import AppHeader from "../components/AppHeader/AppHeader";
import ProgressBar from "../components/BaseUI/ProgressBar/ProgressBar";

import "./notes.scss";
import {getItemsListApi} from "../services/API";

const asyncGetItemsList = async () => {
  return await getItemsListApi();
  //dispatch(await getNotesList());
};

export const Notes = (props) => {
  const [state, updateState] = useState([]);
  useEffect( () => { asyncGetItemsList().then((result) => {
    updateState(result.data);
  }) }, []);
  // console.log(notes);
  // let items = notes;
  const handleSearch = (event) => {
    // const searchString = event.target.value;
    // items = items.filter(item => item.name.indexOf(searchString) >= 0);
  };

  //console.log(items);
  return (
    <div>
      <AppHeader history={props.history} />
      { state.length < 1 && <ProgressBar/> }
      <div className="content__wrapper">
        <div className="block content__block">
          <div className="form__search">
            <input onChange={handleSearch} placeholder={"Search"} className="input input__search" type="text"/>
          </div>
          <AppNotesList items={state} history={props.history} />
        </div>
      </div>
    </div>
  );
}
