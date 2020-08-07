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
  }

  render() {
    return (
      <div className="container main mt-5 text-black text-center p-0">
        <nav className="main-header text-center">
          <h3>
            Gradebook for{" "}
            <span id="gradebook-name">Mrs. Nielson's First Grade</span>
          </h3>
        </nav>
        <div className="gradebook-display m-2 row">
          <div className="col-sm-3">
            <table
              className="table table-striped table-bordered table-sm table-1 text-left"
              cellSpacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th>Student</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.state.student.map((item, index) => (
                    <td className="vertical-data" key={index}>{item}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-sm-6 table-wrapper">
            <table className="table table-striped table-bordered table-sm table-2">
              <thead>
                <tr>
                  {this.state.assignment.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                  <td>
                    <span className="vertical-data">10/10</span>
                  </td>
                </tr>
                <tr>
                  <td>10/10</td>
                  <td>10/10</td>
                  <td>10/10</td>
                  <td>10/10</td>
                  <td>10/10</td>
                  <td>10/10</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-sm-3">
            <table className="table table-striped table-bordered table-sm table-3">
              <thead>
                <tr>
                  <th>Missing</th>
                  <th>%</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>100</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>100</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>100</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>100</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>100</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>100</td>
                  <td>A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Gradebook;
