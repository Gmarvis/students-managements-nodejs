const { Sequelize, DataTypes } = require("sequelize");

const sequel = require("../db");

// model defination
const Course = sequel.define("courses", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  courseTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teacher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CourseDuration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

