const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Routine extends Model { }

Routine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name_routine: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // set: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   defaultValue: 3,
    //   validate: {
    //     isNumeric: true // will only allow numbers
    //   }
    // },
    // repetition: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   defaultValue: 10,
    //   validate: {
    //     isNumeric: true // will only allow numbers
    //   }
    // },
    array_of_exercises: {
      type: DataTypes.TEXT,
      alowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
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
