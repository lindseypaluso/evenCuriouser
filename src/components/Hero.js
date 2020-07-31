import React, { Component } from "react";
import io from "socket.io-client";
import { useAuth0 } from "@auth0/auth0-react";

class Hero extends Component{
  var {
    user,
    isAuthenticated,
  } = useAuth0();

  constructor(props){
      super(props);

      this.state = {
          
          message: '',
          messages: []
      };

      this.socket = io('localhost:3001');

      this.socket.on('RECEIVE_MESSAGE', function(data){
          addMessage(data);
      });

      const addMessage = data => {
          console.log(data);
          this.setState({messages: [...this.state.messages, data]});
          console.log(this.state.messages);
      };

      this.sendMessage = ev => {
          ev.preventDefault();
          this.socket.emit('SEND_MESSAGE', {
              author: this.state.username,
              message: this.state.message
          });
          this.setState({message: ''});
      }
  }

  render(){
      return (
          <div className="container">
              <div className="row">
                  <div className="col-4">
                      <div className="card chat-card">
                          <div className="card-body">
                              <div className="card-title">Class Chat</div>
                              <hr/>
                              <div className="messages">
                                  {this.state.messages.map(message => {
                                      return (
                                          <div>{message.author}: {message.message}</div>
                                      )
                                  })}
                              </div>
                          </div>
                          <div className="card-footer chat-footer">
                                  <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                  <br/>
                                  <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                  <br/>
                                  <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}


export default Hero;
