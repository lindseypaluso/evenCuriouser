const db = require("../models");

module.exports = {
    findByEmail: function (req, res) {
        db.User
            .findOne({ where: { email: req.params.email } })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User 
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findStudent: function (req, res) {
        db.User
            .findAll({ where: { role: "student"} })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
};