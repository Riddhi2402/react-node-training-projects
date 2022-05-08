const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');
const auth = require('../middleware/authentication');

// user router
router.get('/', auth, bookController.getBook);
router.get('/get/:id', auth, bookController.getBookById);
router.post('/add', auth, bookController.addBook);

module.exports = router;
