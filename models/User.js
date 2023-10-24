const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please enter valid email address'],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
});

// Create virtual to get count of user's friends
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
