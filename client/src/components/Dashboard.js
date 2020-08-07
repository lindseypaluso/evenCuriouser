import React, { Component } from "react";
import DashboardButton from "./DashboardButton.js";
import UserName from "../components/UserName";

class Dashboard extends Component {
  
    state = {
        buttons : []
    };

    componentDidMount() {
        if (!this.props.user) {
          return;
        }
        var role = this.props.user.role;
        if (role === "teacher") {
            this.setState({
                buttons: [
                    {
                        buttonText: "Classes",
                        icon: "fa-users",
                        URL: "/classes"
                    },
                    {
                        buttonText: "Gradebook",
                        icon: "fa-book",
                        URL: "/gradebook"
                    },
                    {
                        buttonText: "Calendar",
                        icon: "fa-calendar",
                        URL: "/calendar"
                    },
                    {
                        buttonText: "Messages",
                        icon: "fa-envelope",
                        URL: "/messages"
                    },
                    {
                        buttonText: "Announcements",
                        icon: "fa-newspaper-o",
                        URL: "/announcements"
                    }
                ]
            })
        } else {
            this.setState({
                buttons: [
                    {
                        buttonText: "Assignments",
                        icon: "fa-users",
                        URL: "/assignments"
                    },
                    {
                        buttonText: "Calendar",
                        icon: "fa-calendar",
                        URL: "/calendar"
                    },
                    {
                        buttonText: "Messages",
                        icon: "fa-envelope",
                        URL: "/messages"
                    },
                    {
                        buttonText: "Announcements",
                        icon: "fa-newspaper-o",
                        URL: "/announcements"
                    }
                ]
            })
        } 
    };

    render() {
      if (!this.props.user) {
        return 'No user found';
      }
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
                                key = {button.buttonText}
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