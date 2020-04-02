import React from "react";

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="wrapper">
        <Header store={this.props.store} history={this.props.history} />
        { this.props.children }
      </div>
    )
  }
}
