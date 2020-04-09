import React from "react";
import AppHeaderLoginBlock from "./AppHeaderLoginBlock/AppHeaderLoginBlock";
import {Link, useHistory} from "react-router-dom";
import AppNavButton from "../AppNavButton/AppNavButton";
import BaseTitle from "../BaseUI/BaseTitle";
import {logOut} from "../../store/actions";
import {useDispatch} from "react-redux";
import cls from "classnames";

import './AppHeader.scss';
import buttonStyles from '../AppNavButton/AppNavButton.module.scss';

export default function AppHeader() {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    history.push("/add");
  };
  const handleLogOut = (event) => {
    event.preventDefault();
    dispatch(logOut());
  };
  return (
    <div className="header">
      <div className="header__inner_block">
        <Link to={'/'} className="header__item item__title">
          <BaseTitle text={"My notes"}></BaseTitle>
        </Link>
        <button
          onClick={handleClick}
          className={cls(buttonStyles.button, buttonStyles.button__primary)}
        >
          + Add new
        </button>
        <AppHeaderLoginBlock logOut={handleLogOut} className="header__item item__login" />
      </div>
    </div>
  );
}
