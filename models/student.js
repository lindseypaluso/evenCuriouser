'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    assgn1: DataTypes.INTEGER,
    assgn2: DataTypes.INTEGER,
    assgn3: DataTypes.INTEGER,
    assgn4: DataTypes.INTEGER,
    assgn5: DataTypes.INTEGER,
    assgn6: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};