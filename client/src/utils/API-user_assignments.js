import axios from "axios";

export default {
    getAll: function(body) {
        return axios.get("/api/user_assignments/all", body);
    },
    getUserAssign: function(UserID) {
        return axios.get("/api/user_assignments/" + UserID);
    },
    getAssignments: function(AssignmentID) {
        return axios.get("/api/user_assignments/" + AssignmentID);
    }
};