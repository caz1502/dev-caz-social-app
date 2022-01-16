
// COMPLETE - to be tested

const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

router.use("/courses", userRoutes);
router.use("/students", thoughtRoutes);

module.exports = router;
