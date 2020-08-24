import React from "react";
import io from "socket.io-client";
import UserName from "../components/UserName";
import Email from "../components/Email";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      message: "",
      messages: [],
    };

    this.socket = io();

    this.socket.on("RECEIVE_MESSAGE", function (data) {
      addMessage(data);
    });

    const addMessage = (data) => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };

    this.sendMessage = (ev) => {
      ev.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        author: this.state.username,
        message: this.state.message,
      });
      this.setState({ message: "" });
    };
  }

  render() {
    return (
     
      <div className="container message-cont my-5">
        <div className="row">
          <div className="col-md-12 col-lg-5">
            <div className="card chat-card shadow border-0">
              <div className="card-body">
                <div className="card-title text-center">
                    <h3>Class Chat</h3>
                </div>
                <hr />
                <div className="messages">
                  {this.state.messages.map((message) => {
                    return (
                      <div>
                        {message.author}: {message.message}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="card-footer chat-footer shadow">
                
                <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="chat form-control"/>
          
                <br />
                <input
                  type="text"
                  placeholder="Message"
                  className="chat form-control "
                  value={this.state.message}
                  onChange={(ev) => this.setState({ message: ev.target.value })}
                />
                <br />
                <button
                  onClick={this.sendMessage}
                  className="btn btn-primary btn-chat form-control border-0"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-7">
            <Email />
         </div>
        </div> 
      </div>
      
    );
  }
}

export default Hero;
