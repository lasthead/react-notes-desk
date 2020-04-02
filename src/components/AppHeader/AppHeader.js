import React, {Component} from "react";
import './AppHeader.scss';
import AppHeaderLoginBlock from "./AppHeaderLoginBlock/AppHeaderLoginBlock";
import {Link} from "react-router-dom";
import AppNavButton from "../AppNavButton/AppNavButton";

export default class AppHeader extends Component {

  render() {
    const handleClick = () => {
      this.props.history.push("/add");
    };
    return (
      <div className="header">
        <div className="header__inner_block">
          <Link to={'/'} className="header__item item__title">My notes</Link>
          <AppNavButton action={handleClick} className={"button header__item item__button--add"} title="+ Add new"/>
          <AppHeaderLoginBlock className="header__item item__login" />
        </div>
      </div>
    );
  }
}
