import React, { Component } from "react";
//react bootstrap modal & button necessities
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
//pass topics into category components to render assignments by category
import AssignmentCategory from "./AssignmentCategory.js";
//dropdpwn topics filter at top of table
import AssignmentsFilter from "./AssignmentsFilter.js";
//dropdown topics selector within create modal
import TopicOptions from "./TopicOptions";
import AssignmentCreate from "./AssignmentView.js";
import AssignmentsAPI from '../utils/API-assignments';


// <AssignmentCreate
//                     show={this.state.show}
//                     topic={this.state.topics}
//                     visible={this.state.visible}
//                     toggleVisibility={this.toggleModal}
//                     ref={this.saveCreateForm}
//                     onCancel={this.handleCancel}
//                     onCreate={this.handleCreate}
//                 />

class Assignments extends Component {
    //initialize state with array for each class's assignment topics
    state = {
        topics : [],
        inputName: "",
        inputDescription: "",
        selectTopic: "",
        inputPoints: 0,
        selectDueDate: "",
        inputLocation: "",
        visible: false,
        setShow: false
    };
    
    handleClose = () => {
        this.setState({ setShow: false });
    }
    handleShow = () => {
        this.setState({ setShow: true });
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

    // showCreateModal = () => {
    //     this.setState({ visible: true });
    // }
    // handleCancel = () => {
    //     this.setState({ visible: false });
    // }
    // handleCreate = (form) => {
    //     // ...
    //     this.setState({ visible: false });
    //     this.form = form;
    // }
    // saveCreateForm = (form) => {
    //     this.form = form;
    // }
    // toggleModal = () => {
    //     this.setState(prevState => ({ visible: !prevState.visible }));
    // }

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

                <Modal show={this.setShow} onHide={this.handleClose}>
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title>Create Assignment</Modal.Title>
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
                            <input onClick={this.handleClose} type="submit" value="Submit"/>
                        </Modal.Footer>
                    </form>
                </Modal>
            
            </div>
        )
    }
}

export default Assignments;
