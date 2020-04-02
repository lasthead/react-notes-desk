import React, {Component} from "react";
import "./AppNavButton.scss";
import { withRouter } from "react-router-dom";

class AppNavButton extends Component {
  render() {
    return(
      <button type={this.props.type} className={this.props.className} onClick={this.props.action}>{this.props.title}</button>
    )
  }
}

export default withRouter(AppNavButton);
