import React, { Component } from "react";
import AssignmentsAPI from '../utils/API-assignments';
import TopicOptions from "./TopicOptions";

class AssignmentCreate extends Component {
    constructor(props) {
        this.state = {
            inputName: "",
            inputDescription: "",
            selectTopic: "",
            inputPoints: 0,
            selectDueDate: moment().toDate(),
            inputLocation: ""
        }
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target  = event.target;
        const value = target.name === 'create-assignment-title' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        
    }

    handleSubmit(event) {
        const data = {
            name: this.state.inputName,
            description: this.state.inputDescription,
            topic: this.state.selectTopic,
            due_date: this.state.selectDueDate,
            points_available: this.state.inputPoints,
            link: this.state.inputLocation
        }
        event.preventDefault();
        alert(this.state.inputName + " has been created");
        AssignmentsAPI.createAssignment(data).then(function(res) {
            console.log(res);
        });
        
    }
    
    render() {
        return (
            <div id="assignmentCreate" className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Create Assignment</h5>
                            <button type="button" className="btn p-0 m-0" id="modal-button" data-dismiss="modal">X</button>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <div className="row mr-1">
                                    <div className="col-md-6 form-line">
                                        <div className="form-group">
                                            <label for="create-assignment-title">Assignment Title
                                            <br />
                                            <input 
                                                type="text" 
                                                id="create-assignment-title" 
                                                className="form-control"
                                                name="create-assignment-title"
                                                placeholder="Enter Title" 
                                                value={this.state.inputName}
                                                onChange={this.handleInputChange}/></label>
                                        </div>
                                        <div className="form-group">
                                            <label for="create-assignment-instructions">Instructions</label>
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="create-assignment-instructions" 
                                                className="form-control"
                                                style="width: 100%; height: 140px;" 
                                                name="create-assignment-instructions"
                                                placeholder="Enter Intrustions"
                                                value={this.state.inputDescription}
                                                onChange={this.handleInputChange}>
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6 create-assignment-specifics form-line mb-3">
                                        <div className="row form-group">
                                            <div className="col-sm-6 form-padding-right">
                                                <label for="select-category">Category</label>
                                                <br />
                                                <select 
                                                    id="select-category" 
                                                    className="form-control" 
                                                    name="select-category"
                                                    value={this.state.selectTopic}
                                                    onChange={this.handleInputChange}>
                                                    {this.props.topic.map( topicOption =>
                                                        <TopicOptions 
                                                            topic = {topicOption.topic}
                                                        />
                                                    )}
                                                    
                                                </select>
                                            </div>
                                            <div className="row form-group">
                                            <label for="create-assignment-location">Location</label>
                                            <br />
                                                <input 
                                                    type="text" 
                                                    id="create-assignment-location" 
                                                    className="form-control"
                                                    name="create-assignment-location" 
                                                    placeholder="URL" 
                                                    value={this.state.inputLocation}
                                                    onChange={this.handleInputChange}/>

                                        </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <label for="create-assignment-points">Points</label>
                                                <input 
                                                    type="number" 
                                                    id="create-assignment-points" 
                                                    className="form-control"
                                                    name="create-assignment-points" 
                                                    value={this.state.inputPoints}
                                                    onChange={this.handleInputChange}/>
                                            </div>
                                            <div className="col-sm-6">
                                                <label for="create-assignment-date">Due Date</label>
                                                <input 
                                                    type="date" 
                                                    id="create-assignment-date" 
                                                    className="form-control"
                                                    name="create-assignment-date" 
                                                    value={this.state.selectDueDate}
                                                    onChange={this.handleInputChange}/>
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
