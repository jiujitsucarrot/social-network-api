const express = require('express');
const router = express.Router();
const thoughtsController = require('../../controllers/thoughtsController');

// GET route to get all thoughts
router.get('/', thoughtsController.getAllThoughts);

// GET route to get single thought by Id
router.get('/:thoughtId', thoughtsController.getThoughtById);

// POST route to create new thought
router.post('/', thoughtsController.createThought);

// PUT route to update a thought by its Id
router.put('/:thoughtId', thoughtsController.updateThought);

// DELETE route to remove a thought by Id
router.delete('/:thoughtId', thoughtsController.deleteThought);

module.exports = router;