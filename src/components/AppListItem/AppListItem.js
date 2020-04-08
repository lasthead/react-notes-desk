import React from "react";
import "./AppListItem.scss";
import dayjs from 'dayjs';
import {timeSince} from "../../utils/baseHelper";

export default function AppListItem(props) {
  let timeRate = 1000;
  if (Date.now() > dayjs(props.updated_at).valueOf() + 3600 * timeRate) {
    timeRate = timeRate * 60 * 60;
  };

  const formatedDate = timeSince(new Date(dayjs(props.updated_at).valueOf() - timeRate));

  return (
    <div onClick={ () => props.onClick(props.id) } className="item item__container">
      <div className="item__title">{ props.name }</div>
      <div className="item__date"> {formatedDate} ago</div>
      <div className="item__text">
        { props.text }
      </div>
    </div>
  );
}
