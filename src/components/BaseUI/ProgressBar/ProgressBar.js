import React from "react";
import styles from "./ProgressBar.module.scss"
import cls from "classnames";
export default function ProgressBar(props) {
  return (
    <div className={cls(styles.progressbar, props.className)} />
  )
}
