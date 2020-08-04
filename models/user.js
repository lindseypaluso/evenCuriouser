'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    given_name: DataTypes.STRING,
    family_name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
 User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
  User.hasMany(models.Assignment, {
      onDelete: "cascade"
    });
  };
  return User;
};