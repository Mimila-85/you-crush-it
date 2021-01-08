//>
const router = require("express").Router();
const { Exercise } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll();
    const exercise = exerciseData.map((exercise) => exercise.get({ plain: true }));
    res.json(exercise);
  } catch (err) {
    res.status(400).json(err.message);
  }
});
module.exports = router;