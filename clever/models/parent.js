const mysql = require("mysql");
const sequelize = require("sequelize");
const Schema = sequelize.Schema;

const parentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

const Book = sequelize.model("Parent", parentSchema);

module.exports = Parent;