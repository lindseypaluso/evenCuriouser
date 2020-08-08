import axios from "axios";

export default {
    getAll: function(body) {
        return axios.get("/api/grades/all", body);
    },
    getAssignments: function(ID) {
        return axios.get("/api/grades/" + ID);
    }
};