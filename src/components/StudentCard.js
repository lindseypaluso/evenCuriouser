import React, { Component } from "react";

class StudentCard extends Component {
    render() {
        return (
            <div class="class-card shadow card mr-3 mb-3 float-left">
                <div class="class-card-header card-header text-white">
                    <div class="row">
                        <div class="col-8">
                            <h5>{this.props.studentName}</h5>
                            <br/>
                            <p>{this.props.studentGrade}</p>
                        </div>
                        <div class="col-4">
                            <p id="student-avatar"></p>
                        </div>
                    </div>
                </div>
                <div class="class-card-footer card-footer">
                    <a href="#"><i class="fa fa-eye" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-comments" aria-hidden="true"></i></a>
                </div>
            </div>
        )
    }
}

export default StudentCard;
