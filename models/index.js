const User = require("./User");
const Routine = require("./Routine");
const Exercise = require("./Exercise");
const Workout = require("./Workout");
const RoutineExercise = require("./RoutineExercise");


<<<<<<< HEAD
// User belongToMany Routine (through UserRoutine)
// Define the UserRoutine model as our through table. Sequelize creates a userId as foreign key.
User.belongsToMany(Routine, { through: UserRoutine });

// Routine belongToMany User (through UserRoutine).
// Define the UserRoutine model as our through table. Sequelize creates a routineId as foreign key.
Routine.belongsToMany(User, { through: UserRoutine });
=======
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
>>>>>>> 56ee1890e982839dbab9b59f1c96988b2c5fc5b3

// Package our models and export them as an object so we can import them together and use their proper names.
module.exports = {
  User,
  Routine,
  Exercise,
  Workout,
  RoutineExercise
};
