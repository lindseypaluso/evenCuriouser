import axios from "axios";

export default {
    getAssignments: function(body) {
        return axios.get("/api/assignments/all-assignments", body);
    },
    getAssignment: function (name) {
        return axios.get("/api/assignments/" + name);
    },
    getTopics: function (body) {
        return axios.get("/api/assignments/all-topics", body);
    },
    getAssignmentsByTopic: function (topic) {
        return axios.get("/api/assignments/all-assignments/" + topic);
    },
    createAssignment: function (body) {
        return axios.post("/api/assignments/new-assignment", body);
    },
    updateAssignment: function (name, body) {
        return axios.put("/api/assignments/update-assignment" + name, body);
    },
    removeAssignment: function (name) {
        return axios.delete("api/assignments/remove-assignment/" + name)
    }
};
