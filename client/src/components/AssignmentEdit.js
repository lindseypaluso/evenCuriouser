import React, { Component } from "react";
//I can pass in one topic, but I don't know how to pass in all topics...
//need this for the topic dropdown option
import TopicOptions from "./TopicOptions.js";

class AssignmentEdit extends Component {
    render() {
        return (
            <div id={"editAssignment" + this.props.name} className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Update Assignment</h5> 
                            <button type="button" className="btn p-0 m-0" id="modal-button" data-dismiss="modal">X</button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="row mr-1">
                                    <div className="col-md-6 form-line">
                                        <div className="form-group">
                                            <label for="edit-assignment-title">Assignment Title</label>
                                            <br/>
                                            <input type="text" id="edit-assignment-title" class="form-control"
                                                name="edit-assignment-title" placeholder={this.props.name}/>
                                        </div>
                                        <div className="form-group">
                                            <label for="edit-assignment-instructions">Instructions</label>
                                            <br/>
                                            <textarea type="text" id="edit-assignment-instructions" class="form-control"
                                                style="width: 100%; height: 140px;" name="edit-assignment-instructions"
                                                placeholder={this.props.description}></textarea>
                                        </div>

                                    </div>
                                    <div className="col-md-6 edit-assignment-specifics form-line mb-3">
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <label for="edit-class">For</label>
                                                <br/>
                                                <select id="edit-class" className="form-control" name="select-class">
                                                    <option value="edit-class-0">Miss P's 1st Grade</option>
                                                    <option value="edit-class-1">Miss P's Art</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6 form-padding-right">
                                                <label for="edit-topic">Topic</label>
                                                <br/>
                                                <select id="edit-category" className="form-control" name="select-category">
                                                    <option value="edit-category-0">Reading/Writing</option>
                                                    <option value="edit-category-1">Math</option>
                                                    <option value="edit-category-2">Science</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <label for="edit-assignment-points">Points</label>
                                                <input type="number" id="edit-assignment-points" className="form-control"
                                                    name="edit-assignment-points" placeholder={this.props.points}/>
                                            </div>
                                            <div className="col-sm-6">
                                                <label for="edit-assignment-date">Due Date</label>
                                                <input type="date" id="edit-assignment-date" className="form-control"
                                                    name="edit-assignment-date" placeholder={this.props.date}/>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <label for="edit-rubric-link">Rubric</label>
                                                <br/>
                                                <input type="text" id="create-rubric-link" className="form-control"
                                                    name="edit-rubric-link" placeholder="URL"/>
                                            </div>
                                            <div className="col-sm-6">
                                                <label for="edit-assignment-location">Location</label>
                                                <br/>
                                                <input type="text" id="edit-assignment-location" className="form-control"
                                                    name="edit-assignment-location" placeholder="URL" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="row">
                                    <div className="col-12">
                                        <input type="submit" className="btn float-right btnSubmit" value="Update" />
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
 
export default AssignmentEdit;
