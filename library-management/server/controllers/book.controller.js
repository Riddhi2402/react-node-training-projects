const express = require('express');
const db = require('../models');
const router = express.Router();
const auth = require('../middleware/authentication');

const Book = db.books;

// get all books
const getBook = async (request, response) => {
  try {
    const bookList = await Book.find();
    response.json(bookList);
  } catch (error) {
    response.json(error);
  }
};

// get book by id
const getBookById = async (request, response) => {
  try {
    const book = await Book.findById(request.params.id);
    response.json(book);
  } catch (error) {
    response.json(error);
  }
};

const addBook = async (request, response) => {
  const newBook = new Book({
    name: request.body.name,
    genre: request.body.genre,
    author: request.body.author,
  });

  try {
    const payload = await newBook.save();
    response.json(payload);
  } catch (error) {
    response.json(error);
  }
};

module.exports = { getBook, getBookById, addBook };
