import React, { Component } from "react";
import AssignmentsAPI from '../utils/API-assignments';
import TopicOptions from "./TopicOptions";
import Modal from 'react-bootstrap-modal';
// import defaultTransition from 'bootstrap-modal/utils/default-transition';

class AssignmentCreate extends Component {
    constructor(props) {
        this.state = {
            inputName: "",
            inputDescription: "",
            selectTopic: "",
            inputPoints: 0,
            selectDueDate: "",
            inputLocation: "",
            open: false
        }
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    closeModal = () => this.setState({ open: false })

    handleInputChange(event) {
        const value = event.target.value;

        this.setState({
            [event.target.name]: value
        });
        
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            name: this.state.inputName,
            description: this.state.inputDescription,
            topic: this.state.selectTopic,
            due_date: this.state.selectDueDate,
            points_available: this.state.inputPoints,
            link: this.state.inputLocation
        }

        AssignmentsAPI.createAssignment(data).then(function(res) {
            console.log(res);
            this.setState({ open: false })
        });
        
    }
    
    render() {
        return (
            <div>
                <button type="button" id="create-assignment">
                    <i className="fa fa-plus fa-1x pr-2" aria-hidden="true"></i>Create
                </button>
                <Modal 
                    show={this.state.open} 
                    onHide={this.closeModal}
                    aria-labelledby="ModalHeader"
                >
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title id='ModalHeader'>Create Assignment</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit}>
                        <Modal.Body className="modal-body">
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
                                        <teaxtarea 
                                            type="text" 
                                            id="create-assignment-instructions" 
                                            className="form-control"
                                            style="width: 100%; height: 140px;" 
                                            name="create-assignment-instructions"
                                            placeholder="Enter Intrustions"
                                            value={this.state.inputDescription}
                                            onChange={this.handleInputChange}/>
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
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <input onClick={this.handleSubmit} type="submit" value="Submit"/>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
}
 
export default AssignmentCreate;
