const router = require("express").Router();
const { Workout, User, Routine, Exercise } = require("../../models");
const withAuth = require("../../utils/auth")

router.post("/", withAuth, async (req, res) => {
  try {
    const newWorkout = await Workout.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password", "email"] },
      include: [
        { 
          model: Workout,
          attributes: [ "date", "array_of_results" ],
          order: ["date", "ASC"],
          include: [
            {
              model: Routine,
              attributes: ["name_routine"],
              include: [
                {
                  model: Exercise,
                  attributes: ["name"]
                }
              ]
            }
          ]
        }
      ],
    });

    const user = userData.get({ plain: true });

    res.json(user)
    
  } catch (err) {
    // Server error response 500 - Internal Server Error
    res.status(500).json(err.message);
  }
});

module.exports = router;
