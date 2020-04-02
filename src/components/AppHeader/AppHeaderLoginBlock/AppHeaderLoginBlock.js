import React, {Component} from "react";
import "./AppHeaderLoginBlock.scss";
import {Link} from "react-router-dom";

export default class AppHeaderLoginBlock extends Component{
  render() {
    return (
      <div className={"user-info"}>
        <div className="user-info__name"> Logged in as example@elfsight.com </div>
        <Link to={"logout"}> Logout </Link>
      </div>
    );
  }
}
