import React, { Component } from "react";

class DashboardButton extends Component {
    render() {
        return (
            <div >
                <a className="btn dashboard-btn text-white mt-4 shadow" href={this.props.URL}><i className={"fa pr-3 " + this.props.icon}></i>{this.props.buttonText}</a><br/>
            </div>
        )
    }
}
 
export default DashboardButton;