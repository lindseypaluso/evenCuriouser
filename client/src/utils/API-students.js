import axios from "axios";

export default {
    getStudents: function(body) {
        return axios.get("/api/user/students", body);
    }
};
