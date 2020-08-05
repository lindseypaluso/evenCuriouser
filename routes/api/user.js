const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .post(userController.findOrCreate)

router
  .route("/students")
  .get(userController.findStudent)

router
  .route("/:email")
  .get(userController.findByEmail)


module.exports = router;