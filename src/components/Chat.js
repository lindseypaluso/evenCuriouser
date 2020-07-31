import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Chat = () => {
    const {
        user,
        isAuthenticated
    }= useAuth0();

    return (
        <div>
            {!isAuthenticated && (
            <div className="card-footer chat-footer">
              <p>Please Log In to Use Chat Feature</p>
            </div>
          )}
          {isAuthenticated && (
            <div className="card-footer chat-footer">
              <h6 className="d-inline-block" value={this.state.username}>
                {user.name}
              </h6>
              <br />
              <input
                type="text"
                placeholder="Message"
                className="form-control"
                value={this.state.message}
                onChange={(ev) =>
                  this.setState({ message: ev.target.value })
                }
              />
              <br />
              <button
                onClick={this.sendMessage}
                className="btn btn-primary form-control"
              >
                Send
              </button>
            </div>
          )}
          </div>
    );

};

export default Chat;