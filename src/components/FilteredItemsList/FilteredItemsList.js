import React, {useEffect, useState} from "react";
import AppNotesList from "../AppNotesList/AppNotesList";

export const FilteredItemsList = (props) => {
  const [state, updateState] = useState({});

  useEffect(() => {
    updateState(props.items);
  }, [props.items]);

  const handleSearch = (event) => {
    const searchString = event.target.value;
    if(event.target.value.length) {
      const findItemsByName = state.filter(
        o => o.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0
      );
      if(findItemsByName.length) {
        updateState(findItemsByName);
      }
      else {
        const findItemsByText = state.filter(
          o => o.text.toLowerCase().indexOf(searchString.toLowerCase()) >= 0
        );
        updateState(findItemsByText);
      }
    }
    else {
      updateState(props.items);
    }
  };
  return (
    <>
      <div className="form__search">
        <input onChange={handleSearch} placeholder={"Search"} className="input input__search" type="text"/>
      </div>
      <AppNotesList items={state} />
    </>
  )
};
