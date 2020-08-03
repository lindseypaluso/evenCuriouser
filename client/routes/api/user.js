const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .post(userController.create)

// Matches with "/api/books/:id"
router
  .route("/:email")
  .get(userController.findByEmail)

module.exports = router;