import React, {Component} from "react";
import AppFormEditItem from "../../components/AppFormEditItem/AppFormEditItem";
import "./edit.scss";
import AppNavButton from "../../components/AppNavButton/AppNavButton";
import { addNote } from "../../store/actions/notes.actions.js";
import { bindActionCreators } from "redux";

export default class Edit extends Component {
  render() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(addNote, dispatch);
    const handleClick = () => {
      this.props.history.push("/");
    };
    return(
      <div>
        <div className="content__wrapper container__edit">
          <div className="block content__block">
            <AppNavButton action={handleClick} className={'button button__nav button__action--prev'} />
            <AppFormEditItem goBack={handleClick} onSubmit={actions}/>
          </div>
        </div>
      </div>
    )
  }
}
