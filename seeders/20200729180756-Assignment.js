'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkCreate([{
      name: "Letter Quiz",
      description: "Match upper and lower case letters in this alphabet review quiz.", 
      topic: "Reading & Writing",
      due_date: "2020-08-08",
      points: 100
    },
    {
      name: "Camping Word Search",
      description: "Complete this word search of camping terms.", 
      topic: "Reading & Writing",
      due_date: "2020-08-02",
      points: 100
    },
    {
      name: "L Blend Consonants",
      description: "Get to know L, one of the most likable letters! See how many of these L blends you can figure out.", 
      topic: "Reading & Writing",
      due_date: "2020-08-08",
      points: 100
    },
    {
      name: "Fractions Quiz",
      description: "This fractions quiz worksheet offers a visual representation of fractions—including halves, thirds, and fourths.", 
      topic: "Math",
      due_date: "2020-08-02",
      points: 100
    },
    {
      name: "Jumping Math",
      description: "Complete this single digit addition worksheet.", 
      topic: "Math",
      due_date: "2020-08-10",
      points: 100
    },
    {
      name: "Math Superstar",
      description: "Count the stars in this worksheet.", 
      topic: "Math",
      due_date: "2020-08-08",
      points: 100
    },
  ], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Assignment', [{

    }])
  }
};