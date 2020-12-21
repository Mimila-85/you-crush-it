const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Routine extends Model {}

Routine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sub_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    set: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 3,
      validate: {
        isNumeric: true // will only allow numbers
      }
    },
    repetition: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      validate: {
        isNumeric: true // will only allow numbers
      }
    },
    time_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 30,
      validate: {
        isNumeric: true // will only allow numbers
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "routine",
  }
);

module.exports = Routine;
