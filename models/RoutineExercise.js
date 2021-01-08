const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class RoutineExercise extends Model { }

RoutineExercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    routine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "routineExercise",
  }
);

module.exports = RoutineExercise;
