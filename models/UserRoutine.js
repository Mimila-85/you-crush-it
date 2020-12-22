// Import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// Import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize UserRoutine model (table) by extending off Sequelize's Model class. This model is being created to be our through connection between User and Routine.
class UserRoutine extends Model {}

// Set up fields and rules for UserRoutine model
UserRoutine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = UserRoutine;
