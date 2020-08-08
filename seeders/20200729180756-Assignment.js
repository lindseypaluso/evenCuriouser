'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkCreate([{
      name: "Letter Quiz",
      description: "Match upper and lower case letters in this alphabet review quiz.", 
      topic: "Reading & Writing",
      due_date: "2020-08-07",
      points_available: 100,
      link: "https://classroom.google.com/u/0/c/MTE3NzgxNTI1MTg5/a/MTE3Nzg2ODQwMDA4/details"
    },
    {
      name: "Camping Word Search",
      description: "Complete this word search of camping terms.", 
      topic: "Reading & Writing",
      due_date: "2020-08-04",
      points_available: 100,
      link: "https://classroom.google.com/u/0/c/MTE3NzgxNTI1MTg5/a/MTE3Nzg2ODM5OTkx/details"
    },
    {
      name: "L Blend Consonants",
      description: "Get to know L, one of the most likable letters! See how many of these L blends you can figure out.", 
      topic: "Reading & Writing",
      due_date: "2020-08-07",
      points_available: 100,
      link: "https://classroom.google.com/u/0/c/MTE3NzgxNTI1MTg5/a/MTE3Nzg1OTI0NTMz/details"
    },
    {
      name: "Fractions Quiz",
      description: "This fractions quiz worksheet offers a visual representation of fractions—including halves, thirds, and fourths.", 
      topic: "Math",
      due_date: "2020-08-04",
      points_available: 100, 
      link: "https://classroom.google.com/u/0/c/MTE3NzgxNTI1MTg5/a/MTE3Nzg2ODQwMDI5/details"
    },
    {
      name: "Jumping Math",
      description: "Complete this single digit addition worksheet.", 
      topic: "Math",
      due_date: "2020-08-11",
      points_available: 100,
      link: "https://classroom.google.com/u/0/c/MTE3NzgxNTI1MTg5/a/MTE3Nzg1Mjc1MDYz/details"
    },
    {
      name: "Math Superstar",
      description: "Count the stars in this worksheet.", 
      topic: "Math",
      due_date: "2020-08-07",
      points_available: 100,
      link: "https://classroom.google.com/u/0/c/MTE3NzgxNTI1MTg5/a/MTE3Nzg1OTI0Mjc5/details"
    },
  ], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Assignment', [{

    }])
  }
};