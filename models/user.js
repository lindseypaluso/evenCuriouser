'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING
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