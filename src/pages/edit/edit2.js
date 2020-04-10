import React, {useEffect, useState} from "react";
import {getItemsListApi} from "../../services/API";


export const NotesDesk = () => {
  const [items, setItems] =  useState();

  useEffect(() => {
    getItemsListApi().then(result => setItems(result.items));
  }, []);

  return <FilteredItems dataItems={items}/>;
};

const FilteredItems = (dataItems) => {
  const [filter, setFilter] = useState({});
  const [items, setItems] = useState(dataItems.filter((item => item.name === filter.name)));

  useEffect(() => {
    setItems(dataItems.filter((item => item.name === filter.name)));
  }, [filter, dataItems]);

  return <>
    <Filter filter={filter} setFilter={setFilter}/>
    <List items={items}/>
    </>;
};
