import React, { Component } from "react";
import DashboardButton from "./DashboardButton.js";
import UserName from "../components/UserName";

class Dashboard extends Component {
  
    state = {
        buttons : []
    };

    componentDidMount() {
        var user = this.props.user;
        if (user === "teacher") {
            this.setState({
                buttons: [
                    {
                        buttonText: "Classes",
                        URL: "#"
                    },
                    {
                        buttonText: "Gradebook",
                        URL: "#"
                    },
                    {
                        buttonText: "Calendar",
                        URL: "#"
                    },
                    {
                        buttonText: "Messages",
                        URL: "#"
                    },
                    {
                        buttonText: "News",
                        URL: "#"
                    },
                    {
                        buttonText: "Student Lookup",
                        URL: "#"
                    }
                ]
            })
        } else {
            this.setState({
                buttons: [
                    {
                        buttonText: "Classes",
                        icon: "fa-users",
                        URL: "#"
                    },
                    {
                        buttonText: "Calendar",
                        icon: "fa-calendar",
                        URL: "#"
                    },
                    {
                        buttonText: "Messages",
                        icon: "fa-envelope",
                        URL: "#"
                    },
                    {
                        buttonText: "News",
                        icon: "fa-newspaper-o",
                        URL: "#"
                    }
                ]
            })
        } 
    };

    render() {
        return (
            <div className="container pt-5">
                <div className="col-md-9 col-lg-7 px-0 dashboard-card card text-center shadow">
                    <div className="dashboard card-header pt-4">
                        <h2><strong>Welcome, <UserName/>!</strong></h2>
                    </div>
                    <div className="card-body mb-4">
                        { this.state.buttons.map( button =>  
                            <DashboardButton 
                                buttonText = {button.buttonText}
                                icon = {button.icon}
                                URL = {button.URL}
                            /> 
                        )}
                    </div>
                    <div className="dashboard card-footer">
                        <img src="./assets/images/curious-bunny.png" alt="EvenCuriouser logo" width="50px" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;