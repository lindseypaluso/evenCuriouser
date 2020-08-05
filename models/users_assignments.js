module.exports = function(sequelize, DataTypes) {
    const Users_Assignments = sequelize.define("Users_Assignments", {
      points: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      }
    });
    return Users_Assignments;
  };