const express = require('express');
const router = express.Router();
const reactionsController = require('../../controllers/reactionsController');

// POST route to create a reaction for a thought
router.post('/:thoughtId/reactions', reactionsController.createReaction);

// DELETE route to remove a reaction 
router.delete('/:thoughtId/reactions/:reactionId', reactionsController.deleteReaction);

module.exports = router;