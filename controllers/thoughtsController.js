const { Thought, User } = require('../models/Thought');

const thoughtsController = {
    getAllThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find().populate('reactions');
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getThoughtById: async (req, res) => {
        const thoughtId = req.params.thoughtId;
        try {
            const thought = await Thought.findById(thoughtId).populate('reactions');
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    createThought: async (req, res) => {
        const thoughtData = req.body;
        try {
            const thought = await Thought.create(thoughtData);
            await User.findByIdAndUpdate(thoughtData.username, { $push: { thoughts: thought._id } });
            res.status(201).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updateThought: async (req, res) => {
        const thoughtId = req.params.thoughtId;
        const updatedData = req.body;
        try {
            const thought = await Thought.findByIdAndUpdate(thoughtId, updatedData, { new: true });
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteThought: async (req, res) => {
        const thoughtId = req.params.thoughtId;
        try {
            const thought = await Thought.findByIdAndDelete(thoughtId);
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            await User.findByIdAndUpdate(thought.username, { $pull: { thoughts: thought._id } });
            res.json({ message: 'Thought deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = thoughtsController;