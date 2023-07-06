let express = require("express");
let { v4: uuid } = require("uuid");
let app = express();

let bodyParser = require("body-parser");

// student object

let studentList = [
  {
    id: uuid(),
    name: "joy",
    age: 18,
    level: 2,
  },
  {
    id: uuid(),
    name: "joel",
    age: 20,
    level: 1,
  },
  {
    id: uuid(),
    name: "james",
    age: 25,
    level: 3,
  },
  {
    id: uuid(),
    name: "clint",
    age: 22,
    level: 2,
  },
  {
    id: uuid(),
    name: "stalins",
    age: 33,
    level: 1,
  },
  {
    id: uuid(),
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
  let studentToEddit = { id, ...req.body };
  console.log(studentToEddit);

  let listToEdit = studentList.filter((student) => {
    return student.id != id;
  });
  studentList = [...listToEdit, studentToEddit];
  res.json(studentList);
};

let deleteStudent = (req, res) => {
  let { id } = req.params;
  let newStudentList = studentList.filter((student) => {
    return student.id != id;
  });
  studentList = newStudentList;
  console.log(newStudentList);
  res.json({
    status: `student number${id} was deleted form the list`,
    studentList,
  });
};

let createStudent = (req, res) => {
  let id = uuid();
  let newStudent = {
    id,
    ...req.body,
  };
  studentList = [...studentList, newStudent];
  res.json(studentList);
};

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.get("/students", getStudents).get("/student/:id", getStudentByID);
app.post("/students/create/", createStudent);
app.post("/students/update/:id", etditStudent);
app.delete("/students/delete/:id", deleteStudent);
app.get("/students/delete/:id", deleteStudent);

app.listen(5000);
