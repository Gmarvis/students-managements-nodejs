let Sequelize = require("sequelize");

const sequel = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);
// testing the connecton we can use the .authenticated() method as seen below to see is the connection is ok. 
sequel
  .authenticate()
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.error("unable to connect to db: ", error);
  });

  module.exports= sequel