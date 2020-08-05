'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkCreate([{
      points: 71,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 1,
      UserId: 1
    },
    {
      points: 88,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 1,
      UserId: 2
    },
    {
      points: 94,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 1,
      UserId: 3
    },
    {
      points: 99,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 2,
      UserId: 1
    },
    {
      points: 83,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 2,
      UserId: 2
    },
    {
      points: 78,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 2,
      UserId: 3
    },
    {
      points: 0,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 3,
      UserId: 1
    },
    {
      points: 65,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 3,
      UserId: 2
    },
    {
      points: 77,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 3,
      UserId: 3
    },
    {
      points: 91,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 4,
      UserId: 1
    },
    {
      points: 0,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 4,
      UserId: 2
    },
    {
      points: 72,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 4,
      UserId: 3
    },
    {
      points: 71,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 5,
      UserId: 1
    },
    {
      points: 88,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 5,
      UserId: 2
    },
    {
      points: 94,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 5,
      UserId: 3
    },
    {
      points: 99,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 6,
      UserId: 1
    },
    {
      points: 83,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 6,
      UserId: 2
    },
    {
      points: 78,
      createdAt : new Date(),
      updatedAt : new Date(),
      AssignmentId: 6,
      UserId: 3
    },
    
  ], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users_assignments', [{

    }])
  }
};
