'use strict';
module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define('Assignment', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    description: DataTypes.STRING,
    topic: DataTypes.STRING,
    due_date: DataTypes.DATE,
    points_available: DataTypes.INTEGER
  });
  Assignment.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Assignment.belongsToMany(models.User, {
      through: "Users_Assignments"
    });
  };
  return Assignment;
};