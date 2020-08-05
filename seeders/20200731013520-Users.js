'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkCreate([{
      given_name : "Jordan",
      family_name : "Call",
      email : "jordanccall@gmail.com",
      role: "student",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      given_name : "Lisa",
      family_name : "Campbell",
      email : "lisacampbell85@gmail.com",
      role: "student",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      given_name : "Abigail",
      family_name : "Nielson",
      email : "aa.nielson18@gmail.com",
      role: "teacher",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      given_name : "Lindsey",
      family_name : "Paluso",
      email : "lindzymarie@gmail.com",
      role: "student",
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