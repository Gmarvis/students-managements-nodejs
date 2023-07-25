const Cohort = require("../models/cohort");

// we require Sequelize with its destructured object
const { Sequelize, DataTypes } = require("sequelize");

// here we import sequel from our ds file where we configured our database at.

const sequel = require("../db");
const Book = require("./book");

// Model defination, and we define the our table of students
const Student = sequel.define("students", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  level: {
    type: DataTypes.ENUM("1st", "2nd", "3rd"),
  },

  cohortId: {
    type: DataTypes.UUID,
  },

  street: {
    type: DataTypes.STRING,
  },

  dob: {
    type: DataTypes.DATEONLY,
  },

  town: {
    type: DataTypes.STRING,
  },

  region: {
    type: DataTypes.STRING,
  },

  country: {
    type: DataTypes.STRING,
  },

  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  sex: {
    type: DataTypes.ENUM("male", "female"),
  },
  score: {
    type: DataTypes.INTEGER,
  },
});

Student.belongsTo(Cohort);
Cohort.hasMany(Student);


const StudentBooks = sequel.define("student_books", {}, { timestamps: false });
Student.belongsToMany(Book, { through: StudentBooks });
Book.belongsToMany(Student, { through: StudentBooks });

/* when we difine our Model  we are telling sequelize a few things about our database 
but in most cases the database table might not eist or might be missing some 
columns that we want include to our database. 

so we will need to sync our databasr  by calling model.sync(options), 
an asynchronous function (that returns a Promise). 
With this call, Sequelize will automatically perform an SQL query to the database. 
Note that this changes only the table in the database, not the model in the JavaScript side.
*/
sequel
  .sync({ alter: true })
  // this creates a table is the table does not exist and does nothing if it already exist.

  //.sync( { force: true } ) this creates a new table and drops the already exist.

  //.sync( { timestamps: false } ) this disable the created at and created_at and updated_at timstamp columns

  //.sync( {  timestamps: true, createdAt: false, updatedAt: 'updateTimestamp'} ) this will allow only the updated at column fild.

  .then(() => {
    console.log("student table created successfully");
  })
  .catch((error) => {
    console.log("an error occured", error);
  });

module.exports = Student;
