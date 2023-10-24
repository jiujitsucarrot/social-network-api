const mongoose = require('mongoose');
const { Schema } = mongoose;

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleString(),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        {
            reactionId: {
                type: Schema.Types.ObjectId,
                default: () => new mongoose.Types.ObjectId(),
            },
            reactionBody: {
                type: String,
                required: true,
                maxlength: 280,
            },
            username: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => new Date(timestamp).toLocaleString(),
            },
        },
    ],
});

// Create virtual to get count of reactions for thought 
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;