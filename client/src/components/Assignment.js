import React, { Component } from "react";

class Assignment extends Component {
    render() {
        return (
            <div >
                <tr>
                    <td>{this.props.name}</td>
                    <td><a href="#" data-toggle="modal" data-target="#viewAssignment"><i
                        className="fa fa-ellipsis-h assignment-toggle" aria-hidden="true"></i></a></td>
                    <td><a href="#"><i class="fa fa-link assignment-toggle" aria-hidden="true"></i></a></td>
                    <td><span id="submitted-amount">3</span>/<span id="class-size">6</span></td>
                    <td>{this.props.due_date}
                        <a class="dropdown-toggle assignment-toggle" data-toggle="dropdown" href="#"></a>
                        <ul class="dropdown-menu">
                            <li><a className="nav-text" href="#" data-toggle="modal" data-target="#editAssignment">Edit</a></li>
                            <li><a className="nav-text" href="#" data-toggle="modal" data-target="#deleteAssignment">Delete</a>
                            </li>
                            <li><a className="nav-text" href="#">Grade Submissions</a></li>
                        </ul>
                    </td>
                </tr>
            </div>
        )
    }
}

export default Assignment;
