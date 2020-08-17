import React, { Component } from "react";
//data and buttons for each table row of assignments
import Assignment from "./Assignment.js";
//routes for pulling info from db
import AssignmentsAPI from '../utils/API-assignments';

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
                points: assignment.points,
                link: assignment.link,
                id: assignment.id
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
                    <thead>
                        <tr>
                            <th>{this.props.topic}</th>
                            <th>Instructions</th>
                            <th>Location</th>
                            <th>Submitted</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.class.map(assignment =>
                            <Assignment 
                                topics = {this.props.topics}
                                name = {assignment.name}
                                description = {assignment.description}
                                due = {assignment.dueDate}
                                points = {assignment.points}
                                link = {assignment.link}
                                key = {assignment.id}
                                id = {assignment.id}
                            />
                        )}    
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AssignmentCategory;
