import React, { Component } from "react";

class AssignmentsFilter extends Component {
    render() {
        return (
            <>
                <li><span>{this.props.topic}</span></li>
            </>
        )
    }
}

export default AssignmentsFilter;
