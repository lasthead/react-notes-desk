import React, {Component} from "react";
import "./AppListItem.scss";
export default class AppListItem extends Component {
  render() {
    return (
      <div onClick={ () => this.props.onClick(this.props.id) } className="item item__container">
        <div className="item__title">{ this.props.name }</div>
        <div className="item__date">3 minutes ago</div>
        <div className="item__text">
          { this.props.text }
        </div>
      </div>
    );
  }
}
