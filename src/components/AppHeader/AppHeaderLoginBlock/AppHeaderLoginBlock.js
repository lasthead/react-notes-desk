import React from "react";
import "./AppHeaderLoginBlock.scss";
import {useSelector} from "react-redux";

export default function AppHeaderLoginBlock(props) {
  const userName = useSelector( state => state.session.user ? state.session.user.name : '');
  return (
    <div className={"user-info"}>
      <div className="user-info__name"> Logged in as {userName} </div>
      <a href="#" className="link__action" onClick={props.logOut}>Logout</a>
    </div>
  );
}
