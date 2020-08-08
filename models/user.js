'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    given_name: DataTypes.STRING,
    family_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    role: DataTypes.STRING
  });
  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
  User.belongsToMany(models.Assignment, {
      onDelete: "cascade",
      through: "Users_Assignments"
    });
  };
  return User;
};