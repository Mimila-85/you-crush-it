const sequelize = require ("../config/connection");
const { User, Routine, UserRoutine } = require ("../models");

const userData = require ("./userData.json");
const routineData = require ("./routineData.json");
const userRoutineData = require ("./userRoutineData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true});
  console.log("----- DATABASE SYNCED -----");
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log("----- USER SEEDED -----");
  await Routine.bulkCreate(routineData);
  console.log("----- ROUTINE SEEDED -----");
  await UserRoutine.bulkCreate(userRoutineData);
  console.log("----- USERROUTINE SEEDED -----");

  process.exit(0);
};

seedDatabase();