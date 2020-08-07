const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.User_Assignments
            .findAll({})
            .then(dbUserAssignment => res.json(dbUserAssignment))
            .catch(err => res.status (422).json(err));
    },
    findByUserID: function(req, res) {
        db.User_Assignments
            .findAll({where: { UserID: req.params.UserID } })
            .then(dbUserAssignment => res.json(dbUserAssignment))
            .catch(err => res.status(422).json(err));
    },
    findByAssignID: function(req, res) {
        db.User_Assignments
            .findAll({where: { AssignmentID: req.params.AssignmentID } })
            .then(dbUserAssignment => res.json(dbUserAssignment))
            .catch(err => res.status (422).json(err));
    }
}