const router = require("express").Router();
const assignmentsController = require("../../controllers/assignmentsController");

router
  .route("/all-assignments")
  .get(assignmentsController.findAll)

router
  .route("/all-topics")
  .get(assignmentsController.findTopics)

router
  .route("/all-assignments/:topic")
  .get(assignmentsController.findByTopic)

router
  .route("/new-assignment")
  .post(assignmentsController.create)

router
  .route("/update-assignment/:name")
  .put(assignmentsController.update)

router
  .route("/remove-assignment/:name")
  .delete(assignmentsController.remove)

router
  .route("/:name")
  .get(assignmentsController.findByName)
  
  module.exports = router;