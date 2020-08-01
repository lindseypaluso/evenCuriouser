import React, { Component } from "react";
import StudentGradeCategory from "./StudentGradeCategory.js";

class StudentPage extends Component {

    render() {
        return (
            <div class="container main mt-5 text-black text-center">
                <div class="row">
                    <div class="col-12 text-center">
                        <p id="student-avatar"></p>
                        <h5 class="mt-2">Academic Summary for <span id="student-name">Attila</span></h5>
                    </div>
                </div>
                <StudentGradeCategory />
            </div>
        )
    }
}

export default StudentPage;
