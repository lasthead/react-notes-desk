import React from "react";
import styles from "./AppNavButton.module.scss";
import { withRouter } from "react-router-dom";
import cls from "classnames";
function AppNavButton(props) {
  return(
    <button
      type={props.type}
      className={cls(styles.button, styles.button__action_prev, props.className)}
      onClick={props.action}
    >
      {props.title}
    </button>
  )
}

export default withRouter(AppNavButton);
