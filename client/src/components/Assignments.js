import React, { Component } from "react";
import AssignmentCategory from "./AssignmentCategory.js";
import AssignmentsFilter from "./AssignmentsFilter.js";
import AssignmentCreate from "./AssignmentView.js";
import AssignmentsAPI from '../utils/API-assignments';

class Assignments extends Component {
    //initialize state with array for each class's assignment topics
    state = {
        topics : []
    };
    

    componentDidMount() {
        //call the util that accesses the controller for getting all topics
        AssignmentsAPI.getTopics().then(res => {
            this.setState({
                //match the state with the array of topics
                topics: res.data
            });
        })
        
    }

    render() {
        return (
            <div className="container main mt-5 text-black text-center">
                <div className="row">
                    <div className="col-2">
                        <button className="btn text-white" id="create-assignment" data-toggle="modal"
                            data-target="#assignmentCreate">
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
                            { this.state.topics.map( element => (
                              <AssignmentsFilter 
                                topic = {element.topic}
                              />  
                            ))}
                        </ul>
                    </div>
                </div>
                { this.state.topics.map( element =>
                    <AssignmentCategory 
                        topic = {element.topic}
                    />
                )}
                <AssignmentCreate 
                    topic = {this.state.topics}
                />
            </div>
        )
    }
}

export default Assignments;
