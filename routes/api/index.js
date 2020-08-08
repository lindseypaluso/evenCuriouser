
const router = require("express").Router();
const userRoutes = require("./user");
const assignmentRoutes = require("./assignments");
const join = require("./users_assignments")
// const userApp = require("./userApp");

router.use('/assignments', assignmentRoutes);
router.use("/user", userRoutes);
router.use("/grades", join);
// router.use("/userapp", userApp);
module.exports = router;