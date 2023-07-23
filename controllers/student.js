const Cohort = require("../models/cohort");
const Student = require("../models/student");

// callbacks
let getStudents = async (req, res) => {
  await Student.findAll()
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occurred: ", error);
      return res.send("An error occured").status(500);
    });
};

let getStudentByID = async (req, res) => {
  await Student.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Cohort,
    },
  })
    .then((resp) => {
      console.log("student: ", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error has occured: ", error);
      return res.send("An error occured").status(404);
    });
};

let deleteStudent = async (req, res) => {
  await Student.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      console.log(
        "Sudent with id: " + req.params.id + "has been successfully deleted"
      );
      res.send("ok");
    })
    .catch((error) => {
      console.error("An error occured: ", error);
      res.send("An error occured").status(404);
    });
};

let updateStudent = async (req, res) => {
  let student = req.body.student;
  Student.update(student, {
    where: {
      id: req.params.id,
    },
  })
    .then((resp) => {
      console.log("Student: ", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occured: ", error);
      res.send("An error occured").status(404);
    });
};

let createStudent = async (req, res) => {
  let student = req.body.student;
  Student.create(student)
    .then(() => {
      res.send("Ok");
    })
    .catch((error) => {
      console.error("An error occured: ", error);
      res.send("An error occured").status(400);
    });
};

module.exports = {
  getStudents,
  getStudentByID,
  updateStudent,
  deleteStudent,
  createStudent,
};
