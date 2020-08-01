import React, { Component } from "react";

class StudentCard extends Component {
    render() {
        return (
            <div className="class-card shadow card mr-3 mb-3 float-left">
                <div className="class-card-header card-header text-white">
                    <div className="row">
                        <div className="col-8">
                            <h5>{this.props.studentName}</h5>
                            <br/>
                            <p>{this.props.studentGrade}</p>
                        </div>
                        <div className="col-4">
                            <p id="student-avatar"></p>
                        </div>
                    </div>
                </div>
                <div className="class-card-footer card-footer">
                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-comments" aria-hidden="true"></i></a>
                </div>
            </div>
        )
    }
}

export default StudentCard;
