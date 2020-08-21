import React, { Component } from "react";
import AssignmentsAPI from '../utils/API-assignments';
import TopicOptions from "./TopicOptions";
import Modal from 'react-bootstrap/Modal';
// import Modal from 'react-bootstrap-modal';
// import defaultTransition from 'bootstrap-modal/utils/default-transition';

class AssignmentCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: "",
            inputDescription: "",
            selectTopic: "",
            inputPoints: 0,
            selectDueDate: "",
            inputLocation: "",
            show: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    closeModal = () => this.setState({ show: false })
    handleShow = () => this.setState({ show: true })

    refreshPage = () => {
        window.location.reload(false);
    }

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
        var show = this.state.show
        AssignmentsAPI.createAssignment(data, show).then((res) => {
            console.log(res);
            this.setState({ show: false })
            this.refreshPage();
        });
        
    }
    
    render() {
        return (
            <div>
                <button type="button" id="create-assignment" onClick={this.handleShow}>
                    <i className="fa fa-plus fa-1x pr-2" aria-hidden="true"></i>Create
                </button>
                <Modal 
                    show={this.state.show} 
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
                                    <label htmlFor="inputDescription">Assignment Description
                                        <input 
                                            type="text" 
                                            id="inputDescription" 
                                            className="form-control"
                                            name="inputDescription"
                                            placeholder="Enter Intrustions"
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
                                                placeholder="URL" 
                                                value={this.state.inputLocation}
                                                onChange={this.handleInputChange}/>

                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-sm-6">
                                            <label htmlFor="inputPoints">Points</label>
                                            <input 
                                                type="number" 
                                                id="inputPoints" 
                                                className="form-control"
                                                name="inputPoints" 
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
