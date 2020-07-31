import React, { Component } from "react";

class ClassCard extends Component {
    render() {
        return (
            <div className="class-card card shadow mr-3 mb-3 float-left">
                <div className="class-card-header card-header text-white">
                    <h5>{this.props.classTitle}</h5>
                    <br />
                    <p>{this.props.classTeacher}</p>
                </div>
                <div className="class-card-footer card-footer">
                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-book" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i></a>
                </div>
            </div>
        )
    }
}

export default ClassCard;
