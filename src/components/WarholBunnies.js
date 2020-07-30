import React, { Component } from "react";

class WarholBunnies extends Component {
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
            <div>
                
            </div>
        )
    }
}

export default WarholBunnies;
