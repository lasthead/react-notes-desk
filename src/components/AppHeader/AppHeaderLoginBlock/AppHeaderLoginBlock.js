import React, {Component} from "react";
import "./AppHeaderLoginBlock.scss";

export default class AppHeaderLoginBlock extends Component{
  render() {
    return (
      <div>
        <div className="block__username"> Logged in as example@elfsight.com </div>
        <button className="block__button--action"> Logout </button>
      </div>
    );
  }
}
