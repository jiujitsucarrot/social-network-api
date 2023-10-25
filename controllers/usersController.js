const { User } = require('../models/user');

const usersController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find().populate('thoughts friends');
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getUserById: async (req, res) => {
        const userId = req.params.userId;
        try {
            const user = await User.findById(userId).populate('thoughts friends');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    createUser: async (req, res) => {
        const userData = req.body;
        try {
            const user = await User.create(userData);
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    updateUser: async (req, res) => {
        const userId = req.params.userId;
        const updatedData = req.body;
        try {
            const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    deleteUser: async (req, res) => {
        const userId = req.params.userId;
        try {
            const user = await User.findByIdAndDelete(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    addFriend: async (req, res) => {
        const userId = req.params.userId;
        const friendId = req.params.friendId;
        try {
            const user = await User.findByIdAndUpdate(userId, { $addToSet: { friends: friendId } }, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    removeFriend: async (req, res) => {
        const userId = req.params.userId;
        const friendId = req.params.friendId;
        try {
            const user = await User.findByIdAndUpdate(userId, { $pull: { friends: friendId } }, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    },
};

module.exports = usersController;