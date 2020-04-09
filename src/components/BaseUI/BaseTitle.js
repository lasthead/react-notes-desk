import React from "react";
import styles from "./baseTitile.module.scss";

export default function BaseTitle(props) {
  return(
    <h1 className={styles.title}>{props.text}</h1>
  )
}
