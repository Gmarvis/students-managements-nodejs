const Book = require("../models/book");
const Cohort = require("../models/cohort");

// callBacks
// get Books callBack
let getBooks = async (req, res) => {
  await Book.findAll()
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occured while fetching Books", error).status(500);
      return res.send("An error occured while fetching Books", error);
    });
};
//get Book by id
let getBookById = async (req, res) => {
  await Book.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Cohort,
    },
  })
    .then((resp) => {
      console.log("book: ", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occured: ", error);
      return res.send("An error occured: ", error).status(404);
    });
};

// update book
let updateBook = async (req, res) => {
  let book = req.body.book;
  Book.update(book, {
    where: {
      id: req.params.id,
    },
  })
    .then((resp) => {
      console.log("Book: ", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("an error occured: ", error);
      res.send("An error occured: ", error).status(404);
    });
};

// create new book
let creacteBook = async (req, res) => {
  let book = req.body.book;
  Book.create(book)
    .then(() => {
      res.send("Ok");
    })
    .catch((error) => {
      console.error("An error occured: ", error);
      res.send("An error occured", error).status(400);
    });
};

// delete book
let deleteBook = async (req, res) => {
  await Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      console.log("Book with Id: " + req.params.id + "was deleted");
      res.send("ok");
    })
    .catch((error) => {
      console.error("An error occured: ", error);
      res.send("An error occured").status(404);
    });
};

module.exports = {
  getBooks,
  getBookById,
  updateBook,
  creacteBook,
  deleteBook,
};
