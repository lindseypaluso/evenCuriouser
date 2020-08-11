import React, { Component } from "react";
import AssignmentsAPI from '../utils/API-assignments';
import TopicOptions from "./TopicOptions";

class CreateCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: "",
            inputDescription: "",
            selectTopic: "",
            inputPoints: 0,
            selectDueDate: "",
            inputLocation: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;

        this.setState({
            [event.target.name]: value
        });
        
    }

    handleSubmit(event) {
        event.preventDefault();
        debugger;
        let vm = this;
        const data = {
            name: this.state.inputName,
            description: this.state.inputDescription,
            topic: this.state.selectTopic,
            due_date: this.state.selectDueDate,
            points_available: this.state.inputPoints,
            link: this.state.inputLocation
        }
        console.log(data)
        AssignmentsAPI.createAssignment(data).then(function(res) {
            console.log("response")
            //vm.state
            console.log(res);
        });
        
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" >
                    <h5 className="card-title">Create Assignment</h5>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="card-body">
                        <div className="row mr-1">
                            <div className="col-md-6 form-line">
                                <div className="form-group">
                                    <label htmlFor="inputName">Assignment Title
                                    <br />
                                    <input 
                                        type="text" 
                                        id="inputName" 
                                        className="form-control"
                                        name="inputName"
                                        placeholder="Enter Title" 
                                        value={this.state.inputName}
                                        onChange={this.handleInputChange}/></label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputDescription">Directions
                                        <br />
                                        <textarea 
                                            type="text" 
                                            id="inputDescription" 
                                            className="form-control"
                                            name="inputDescription"
                                            placeholder="instructions" 
                                            value={this.state.inputDescription}
                                            onChange={this.handleInputChange}/></label>
                                </div>
                            </div>
                            <div className="col-md-6 create-assignment-specifics form-line mb-3">
                                <div className="row form-group">
                                    <div className="col-sm-6 form-padding-right">
                                        <label htmlFor="selectTopic">Category
                                        <br />
                                        <select 
                                            id="selectTopic" 
                                            className="form-control" 
                                            name="selectTopic"
                                            value={this.state.selectTopic}
                                            onChange={this.handleInputChange}>
                                            { this.props.topics.map( element =>
                                                <TopicOptions 
                                                    topic = {element.topic}
                                                />
                                            )} 
                                        </select></label>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="inputLocation">Location
                                        <br />
                                        <input 
                                            type="text" 
                                            id="inputLocation" 
                                            className="form-control"
                                            name="inputLocation" 
                                            placeholder="URL" 
                                            value={this.state.inputLocation}
                                            onChange={this.handleInputChange}/>
                                        </label>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-6">
                                        <label htmlFor="inputPoints">Points
                                        <input 
                                            type="number" 
                                            id="inputPoints" 
                                            className="form-control"
                                            name="inputPoints" 
                                            value={this.state.inputPoints}
                                            onChange={this.handleInputChange}/></label>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="selectDueDate">Due Date
                                        <input 
                                            type="date" 
                                            id="selectDueDate" 
                                            className="form-control"
                                            name="selectDueDate" 
                                            value={this.state.selectDueDate}
                                            onChange={this.handleInputChange}/></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <input type="submit" class="btn float-right btnSubmit" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateCard;
