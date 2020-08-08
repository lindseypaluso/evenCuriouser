import React, { Component } from "react";
//pass topics into category components to render assignments by category
import AssignmentCategory from "./AssignmentCategory.js";
//dropdpwn topics filter at top of table
import AssignmentsFilter from "./AssignmentsFilter.js";
//dropdown topics selector within create modal
import TopicOptions from "./TopicOptions";
import AssignmentsAPI from '../utils/API-assignments';


class Assignments extends Component {
    //initialize state with array for each class's assignment topics
    state = {
        topics : [],
        inputName: "",
        inputDescription: "",
        selectTopic: "",
        inputPoints: 0,
        selectDueDate: "",
        inputLocation: ""
    };
    

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

    componentDidMount() {
        //call the util that accesses the controller for getting all topics
        AssignmentsAPI.getTopics().then(res => {
            this.setState({
                //match the state with the array of topics
                topics: res.data
            });
        })
        
    }

    render() {
        return (
            <div className="container main mt-5 text-black text-center">
                <div className="row">
                    <div className="col-2">
                        <button className="btn text-white" id="create-assignment" onClick={this.handleShow}>
                            <i className="fa fa-plus fa-1x" aria-hidden="true"></i>Create
                        </button>
                    </div>
                    <div className="col-8 text-center">
                        <h5 className="mt-2">Assignments for <span id="class-name">Miss P's 1st Grade</span></h5>
                    </div>
                    <div className="col-2 mt-2">
                        <a className="dropdown-toggle sort-toggle" data-toggle="dropdown" href="#">Sort</a>
                        <ul className="dropdown-menu text-white">
                            <li>All Topics</li>
                            { this.state.topics.map( element => (
                              <AssignmentsFilter 
                                topic = {element.topic}
                              />  
                            ))}
                        </ul>
                    </div>
                </div>
                { this.state.topics.map( element =>
                    <AssignmentCategory 
                        topic = {element.topic}
                    />
                )}

                <div className="card">
                    <div className="card-header" >
                        <h5 className="card-title">Create Assignment</h5>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="card-body">
                            <div className="row mr-1">
                                <div className="col-md-6 form-line">
                                    <div className="form-group">
                                        <label htmlFor="create-assignment-title">Assignment Title
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
                                        <label htmlFor="create-assignment-instructions">Directions
                                            <br />
                                            <input 
                                                type="text" 
                                                id="create-assignment-instructions" 
                                                className="form-control"
                                                name="create-assignment-instructions"
                                                placeholder="instructions" 
                                                value={this.state.inputDescription}
                                                onChange={this.handleInputChange}/></label>
                                    </div>
                                </div>
                                <div className="col-md-6 create-assignment-specifics form-line mb-3">
                                    <div className="row form-group">
                                        <div className="col-sm-6 form-padding-right">
                                            <label htmlFor="select-category">Category</label>
                                            <br />
                                            <select 
                                                id="select-category" 
                                                className="form-control" 
                                                name="select-category"
                                                value={this.state.selectTopic}
                                                onChange={this.handleInputChange}>
                                                { this.state.topics.map( element =>
                                                    <TopicOptions 
                                                        topic = {element.topic}
                                                    />
                                                )} 
                                            </select>
                                        </div>
                                        <div className="row form-group">
                                        <label htmlFor="create-assignment-location">Location</label>
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
                                            <label htmlFor="create-assignment-points">Points</label>
                                            <input 
                                                type="number" 
                                                id="create-assignment-points" 
                                                className="form-control"
                                                name="create-assignment-points" 
                                                value={this.state.inputPoints}
                                                onChange={this.handleInputChange}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="create-assignment-date">Due Date</label>
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
                        <div className="card-footer">
                            <input onClick={this.handleClose} type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Assignments;
