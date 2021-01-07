const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Routine extends Model {}

Routine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      //false
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name_routine: {
      type: DataTypes.STRING,
      //false
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
    // array of excerId
    array_of_exercises: {
      type: DataTypes.JSON,
      //false
      allowNull: false,
    },
    // duration_min: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   defaultValue: 30,
    //   validate: {
    //     isNumeric: true // will only allow numbers
    //   }
    // },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      //remove
      allowNull: true,
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
