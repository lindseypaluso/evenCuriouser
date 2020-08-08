import React, { Component } from "react";
import AssignmentsAPI from "../utils/API-assignments";
import UserAPI from "../utils/API-students";
import UserAssignmentAPI from "../utils/API-user_assignments";

class Gradebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignment: [],
      student: [],
      grades1: [],
      grades2: [],
      grades3: [],
    };
  }
  componentDidMount() {
    AssignmentsAPI.getAssignments().then((res) => {
      const assignment = res.data.map((data) => data.name);
      console.log(assignment);
      this.setState({
        assignment: assignment,
      });
    });
    UserAPI.getStudents().then((res) => {
      const students = res.data.map((data) => data.given_name);
      console.log(students);
      this.setState({
        student: students,
      });
    });
    UserAssignmentAPI.getUserAssignments(1).then((res) => {
      const grades = res.data.map((data) => data.points_earned);
      console.log(grades);
      this.setState({
        grades1: grades
      });
    });
    UserAssignmentAPI.getUserAssignments(2).then((res) => {
      const grades = res.data.map((data) => data.points_earned);
      console.log(grades);
      this.setState({
        grades2: grades
      });
    });
    UserAssignmentAPI.getUserAssignments(3).then((res) => {
      const grades = res.data.map((data) => data.points_earned);
      console.log(grades);
      this.setState({
        grades3: grades
      });
    });
  }

  render() {
    return (
      <div className="hero-image">
      <div className="container p-2 pt-5">
        <div className="gradebook bg-white pt-3">
        <div className="main-header text-center">
          <h3>
            Gradebook for{" "}
            <span id="gradebook-name">Miss P's First Grade</span>
          </h3>
        </div>
        <div className="gradebook-display m-2 row">
          <div className="col-sm-3">
            <table
              className="table text-left"
              cellSpacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th className="table-head" >Student</th>
                </tr>
              </thead>
              <tbody>
                {this.state.student.map((item, index) => (
                   <tr><td key={index}><span>{item}</span></td></tr>
                ))}
                  
              </tbody>
            </table>
          </div>

          <div className="col-sm-6 table-wrapper grades">
            <table className="table">
              <thead>
                <tr>
                  {this.state.assignment.map((item, index) => (
                    <th className="table-head assignmentGB" key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.state.grades1.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
                <tr>
                {this.state.grades2.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
                <tr>
                {this.state.grades3.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
                
              </tbody>
            </table>
          </div>

          <div className="col-sm-3">
            <table className="table">
              <thead>
                <tr>
                  <th className="table-head">Missing</th>
                  <th className="table-head">%</th>
                  <th className="table-head">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>71.8</td>
                  <td>C</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>67.8</td>
                  <td>C-</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>82.1</td>
                  <td>B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Gradebook;
