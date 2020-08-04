
const router = require("express").Router();
const userRoutes = require("./user");
const assignmentRoutes = require("./assignments");

router.use('/assignments', assignmentRoutes);
router.use("/user", userRoutes);

module.exports = router;