'use strict';
module.exports = (sequelize, DataTypes) => {
  const Assignments = sequelize.define('Assignments', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    topic: DataTypes.STRING,
    due_date: DataTypes.DATE,
    points: DataTypes.INTEGER
  }, {});
  Assignments.associate = function(models) {
    // associations can be defined here
  };
  return Assignments;
};