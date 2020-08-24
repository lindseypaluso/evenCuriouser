import React from "react";
import axios from "axios";

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            message: '', 
            name: '', 
            email: '', 
            subject: '' 
        };
    }
        handleFormSubmit(e){
            e.preventDefault();
            axios({
                method: "POST",
                url: "http://localhost:8080/api/email/send",
                data:{
                    name: this.state.name,
                    email: this.state.email,
                    subject: this.state.subject,
                    message: this.state.message
                }
            }).then((response)=>{
                if (response.data.msg === 'success'){
                    alert("Message Sent."); 
                    this.resetForm()
                }else if(response.data.msg === 'fail'){
                    alert("Message failed to send.")
                }
        })
        
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div className="card email-cont col-12 pt-3 shadow border-0">
            <form id="contact-form" onSubmit={this.handleFormSubmit.bind(this)} method="POST" action="#">
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
                      className="form-email form-control"
                      placeholder="Your name"
                      id="name"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-email form-group ">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-email form-control"
                      placeholder="Your email"
                      id="email"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 ">
                <div className="form-email form-group ">
                  <label htmlFor="subject">Subject:</label>
                  <br />
                  <input
                    list="subjects"
                    id="subject"
                    placeholder="subject"
                    className="form-email form-control"
                    value={this.state.subject}
                    onChange={(e) => this.setState({ subject: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-2">
                <div className="form-email form-group ">
                  <label htmlFor="message">Messages:</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-email form-control"
                    rows="4"
                    placeholder="Enter message"
                    value={this.state.message}
                    onChange={(e) => this.setState({ message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div> 
           
        )
    }

}    

export default Email;