const { Sequelize, DataTypes } = require("sequelize");
const sequel = require("../db");
const Cohort = sequel.define("cohorts", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue:DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
  },
  startingMonth: {
    type: DataTypes.CHAR(255),
  },
  startingYear: {
    type: DataTypes.STRING,
  },
});

sequel.sync().then(()=>{
    console.log("cohort table created successfully")
}).catch((error)=>{
    console.log("an error occured while creating cohort table", error)
})


module.exports = Cohort