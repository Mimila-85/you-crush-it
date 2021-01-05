const User = require("./User");
const Routine = require("./Routine");
const Exercise = require("./Exercise");
const Workout = require("./Workout");

User.hasMany(Routine, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Routine.belongsTo(User, {
  foreignKey: "user_id"
});

Routine.hasMany(Exercise, {
  foreignKey: "exercise_id",
  onDelete: "SET NULL"
});

Exercise.belongsTo(Routine, {
  foreignKey: "exercise_id"
});

User.hasMany(Workout, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Workout.belongsTo(User, {
  foreignKey: "user_id"
});

Workout.hasOne(Routine, {
  foreignKey: "routine_id",
  onDelete: "SET NULL"
});

Routine.belongsTo(Workout, {
  foreignKey: "routine_id"
});

// Package our models and export them as an object so we can import them together and use their proper names.
module.exports = {
  User,
  Routine,
  Exercise,
  Workout
};
