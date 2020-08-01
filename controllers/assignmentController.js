const db = require("../models");

// Defining methods for the controller
module.exports = {
    findAll: function (req, res) {
        db.Assignments
            .findAll({})
            .then(dbAssignments => res.json(dbAssignments))
            .catch(err => res.status(422).json(err));
    },
    findByName: function (req, res) {
        db.Assignments
            .findOne({ where: { id: req.params.name } })
            .then(dbAssignments => res.json(dbAssignments))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Assignments
            .create({
                name: req.body.name,
                description: req.body.description,
                topic: req.body.topic,
                due_date: req.body.date,
                points: req.body.points
            })
            .then(dbAssignments => res.json(dbAssignments))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Assignments
            .destroy({
                where: {
                    id: req.params.name,
                },
            })
            .then(dbAssignments => res.json(dbAssignments))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Assignments
        .findOneAndUpdate({ _id: req.params.name }, req.body)
        .then(dbAssignments => res.json(dbAssignments))
        .catch(err => res.status(422).json(err));
    },
};