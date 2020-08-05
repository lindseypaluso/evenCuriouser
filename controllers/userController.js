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
  findOrCreate: function (req, res) {
    db.User
      .findOrCreate({
        where: { email: req.body.email },
        defaults: {
          ...req.body
        }
      })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};