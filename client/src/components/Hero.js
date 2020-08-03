import React from "react";
import io from "socket.io-client";
import UserName from "../components/UserName";

class Hero extends React.Component{
  constructor(props){
      super(props);

      this.state = {
          message: '',
          messages: []
      };

      this.socket = io('localhost:8080');

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
                                          <div><UserName />: {message.message}</div>
                                      )
                                  })}
                              </div>
                          </div>
                          <div className="card-footer chat-footer">
                                  <h3><UserName /></h3>
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
