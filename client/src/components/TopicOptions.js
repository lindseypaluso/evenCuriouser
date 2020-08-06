import React, { Component } from "react";

class TopicOptions extends Component {
    render() {
        return (
            <>
                <option value={this.props.topic}>{this.props.topic}</option>
            </>
        )
    }
}

export default TopicOptions;
