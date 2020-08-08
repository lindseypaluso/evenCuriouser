const db = require("../../models");
const router = require("express").Router();
const userAssignController = require("../../controllers/user_assignmentsController")

router
  .route("/all")
  .get(userAssignController.findAll)

router 
  .route("/all/:UserId")
  .get(userAssignController.findUser)

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
