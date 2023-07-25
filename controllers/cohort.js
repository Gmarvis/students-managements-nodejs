const Cohort = require("../models/cohort");
const Student = require("../models/student");

// cohort callbacks

const getCohorts = async (req, res) => {
  await Cohort.findAll()
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occurred: ", error);
      return res.send("An error occured").status(500);
    });
};

const getCohortbyId = async (req, res) => {
  await Cohort.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Student,
    },
  })
    .then((resp) => {
      console.log("cohort: ", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.log("An error occured while getting cohord: ", error);
      return res.json("An error occured while getting cohord").status(404);
    });
};

const createCohorts = async (req, res) => {
  let cohort = req.body.cohort;
  Cohort.create(cohort)
    .then(() => {
      res.send("ok");
    })
    .catch((error) => {
      console.log("An error occured while creating cohort: ".error);
      res.send("An error occured while creating cohort").status(404);
    });
};

const updateCohort = async (req, res) => {
  let cohort = req.body.cohort;
  Cohort.update(cohort, {
    where: {
      id: req.params.id,
    },
  })
    .then((resp) => {
      console.log("cohort: ", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occured: ", error);
      res.send("An error occured").status(404);
    });
};

const deleteCohort = async (req, res) => {
  await Cohort.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      console.log(
        "cohort with id: " + req.params.id + "has been successfully deleted"
      );
      res.send("ok");
    })
    .catch((error) => {
      console.error("An error occured: ", error);
      res.send("An error occured").status(404);
    });
};

module.exports = {
  getCohorts,
  getCohortbyId,
  createCohorts,
  updateCohort,
  deleteCohort,
};

// routes for cohort
