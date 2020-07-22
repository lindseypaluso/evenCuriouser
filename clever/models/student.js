const mysql = require("mysql");
const sequelize = require("sequelize");
const Schema = sequelize.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

const Student = sequelize.model("Student",cleverSchema);

module.exports = Student;
