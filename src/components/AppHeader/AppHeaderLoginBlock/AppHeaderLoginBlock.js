import React, {Component} from "react";
import "./AppHeaderLoginBlock.scss";

export default function AppHeaderLoginBlock(props) {
  return (
    <div className={"user-info"}>
      <div className="user-info__name"> Logged in as example@elfsight.com </div>
      <span className="link__logout" onClick={props.logOut}>Logout</span>
    </div>
  );
}
