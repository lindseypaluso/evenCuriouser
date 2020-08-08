import axios from "axios";

export default {
    getAll: function(body) {
        return axios.get("/api/grades/all", body);
    },
    getUserAssignments: function(UserId){
        return axios.get("/api/grades/all/" + UserId);
    },
    getAssignments: function(ID) {
        return axios.get("/api/grades/" + ID);
    }
};