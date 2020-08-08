

module.exports = function(sequelize, DataTypes) {
    const Users_Assignments = sequelize.define("Users_Assignments", {
      submitted: {
        type: DataTypes.BOOLEAN
      },
      points_earned: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      }
    });
    Users_Assignments.associate = function(models) {
      Users_Assignments.belongsTo(models.User)
    }

    return Users_Assignments;
  };