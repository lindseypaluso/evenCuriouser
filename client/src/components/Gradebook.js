import React, { Component } from "react";
import AssignmentsAPI from "../utils/API-assignments";


class Gradebook extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            assignment: [],
        };
    }
    componentDidMount() {
        AssignmentsAPI.getAssignments().then(res => {
            const assignment = res.data.map((data) => ({
              name: data.name,
              }));
              console.log(assignment);
              this.setState({
              assignment: assignment
            });
          });
        }
          
         

    render() {
        return (
            <div className="container main mt-5 text-black text-center p-0">
                <nav className="main-header text-center">
                    <h3>Gradebook for <span id="gradebook-name">Miss P's First Grade</span></h3>
                </nav>
                <div className="gradebook-display m-2 row">
                    <div className="col-sm-3"> 
                        <table className="table table-striped table-bordered table-sm table-1 text-left" cellSpacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Name </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jordan C</td>
                                </tr>
                                <tr>
                                    <td>Abby N</td>
                                </tr>
                                <tr>
                                    <td>Lindsey P</td>
                                </tr>
                                <tr>
                                    <td>Lisa S</td>
                                </tr>
                                <tr>
                                    <td>Khan</td>
                                </tr>
                                <tr>
                                    <td>Attila</td>
                                </tr>
                                <tr>
                                    <td>Peter Vankman</td>
                                </tr>
                                <tr>
                                    <td>Egon Spangler</td>
                                </tr>
                                <tr>
                                    <td>Ray Stantz</td>
                                </tr>
                                <tr>
                                    <td>Armando Salazar</td>
                                </tr>
                                <tr>
                                    <td>Lisa S</td>
                                </tr>
                                <tr>
                                    <td>Ryan C</td>
                                </tr>
                                <tr>
                                    <td>Khan</td>
                                </tr>
                                <tr>
                                    <td>Attila</td>
                                </tr>
                                <tr>
                                    <td>Abby Nielson</td>
                                </tr>
                                <tr>
                                    <td>Jack Parr</td>
                                </tr>
                                <tr>
                                    <td>Dashel Parr</td>
                                </tr>
                                <tr>
                                    <td>Violet Parr</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-sm-6 table-wrapper">
                        <table className="table table-striped table-bordered table-sm table-2">
                            <thead>
                                <tr>
                                    {this.state.assignment.map(item => (
                                        <h2 key={item}>{item}</h2>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                </tr>
                                <tr>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                </tr>
                                <tr>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                </tr>
                                <tr>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                </tr>
                                <tr>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                    <td><span className="vertical-data">10/10</span></td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
                                    <td>10/10</td>
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
        )
    }
}

export default Gradebook;