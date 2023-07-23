let express = require("express");
let { v4: uuid } = require("uuid");
let app = express();
let dotenv = require("dotenv");
dotenv.config();
let bodyParser = require("body-parser");

// const sequel = require("sequel")

let Sequelize = require("sequelize");
const student = require("./models/student");
const Book = require("./models/book");
const Cohort = require("./models/cohort");
const Student = require("./models/student");
const {
  getCohorts,
  getCohortbyId,
  createCohorts,
  updateCohort,
  deleteCohort,
} = require("./controllers/cohort");
const {
  getStudents,
  getStudentByID,
  updateStudent,
  deleteStudent,
  createStudent,
} = require("./controllers/student");

const {
  getBooks,
  getBookById,
  updateBook,
  creacteBook,
  deleteBook,
} = require("./controllers/book");

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes for students

app.get("/students", getStudents).get("/student/:id", getStudentByID);
app.post("/students/create/", createStudent);
app.post("/students/update/:id", updateStudent);
app.delete("/students/delete/:id", deleteStudent);
app.get("/students/delete/:id", deleteStudent);

// routes for cohort

app.get("/cohorts", getCohorts);
app.post("/cohorts/create", createCohorts);
app.get("/cohorts/:id", getCohortbyId);
app.post("/cohorts/update/:id", updateCohort);
app.delete("/cohorts/delete/:id", deleteCohort);

// routes for book

app.get("/books", getBooks).get("/book/:id", getBookById);
app.post("/books/create", creacteBook).post("/books/update/:id", updateBook);
app.delete("/books/delete/:id", deleteBook);

app.listen(5000);

// {
//   "student":{
//     "name": "Ntamfu collins",
//     "level": "1st",
//     "street": "Simbock",
//     "dob": "1996-07-12",
//     "phone": "23777877572",
//     "town": "younde",
//     "country": "Cameroon",
//     "sex": "Male",
//     "email": "ntamfucollins@gmail.com",
//     "score": "68"
//   }
// }
