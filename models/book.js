const Cohort = require("../models/cohort");
const Student = require("../models/student");
const { Sequelize, DataTypes } = require("sequelize");

const sequel = require("../db");

// Model defination
const Book = sequel.define("books", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Book.belongsTo(Cohort);

sequel
  .sync({ alter: true })

  .then(() => {
    console.log("book table was created successfully");
  })
  .catch((error) => {
    console.log("An error occured while creating Book table", error);
  });

module.exports = Book;
