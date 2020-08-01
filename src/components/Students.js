import React, { Component } from "react";

import StudentCard from "./StudentCard.js";

class Students extends Component {
    state = {
        students: []
    };

    componentDidMount() {
        var user = this.props.user;
        if (user === "teacher") {
            this.setState({})
        } else {
            this.setState({})
        }
    }

    render() {
        return (
            <div className="container main">
                {this.state.students.map(studentCard =>
                    <StudentCard
                        studentName={studentCard.name}
                        studentGrade={studentCard.grade}
                    />
                )}
            </div>
        )
    }
}

export default Students;
