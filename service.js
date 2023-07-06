let express = require("express");
let app = express();

let bodyParser = require("body-parser");

// student object

let studentList = [
  {
    id: 1,
    name: "joy",
    age: 18,
    level: 2,
  },
  {
    id: 2,
    name: "joel",
    age: 20,
    level: 1,
  },
  {
    id: 3,
    name: "james",
    age: 25,
    level: 3,
  },
  {
    id: 4,
    name: "clint",
    age: 22,
    level: 2,
  },
  {
    id: 5,
    name: "stalins",
    age: 33,
    level: 1,
  },
  {
    id: 6,
    name: "mary",
    age: 16,
    level: 3,
  },
];

// callbacks
let getStudents = (req, res) => {
  res.json(studentList);
};

let getStudentByID = (req, res) => {
  let { id } = req.params;
  let studentId = studentList.find((student) => {
    return student.id == id;
  });
  res.json(studentId);
};

let etditStudent = (req, res) => {
  let { id } = req.params;
  const { name, age, level } = req.body;
  let studentToEddit = { id, name, age, level };
  console.log(studentToEddit);

  let listToEdit = studentList.filter((student) => {
    return student.id != id;
  });
  listToEdit = [...listToEdit, studentToEddit];
  studentList = listToEdit;
  res.json(studentList);
};

let deleteStudent = (req, res) => {
  let { id } = req.params;
  let newStudentList = studentList.filter((student) => {
    return student.id != id;
  });
  studentList = newStudentList;
  res.json({
    status: `student number${id} was deleted form the list`,
    studentList,
  });
};

let createStudent = (req, res) => {
  const { id, name, age, level } = req.body;
  let newStudent = {
    id,
    name,
    age,
    level,
  };
  studentList = [...studentList, newStudent];
  res.json(studentList);
};

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.get("/", getStudents).get("/student/:id", getStudentByID);
app.post("/student/create/", createStudent);
app.post("/student/:id", etditStudent);
app.delete("/student/delete/:id", deleteStudent);
app.get("/student/delete/:id", deleteStudent);

app.listen(5000);
