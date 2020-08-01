import React, { Component } from "react";

class AssignmentCategory extends Component {

    render() {
        return (
            <div >
                <table style="width: 100%;" className="mt-5">
                    <tr>
                        <th>Reading/Writing</th>
                        <th>Instructions</th>
                        <th>Location</th>
                        <th>Submitted</th>
                        <th>Due Date</th>
                    </tr>
                    <tr>
                        <td>Letter Quiz</td>
                        <td><a href="#" data-toggle="modal" data-target="#viewAssignment"><i
                            className="fa fa-ellipsis-h assignment-toggle" aria-hidden="true"></i></a></td>
                        <td><a href="#"><i class="fa fa-link assignment-toggle" aria-hidden="true"></i></a></td>
                        <td><span id="submitted-amount">3</span>/<span id="class-size">6</span></td>
                        <td>August 10
                            <a class="dropdown-toggle assignment-toggle" data-toggle="dropdown" href="#"></a>
                            <ul class="dropdown-menu">
                                <li><a className="nav-text" href="#" data-toggle="modal" data-target="#editAssignment">Edit</a></li>
                                <li><a className="nav-text" href="#" data-toggle="modal" data-target="#deleteAssignment">Delete</a>
                                </li>
                                <li><a className="nav-text" href="#">Grade Submissions</a></li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default AssignmentCategory;
