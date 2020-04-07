import React, {Component} from "react";
import "./AppNavButton.scss";
import { withRouter } from "react-router-dom";
function AppNavButton(props) {
  return(
    <button
      type={props.type}
      className={props.className}
      onClick={props.action}
    >
      {props.title}
    </button>
  )
}

export default withRouter(AppNavButton);
