import React, { Component } from "react";
import ClassCard from "ClassCard.js";

class Classes extends Component {
    state = {
        buttons : []
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
            <div class="container main">
                { this.state.classes.map( classCard =>  
                    <ClassCard 
                        className = {classCard.name}
                        classTeacher = {classCard.teacher}
                    /> 
                )}
            </div>
        )
    }
}

export default Classes;
