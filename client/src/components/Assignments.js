import React, { Component } from "react";
import AssignmentCategory from "./AssignmentCategory.js";

class Assignments extends Component {
    state = {
        buttons: []
    };

    componentDidMount() {
        var user = this.props.user;
        if (user === "teacher") {
            this.setState({})
        } else {
            this.setState({})
        }
    }

    render() {
        return (
            <div className="container main mt-5 text-black text-center">
                <div className="row">
                    <div className="col-2">
                        <button className="btn text-white" id="create-assignment" data-toggle="modal"
                            data-target="#createAssignment">
                            <i className="fa fa-plus fa-1x" aria-hidden="true"></i>Create
                </button>
                    </div>
                    <div className="col-8 text-center">
                        <h5 className="mt-2">Assignments for <span id="class-name">Miss P's 1st Grade</span></h5>
                    </div>
                    <div className="col-2 mt-2">
                        <a className="dropdown-toggle sort-toggle" data-toggle="dropdown" href="#">Sort</a>
                        <ul className="dropdown-menu text-white">
                            <li>All Topics</li>
                            <li><span id="topic-0">Reading/Writing</span></li>
                            <li><span id="topic-1">Math</span></li>
                            <li><span id="topic-2">Science</span></li>
                        </ul>
                    </div>
                </div>
                <AssignmentCategory />
            </div>
        )
    }
}

export default Assignments;
