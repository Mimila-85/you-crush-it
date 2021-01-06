const User = require("./User");
const Routine = require("./Routine");
const Exercise = require("./Exercise");
const Workout = require("./Workout");
const RoutineExercise = require("./RoutineExercise");


User.hasMany(Routine, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Routine.belongsTo(User, {
  foreignKey: "user_id"
});

// Routine belongToMany Exercise (through routineExercise)
// Define the RoutineExercise model as our through table. Sequelize creates a productId as foreign key.
Routine.belongsToMany(Exercise, { through: RoutineExercise });

// Exercise belongToMany Routine (through routineExercise).
// Define the RoutineExercise model as our through table. Sequelize creates a tagId as foreign key.
Exercise.belongsToMany(Routine, { through: RoutineExercise });

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
  Workout,
  RoutineExercise
};
