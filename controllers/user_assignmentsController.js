const db = require("../models");
const { Sequelize } = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Users_Assignments
            .findAll({})
            .then(dbUserAssignment => res.json(dbUserAssignment))
            .catch(err => res.status(422).json(err));
        // db.Assignment
        //     .findAll({ include: {model: db.User},})
        //     .then((dbGrades) => {res.json(dbGrades);
        //     })
    },
    findUser: function (req, res){
        db.Users_Assignments
            .findAll({where: {UserId: req.params.UserId} })
            .then(dbUserAssignment => res.json(dbUserAssignment))
            .catch(err => res.status(422).json(err));
    },

    // findOneAssingment: function(req, res) {
    //     db.Assignment.findOne({
    //         where: {
    //         id: req.params.id,
    //         },
    //         include: {
    //         model: db.User
    //         },
    //     }).then((dbGrades) => {
    //         res.json(dbGrades);
    //     })
    // }    
}