'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      assgn1: {
        type: Sequelize.INTEGER
      },
      assgn2: {
        type: Sequelize.INTEGER
      },
      assgn3: {
        type: Sequelize.INTEGER
      },
      assgn4: {
        type: Sequelize.INTEGER
      },
      assgn5: {
        type: Sequelize.INTEGER
      },
      assgn6: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};