import React from "react";
import io from "socket.io-client";
import UserName from "../components/UserName";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messages: [],
    };

    this.socket = io("localhost:8080");

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
        message: this.state.message,
      });
      this.setState({ message: "" });
    };
  }

  render() {
    return (
      <div className="container message-cont">
        <div className="row">
          <div className="col-m-12 col-lg-5">
            <div className="card chat-card">
              <div className="card-body">
                <div className="card-title">
                    <h3>Class Chat</h3>
                </div>
                <hr />
                <div className="messages">
                  {this.state.messages.map((message) => {
                    return (
                      <div>
                        <UserName />: {message.message}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="card-footer chat-footer">
                <h4>
                  <UserName />
                </h4>
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
                  className="btn btn-primary btn-chat form-control"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-7">
            <div className="card email-cont col-12 pt-3">
              <form action="#">
                
                <div className="col-12 text-center">
                  <h3>Email Your Teacher</h3>
                  <hr />
                </div>
                <div className="d-flex">
                  <div className="col-lg-6">
                    <div className="form-email form-group ">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-email form-group ">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        id="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 ">
                  <div className="form-email form-group ">
                    <label htmlFor="subject">Subject:</label>
                    <br />
                    <input list="subjects" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12 mb-2">
                  <div className="form-email form-group ">
                    <label htmlFor="message">Messages:</label>
                    <textarea
                      name="message"
                      id="Message"
                      className="form-control"
                      rows="4"
                      placeholder="Enter messages"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-email"
                  >
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
