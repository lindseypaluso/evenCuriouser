import React, { Component } from "react";
import { Link } from "react-router-dom";

class ResourceButton extends Component {
  render() {
    return (
      <div className="text-center">
        <a href={this.props.URL}
          target="_blank"
          className="btn resource-btn rounded"
        >
            <div className="logo-square">
              <img className="img-fluid resource-logo" src={this.props.logo}></img>
            </div>
            <div className="">
              <p>{this.props.text}</p>
            </div>
        </a>
      </div>
    )
  }
}

export default ResourceButton;