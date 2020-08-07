import React, { Component } from "react";
//data and buttons for each table row of assignments
import Assignment from "./Assignment.js";
//routes for pulling info from db
import AssignmentsAPI from '../utils/API-assignments';
//components for CRUD modals for each assignment
import AssignmentView from "./AssignmentView.js";
import AssignmentEdit from "./AssignmentView.js";
import AssignmentDelete from "./AssignmentView.js";

class AssignmentCategory extends Component {
    
    state = {
        class : []
    };

    componentDidMount() {
        //call the util that accesses the controller for getting all assignments according to the topic being passed in
        const t = (this.props.topic);
        console.log(t);

        //still need to figure out how to pass in the topic pulled at the Assignments component level
        AssignmentsAPI.getAssignmentsByTopic(t).then(res => {
            //create an array mapped from the array of assignment objects
            const assignments = res.data.map(assignment => ({
                //pair assignment attributes
                name: assignment.name,
                description: assignment.description,
                topic: assignment.topic,
                dueDate: assignment.due_date,
                points: assignment.points
            }));
            console.log(assignments);
            this.setState({
                //match the state with the mapped data
                class: assignments
            });
        });
    }

    render() {
        return (
            <div >
                <table className="mt-5 assignmentsTable">
                    <tr>
                        <th>{this.props.topic}</th>
                        <th>Instructions</th>
                        <th>Location</th>
                        <th>Submitted</th>
                        <th>Due Date</th>
                    </tr>
                    {this.state.class.map(assignment =>
                        <Assignment 
                            name = {assignment.name}
                            due = {assignment.dueDate}
                        />
                    )}
                    
                </table>
                {this.state.class.map(assignment =>
                    <AssignmentView 
                        name = {assignment.name}
                        description = {assignment.description}
                    />
                )}
                {this.state.class.map(assignment =>
                    <AssignmentEdit 
                        name = {assignment.name}
                        description = {assignment.description}
                        due = {assignment.dueDate}
                        topic = {assignment.topic}
                        points = {assignment.points}
                    />
                )}
                {this.state.class.map(assignment =>
                    <AssignmentDelete 
                        name = {assignment.name}
                    />
                )}
            </div>
        )
    }
}

export default AssignmentCategory;
