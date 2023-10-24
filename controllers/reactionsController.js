const { Thought } = require('../models/thought');

const reactionsController = {
    createReaction: async (req, res) => {
        const thoughtId = req.params.thoughtId;
        const { reactionBody, username } = req.body;
        try {
            const thought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $push: { reactions: { reactionBody, username } } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }

            res.status(201).json(thought.reactions[thought.reactions.length - 1]);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    deleteReaction: async (req, res) => {
        const thoughtId = req.params.thoughtId;
        const reactionId = req.params.reactionId;
        try {
            const thought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $pull: { reactions: { _id: reactionId } } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json({ message: 'Reaction deleted' });
        } catch (err) {
            res.status(400).json(err);
        }
    },
};

module.exports = reactionsController;