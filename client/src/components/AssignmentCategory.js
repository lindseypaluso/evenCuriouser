import React, { Component } from "react";

class AssignmentCategory extends Component {

    render() {
        return (
            <div >
                <table style="width: 100%;" className="mt-5">
                    <tr>
                        <th>{this.props.topic}</th>
                        <th>Instructions</th>
                        <th>Location</th>
                        <th>Submitted</th>
                        <th>Due Date</th>
                    </tr>
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
                </table>
                <div id="viewAssignment" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Instructions for <span id="modal-assignment-name">{this.props.name}</span></h3>
                                <button type="button" className="btn p-0 m-0" id="modal-button" data-dismiss="modal">X</button>
                            </div>
                            <div className="modal-body">
                                <p id="modal-assignment-instructions">
                                    {this.props.description}
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn float-right btnSubmit" data-toggle="modal" data-target="#editAssignment"
                                    data-dismiss="modal">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AssignmentCategory;
