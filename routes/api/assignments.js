const router = require("express").Router();
const assignmentsController = require("../../controllers/assignmentsController");

router
  .route("/all-assignments")
  .get(assignmentsController.findAll)

router
  .route("/all-assignments/:name")
  .get(assignmentsController.findByName)

router
  .route("/new-assignment")
  .post(assignmentsController.create)

router
  .route("/update-assignment")
  .put(assignmentsController.update)

router
  .route("/all-assignments")
  .delete(assignmentsController.remove)

module.exports = router;