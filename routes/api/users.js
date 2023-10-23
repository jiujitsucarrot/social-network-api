const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');

// GET route to get all users
router.get('/', usersController.getAllUsers);

// GET route to get a single user by its Id to populate thoughts and data
router.get('/:userId', usersController.getUserById);

// POST route to create a new user
router.post('/', usersController.createUser);

// PUT route to update a user by its Id
router.put('/:userId', usersController.updateUser);

// DELETE route to remove a user by its Id
router.delete('/:userId', usersController.deleteUser);

// POST route to add new friend to users ffriend list
router.post('/:userId/friends/:friendId', usersController.addFriend);

// DELETE route to remove a friend from users friend list
router.delete('/:userId/friends/:friendId', usersController.removeFriend);

module.exports = router;