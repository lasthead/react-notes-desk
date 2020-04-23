import React, {useEffect, useState} from "react";
import "./AppListItem.scss";
import dayjs from 'dayjs';
import {timeSince} from "../../utils/baseHelper";

export default function AppListItem(props) {
  const [noteDateAgo, setNoteDateAgo] = useState(
    timeSince(new Date(dayjs(props.updated_at).valueOf()))
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNoteDateAgo(
        timeSince(new Date(dayjs(props.updated_at).valueOf()))
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [props.updated_at]);

  return (
    <div onClick={ () => props.onClick(props.id) } className="item item__container">
      <div className="item__title">{ props.name }</div>
      <div className="item__date"> {noteDateAgo} ago</div>
      <div className="item__text">
        { props.text }
      </div>
    </div>
  );
}
