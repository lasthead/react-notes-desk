import React, {useCallback, useEffect, useState} from 'react'
import "./notes.scss";
import AppNotesList from "../components/AppNotesList/AppNotesList";
import AppHeader from "../components/AppHeader/AppHeader";
import {useDispatch, useSelector} from "react-redux";
import {getNotesList} from "../store/actions";

export default function Notes(props) {
  const dispatch = useDispatch();
  const asyncGetItemsList = async () => {
    dispatch(await getNotesList());
  };
  useEffect( () => { asyncGetItemsList() }, []);

  const notes = useSelector(state => state.notes);
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
      <div className="content__wrapper">
        <div className="block content__block">
          <div className="form__search">
            <input onChange={handleSearch} placeholder={"Search"} className="input input__search" type="text"/>
          </div>
          <AppNotesList items={notes} history={props.history} />
        </div>
      </div>
    </div>
  );
}
