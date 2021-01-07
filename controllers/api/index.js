const router = require("express").Router();
const userRoutes = require("./userRoutes");
const routineRoutes = require("./routineRoutes");
const workoutRoutes = require("./workoutRoutes");
const exercisesRoutes = require("./exercisesRoutes");


router.use("/users", userRoutes);
router.use("/routine", routineRoutes);
router.use("/workout", workoutRoutes);
router.use("/exercises", exercisesRoutes);

module.exports = router;
