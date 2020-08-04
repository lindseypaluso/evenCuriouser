const db = require("../../models");
const router = require("express").Router();

router.get("/:id", function (req, res) {
  db.Assignment.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: db.User
    },
  }).then((dbGrades) => {
    res.json(dbGrades);
  })
})

module.exports = router;
