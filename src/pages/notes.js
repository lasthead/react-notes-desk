import React, { Component } from 'react'
import "./notes.scss";
import AppNotesList from "../components/AppNotesList/AppNotesList";
import AppHeader from "../components/AppHeader/AppHeader";

export default class Notes extends Component {
  render() {
    return (
      <div>
        <AppHeader history={this.props.history} />
        <div className="content__wrapper">
          <div className="block content__block">
            <AppNotesList />
          </div>
        </div>
      </div>
    );
  }
}
