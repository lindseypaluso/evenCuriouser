import React, { Component } from "react";

class DashboardButton extends Component {
    render() {
        return (
            <div >
                <a className="btn dashboard-btn text-white mt-4" href={this.props.URL}>{this.props.buttonText}</a><br/>
            </div>
        )
    }
}

export default DashboardButton;