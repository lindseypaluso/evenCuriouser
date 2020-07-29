'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define('Parent', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    student: DataTypes.STRING
  }, {});
  Parent.associate = function(models) {
    // associations can be defined here
  };
  return Parent;
};