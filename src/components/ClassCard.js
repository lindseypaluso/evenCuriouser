import React, { Component } from "react";

class ClassCard extends Component {
    render() {
        return (
            <div class="class-card card shadow mr-3 mb-3 float-left">
                <div class="class-card-header card-header text-white">
                    <h5>{this.props.className}</h5>
                    <br />
                    <p>{this.props.classTeacher}</p>
                </div>
                <div class="class-card-footer card-footer">
                    <a href="#"><i class="fa fa-eye" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-book" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i></a>
                </div>
            </div>
        )
    }
}

export default ClassCard;
