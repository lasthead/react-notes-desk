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
};

export const Notes = (props) => {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect( () => {
    asyncGetItemsList().then(result => {
      dispatch(setNotesList(result.data));
    });
  }, []);

  return (
    <div>
      <AppHeader history={props.history} />
      { store.getState().notes.length < 1 && <ProgressBar/> }
      <div className="content__wrapper">
        <div className="block content__block">
          <FilteredItemsList items={store.getState().notes} />
        </div>
      </div>
    </div>
  );
};
