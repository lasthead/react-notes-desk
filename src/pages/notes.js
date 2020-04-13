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
  const [preloader, updatePreloader] = useState(false);
  useEffect( () => {
    updatePreloader(true);
    asyncGetItemsList().then(result => {
      dispatch(setNotesList(result.data));
      updatePreloader(false);
    });
  }, []);

  return (
    <div>
      <AppHeader history={props.history} />
      { preloader && <ProgressBar/> }
      <div className="content__wrapper">
        <div className="block content__block">
          <FilteredItemsList items={store.getState().notes} />
        </div>
      </div>
    </div>
  );
};
