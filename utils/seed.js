const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

mongoose.connect('mongodb://localhost/social_network_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

// Define sample user data for seeding
const usersData = [
    {
        username: 'user1',
        email: 'user1@example.com',
    },
    {
        username: 'user2',
        email: 'user2@example.com',
    },
];

// Define sample thought data for seeding
const thoughtsData = [
    {
        thoughtText: 'This is thought 1.',
        username: 'user1',
    },
    {
        thoughtText: 'This is thought 2.',
        username: 'user2',
    },
];

const seedDatabase = async () => {
    try {
        await User.deleteMany({});
        await Thought.deleteMany({});

        // Seed users
        const users = await User.insertMany(usersData);

        // Seed thoughts
        const thoughts = await Thought.insertMany(thoughtsData);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding the database:', error);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

// Run the seeding script
seedDatabase();