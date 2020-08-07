import React, { Component } from "react";
import AssignmentsAPI from '../utils/API-assignments';
import Assignments from "./Assignments";

class AssignmentCreate extends Component {
    handleFormSubmit() {
        
        AssignmentsAPI.createAssignment();
    }

    componentDidMount() {
        
    }
    
    render() {
        return (
            <div id="createAssignment" className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Create Assignment</h5>
                            <button type="button" className="btn p-0 m-0" id="modal-button" data-dismiss="modal">X</button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="row mr-1">
                                    <div className="col-md-6 form-line">
                                        <div className="form-group">
                                            <label for="create-assignment-title">Assignment Title</label>
                                            <br />
                                            <input type="text" id="create-assignment-title" className="form-control"
                                                name="create-assignment-title" placeholder="Enter Title" />
                                        </div>
                                        <div className="form-group">
                                            <label for="create-assignment-instructions">Instructions</label>
                                            <br />
                                            <textarea type="text" id="create-assignment-instructions" className="form-control"
                                                style="width: 100%; height: 140px;" name="create-assignment-instructions"
                                                placeholder="Enter Intrustions"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6 create-assignment-specifics form-line mb-3">
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <label for="select-class">For</label>
                                                <br/>
                                                <select id="select-class" className="form-control" name="select-class">
                                                    <option value="class-0">Miss P's 1st Grade</option>
                                                    <option value="class-1">Miss P's Art</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6 form-padding-right">
                                            <label for="select-category">Category</label>
                                            <br />
                                                <select id="select-category" className="form-control" name="select-category">
                                                    <option value="category-0">Reading/Writing</option>
                                                    <option value="category-1">Math</option>
                                                    <option value="category-2">Science</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <label for="create-assignment-points">Points</label>
                                                <input type="number" id="create-assignment-points" className="form-control"
                                                    name="create-assignment-points" />
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="create-assignment-date">Due Date</label>
                                                <input type="date" id="create-assignment-date" className="form-control"
                                                    name="create-assignment-date" />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <label for="create-rubric-link">Rubric</label>
                                                <br />
                                                    <input type="text" id="create-rubric-link" className="form-control"
                                                        name="create-rubric-link" placeholder="URL" />
                                            </div>
                                            <div className="col-sm-6">
                                                <label for="create-assignment-location">Location</label>
                                                <br />
                                                    <input type="text" id="create-assignment-location" className="form-control"
                                                        name="create-assignment-location" placeholder="URL" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="row">
                                    <div className="col-12">
                                        <input type="submit" className="btn float-right btnSubmit" value="Submit" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default AssignmentCreate;
