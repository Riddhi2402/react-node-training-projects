const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller.js');
const uploadFile = require('../Middleware/upload');

//GET Request
router.get('/get', userController.getAllUsers);

//elasticsearch request
router.get('/getselecteduser/:searchvalue', userController.getSelectedUser);

//POST Request
router.post('/create', uploadFile.single('file'),userController.postUser);

//GET user by id
router.get('/get/:id', userController.findUserById);

//update user by id
router.put('/edit/:id', userController.updateUserById);

//delete user by id
router.delete('/delete/:id', userController.deleteUserById);

//delete All user
router.delete('/delete', userController.deleteAllUser);

module.exports = router;
