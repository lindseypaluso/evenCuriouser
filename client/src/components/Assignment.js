import React, { Component } from "react";

//still need to adjust where table is created so that a location link is passed in
    //this will fit into the 3rd col
//also, once users are attached, and a boolean is added to the table for submissions, 
    //that will be displayed in the 4th col

class Assignment extends Component {
    render() {
        return (
            <>
                <tr>
                    <td>{this.props.name}</td>
                    <td><a href="#" data-toggle="modal" data-target={"#viewAssignment" + this.props.name}><i
                        className="fa fa-ellipsis-h assignment-toggle" aria-hidden="true"></i></a></td>
                    <td><a href="#"><i class="fa fa-link assignment-toggle" aria-hidden="true"></i></a></td>
                    <td><span id="submitted-amount">3</span>/<span id="class-size">6</span></td>
                    <td>{this.props.due}
                        <a class="dropdown-toggle assignment-toggle" data-toggle="dropdown" href="#"></a>
                        <ul class="dropdown-menu">
                            <li><a className="nav-text" href="#" data-toggle="modal" data-target={"#editAssignment" + this.props.name}>Edit</a></li>
                            <li><a className="nav-text" href="#" data-toggle="modal" data-target={"#deleteAssignment" + this.props.name}>Delete</a>
                            </li>
                            <li><a className="nav-text" href="#">Grade Submissions</a></li>
                        </ul>
                    </td>
                </tr>
            </>
        )
    }
}

export default Assignment;
