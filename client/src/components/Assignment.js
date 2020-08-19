import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import AssignmentsAPI from '../utils/API-assignments';
import TopicOptions from "./TopicOptions";
import { useParams } from "react-router-dom";

//also, once users are attached, and a boolean is added to the table for submissions, 
    //that will be displayed in the 4th col

class Assignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: this.props.name,
            inputDescription: this.props.description,
            selectTopic: this.props.topic,
            inputPoints: this.props.points,
            selectDueDate: this.props.dueDate,
            inputLocation: this.props.link,
            id: this.props.id,

            showView: false,
            showEdit: false,
            showDelete: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    closeViewModal = () => this.setState({ showView: false })
    handleViewShow = () => this.setState({ showView: true })

    closeEditModal = () => this.setState({ showEdit: false })
    handleEditShow = () => this.setState({ showEdit: true })

    closeDeleteModal = () => this.setState({ showDelete: false })
    handleDeleteShow = () => this.setState({ showDelete: true })

    closeDeleteModal = () => this.setState({ 
        showEdit: true,
        showDelete: false         
    })

    
    handleInputChange(event) {
        var value = event.target.value;
    
        this.setState({
            [event.target.name]: value
        }); 
    }

    handleEditSubmit(event) {
        event.preventDefault();
        var id = this.state.id;
        console.log("Id: ", + id);
        var data = {
            name: this.state.inputName,
            description: this.state.inputDescription,
            topic: this.state.selectTopic,
            due_date: this.state.selectDueDate,
            points_available: this.state.inputPoints,
            link: this.state.inputLocation
        }
        var showEdit = this.state.showEdit
        AssignmentsAPI.updateAssignment(id, data, showEdit).then((res) => {
            console.log(res);
            this.setState({ showEdit: false })
        });
    }

    handleDeleteSubmit(event) {
        event.preventDefault();
        var id = this.state.id;
        console.log("Id: ", + id);
        var showDelete = this.state.showDelete;
        AssignmentsAPI.removeAssignment(id, showDelete).then((res) => {
            console.log(res);
            this.setState({ showDelete: false })
        });
    }
    
    render() {
        return (
            <>
                <tr> 
                    <td>{this.props.name}</td>
                    <td><i className="fa fa-ellipsis-h assignment-toggle" aria-hidden="true" onClick={this.handleViewShow}></i></td>
                    <td><a href={this.props.link}><i className="fa fa-link assignment-toggle" aria-hidden="true"></i></a></td>
                    <td><span id="submitted-amount">3</span>/<span id="class-size">6</span></td>
                    <td>{this.props.due}
                        <a className="dropdown-toggle assignment-toggle" data-toggle="dropdown" href="#"></a>
                        <ul className="dropdown-menu">
                            <li onClick={this.handleEditShow}>Edit</li>
                            <li onClick={this.handleDeleteShow}>Delete</li>
                            <li><a className="nav-text" href="#">Grade Submissions</a></li>
                        </ul>
                    </td>
                </tr>

                <Modal 
                    show={this.state.showView} 
                    onHide={this.closeViewModal}
                    aria-labelledby="ModalHeader">
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title id='ViewModalHeader'><h3>Instructions for {this.props.name}</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <p id="modal-assignment-instructions">
                            {this.props.description}
                        </p>
                    </Modal.Body>
                </Modal>

                <Modal 
                    show={this.state.showEdit} 
                    onHide={this.closeEditModal}
                    aria-labelledby="ModalHeader">
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title id='ViewModalHeader'><h3>Update {this.props.name}</h3></Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.handleEditSubmit}>
                        <Modal.Body className="modal-body">
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
                                                placeholder={this.props.name} 
                                                value={this.state.inputName}
                                                onChange={this.handleInputChange}/></label>
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="inputDescription">Assignment Description
                                            <input 
                                                type="text" 
                                                id="inputDescription" 
                                                className="form-control"
                                                name="inputDescription"
                                                placeholder={this.props.description} 
                                                value={this.state.inputDescription}
                                                onChange={this.handleInputChange}/></label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 create-assignment-specifics form-line mb-3">
                                        <div className="row form-group">
                                            <div className="col-sm-6 form-padding-right">
                                                <label htmlFor="selectTopic">Category</label>
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
                                                            key = {element.topic}
                                                        />
                                                    )} 
                                                </select>
                                            </div>
                                            <div className="row form-group">
                                            <label htmlFor="inputLocation">Location</label>
                                            <br />
                                                <input 
                                                    type="text" 
                                                    id="inputLocation" 
                                                    className="form-control"
                                                    name="inputLocation" 
                                                    placeholder={this.props.link} 
                                                    value={this.state.inputLocation}
                                                    onChange={this.handleInputChange}/>

                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <label htmlFor="inputPoints">Points</label>
                                                <input 
                                                    type="int" 
                                                    id="inputPoints" 
                                                    className="form-control"
                                                    name="inputPoints"
                                                    placeholder={this.props.points} 
                                                    value={this.state.inputPoints}
                                                    onChange={this.handleInputChange}/>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="selectDueDate">Due Date</label>
                                                <input 
                                                    type="date" 
                                                    id="selectDueDate" 
                                                    className="form-control"
                                                    name="selectDueDate" 
                                                    placeholder={this.props.due} 
                                                    value={this.state.selectDueDate}
                                                    onChange={this.handleInputChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <input onClick={this.handleEditSubmit} type="submit" value="Submit"/>
                        </Modal.Footer>
                    </form>
                </Modal>

                <Modal 
                    show={this.state.showDelete} 
                    onHide={this.closeDeleteModal}
                    aria-labelledby="ModalHeader">
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title id='DeleteModalHeader'><h3>Are you sure you want to delete this assignment?</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <h5><span id="modal-assignment-name">{this.props.name}</span></h5>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">
                        <button onClick={this.handleDeleteSubmit} type="submit" value="Submit">Submit</button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default Assignment;
