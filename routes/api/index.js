
const router = require("express").Router();
const userRoutes = require("./user");
const assignmentRoutes = require("./assignments");
const join = require("./users_assignments")

router.use('/assignments', assignmentRoutes);
router.use("/user", userRoutes);
router.use("/grades", join)

module.exports = router;