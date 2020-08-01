import React, { Component } from "react";

class StudentGradeCategory extends Component {
    render() {
        return (
            <>
                <table style="width: 100%;" class="mt-2">
                    <tr>
                        <th>Class</th>
                        <th>Upcoming Assignments</th>
                        <th>Missing Assignments</th>
                        <th>Grade</th>
                        <th>Class Link</th>
                        <th>Message Student</th>
                        <th>Message Guardian</th>
                    </tr>
                    <tr>
                        <td>Miss P's 1st Grade</td>
                        <td>2</td>
                        <td>3</td>
                        <td>C</td>
                        <td><a href="#"><i className="fa fa-link" aria-hidden="true"></i></a></td>
                        <td><a href="#"><i className="fa fa-comments" aria-hidden="true"></i></a></td>
                        <td><a href="#"><i className="fa fa-comments" aria-hidden="true"></i></a></td>
                    </tr>
                    <tr>
                        <td>Miss P's Art</td>
                        <td>2</td>
                        <td>3</td>
                        <td>C</td>
                        <td><a href="#"><i className="fa fa-link" aria-hidden="true"></i></a></td>
                        <td><a href="#"><i className="fa fa-comments" aria-hidden="true"></i></a></td>
                        <td><a href="#"><i className="fa fa-comments" aria-hidden="true"></i></a></td>
                    </tr>
                </table>
            </>
        )
    }
}

export default StudentGradeCategory;
