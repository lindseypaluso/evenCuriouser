import React, { Component } from "react";

class AssignmentView extends Component {
    render() {
        return (
            <div id={"viewAssignment" + this.props.name} className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Instructions for <span id={"modal-assignment-name" + this.props.name}></span></h3>
                            <button type="button" className="btn p-0 m-0" id="modal-button" data-dismiss="modal">X</button>
                        </div>
                        <div className="modal-body">
                            <p id="modal-assignment-instructions">
                                {this.props.description}
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn float-right btnSubmit" data-toggle="modal" data-target={"#editAssignment" + this.props.name}
                                data-dismiss="modal">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AssignmentView;
