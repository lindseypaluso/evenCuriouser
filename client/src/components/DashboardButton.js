import React, { Component } from "react";
import { Link } from "react-router-dom";

class DashboardButton extends Component {
  render() {
    return (
      <div>
        <Link
          to={this.props.URL}
          className="btn dashboard-btn text-white mt-4 shadow"
        >
          <i className={"fa pr-3 " + this.props.icon}></i>{this.props.buttonText}
        </Link>
      </div>
    )
  }
}

export default DashboardButton;
