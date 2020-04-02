import React, {Component} from "react";
import "./AppFormEditItem.scss";
import AppNavButton from "../AppNavButton/AppNavButton";

export default class AppFormEditItem extends Component {
  render() {
    const handleSubmit = (event) => {
      // this.props.onSubmit;
      event.preventDefault();
    }
    return(
      <div className="form form__wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <input placeholder={"Write note title"} className="input input__title" type="text"/>
          </div>
          <div className="form__group">
            <textarea rows="12" placeholder={"Write note text"} className="input input__text"/>
          </div>
          <div className="form__group">
            <AppNavButton type="submit" className={'button__action--save'} title="Save" />
            <button className="button button__action--remove" />
          </div>
        </form>
      </div>
    )
  }
}
