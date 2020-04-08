import React from "react";
import "./AppListItem.scss";
import dayjs from 'dayjs';
import {timeSince} from "../../utils/baseHelper";

export default function AppListItem(props) {
  const minutes = 60*60*100;
  const formatedDate = timeSince(new Date(dayjs(props.updated_at).valueOf() - minutes));

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
