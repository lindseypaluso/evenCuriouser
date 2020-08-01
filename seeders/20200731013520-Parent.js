'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      first_name : "Jordan",
      last_name : "Call",
      email : "jordanccall@gmail.com",
      student: "Abigail Nielson",
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
      first_name :"Jordan"
    }])
  }
};