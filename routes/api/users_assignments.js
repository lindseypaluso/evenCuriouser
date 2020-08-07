const db = require("../../models");
const router = require("express").Router();
const userAssignController = require("../../controllers/user_assignmentsController")

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

router
  .route("/all")
  .get(userAssignController.findAll)

router
  .route("/:UserID")
  .get(userAssignController.getUserAssign)

router
  .route("/:AssignmentID")
  .get(userAssignController.getAssignments)

module.exports = router;
