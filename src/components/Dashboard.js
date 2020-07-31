import React, { Component } from "react";
import DashboardButton from "./DashboardButton.js";

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
                    }
                ]
            })
        } 
    };

    render() {
        return (
            <div className="container">
                <div className="dashboard-card card text-center">
                    <div className="dashboard card-header pt-4">
                        <h2><strong>Welcome!</strong></h2>
                    </div>
                    <div className="card-body mb-4">
                        { this.state.buttons.map( button =>  
                            <DashboardButton 
                                buttonText = {button.buttonText}
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