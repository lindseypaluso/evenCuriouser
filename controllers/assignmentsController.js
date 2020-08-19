const db = require("../models");
const { Sequelize } = require("../models");

// Defining methods for the controller
module.exports = {
    findAll: function (req, res) {
        db.Assignment
            .findAll({})
            .then(dbAssignment => res.json(dbAssignment))
            .catch(err => res.status(422).json(err));
    },
    findByName: function (req, res) {
        db.Assignment
            .findOne({ where: { name: req.params.name } })
            .then(dbAssignment => res.json(dbAssignment))
            .catch(err => res.status(422).json(err));
    },
    findTopics: function (req, res) {
        db.Assignment
            .findAll({
                attributes: [
                    [Sequelize.fn("DISTINCT", Sequelize.col('topic')), 'topic']
                ]
            })
            .then(dbAssignment => res.json(dbAssignment))
            .catch(err => res.status(422).json(err));
    },
    findByTopic: function (req, res) {
        db.Assignment
            .findAll({where: {topic: req.params.topic} })
            .then(dbAssignment => res.json(dbAssignment))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Assignment
            .create({
                name: req.body.name,
                description: req.body.description,
                topic: req.body.topic,
                due_date: req.body.due_date,
                points_available: req.body.points_available,
                link: req.body.link
            })
            .then(dbAssignment => res.json(dbAssignment))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Assignment
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbAssignment => res.json(dbAssignment))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Assignment
            .update(
                {
                    default: true
                },
                {
                    name: req.params.name,
                    description: req.params.description,
                    topic: req.params.topic,
                    due_date: req.params.due_date,
                    points_available: req.params.points_available,
                    link: req.params.link
                },
                {where: 
                    {id: req.params.id}
                } 
            )
            .then(dbAssignment => res.json(dbAssignment))
            .catch(err => res.status(422).json(err));
    },
};