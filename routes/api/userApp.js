const db = require("../../models");
const router = require("express").Router();
const userAssignController = require("../../controllers/user_assignmentsController")

router
  .route("/all")
  .get(userAssignController.findAll)