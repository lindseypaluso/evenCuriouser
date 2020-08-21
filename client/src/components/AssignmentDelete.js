import React, { Component } from "react";

class AssignmentDelete extends Component {
    render() {
        return ( 
            <div id={"deleteAssignment" + this.props.name} className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Are you sure you want to delete this assignment?</h3>
                            <button type="button" className="btn p-0 m-0" id="modal-button" data-dismiss="modal">X</button>
                        </div>
                        <div className="modal-body">
                            <h5><span id="modal-assignment-name">{this.props.name}</span></h5>
                        </div>
                        <div className="modal-footer">
                            <input type="submit" className="btn float-right btnSubmit" value="Delete" />
                            <button className="btn float-right btnSubmit" data-toggle="modal" data-target={"#editAssignment" + this.props.name}
                                data-dismiss="modal">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default AssignmentDelete;
