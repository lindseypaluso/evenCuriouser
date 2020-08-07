'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkCreate([{
      submitted: true,
      points_earned: 71,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 1,
      UserId: 1
    },
    {
      submitted: true,
      points_earned: 88,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 1,
      UserId: 2
    },
    {
      submitted: true,
      points_earned: 94,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 1,
      UserId: 3
    },
    {
      submitted: true,
      points_earned: 99,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 2,
      UserId: 1
    },
    {
      submitted: true,
      points_earned: 83,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 2,
      UserId: 2
    },
    {
      submitted: true,
      points_earned: 78,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 2,
      UserId: 3
    },
    {
      submitted: false,
      points_earned: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 3,
      UserId: 1
    },
    {
      submitted: true,
      points_earned: 65,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 3,
      UserId: 2
    },
    {
      submitted: true,
      points_earned: 77,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 3,
      UserId: 3
    },
    {
      submitted: true,
      points_earned: 91,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 4,
      UserId: 1
    },
    {
      submitted: false,
      points_earned: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 4,
      UserId: 2
    },
    {
      submitted: true,
      points_earned: 72,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 4,
      UserId: 3
    },
    {
      submitted: true,
      points_earned: 71,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 5,
      UserId: 1
    },
    {
      submitted: true,
      points_earned: 88,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 5,
      UserId: 2
    },
    {
      submitted: true,
      points_earned: 94,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 5,
      UserId: 3
    },
    {
      submitted: true,
      points_earned: 99,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 6,
      UserId: 1
    },
    {
      submitted: true,
      points_earned: 83,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 6,
      UserId: 2
    },
    {
      submitted: true,
      points_earned: 78,
      createdAt: new Date(),
      updatedAt: new Date(),
      AssignmentId: 6,
      UserId: 3
    },

    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users_assignments', [{

    }])
  }
};
