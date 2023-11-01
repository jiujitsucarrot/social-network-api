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
        username: 'MethodMan',
        email: 'method@wumail.com',
    },
    {
        username: 'DirtMcGirt',
        email: 'odb@wumail.com',
    },
    {
        username: 'Ghostface',
        email: 'ghostfacek@wumail.com',
    },
    {
        username: 'Raekwon',
        email: 'thachef@wumail.com',
    },
    {
        username: 'RZA',
        email: 'tharizza@wumail.com',
    },
    {
        username: 'TheGenius',
        email: 'genius@wumail.com',
    },
    {
        username: 'CappaDonna',
        email: 'cappadonna@wumail.com',
    },
    {
        username: 'Inspectah',
        email: 'inspectahdeck@wumail.com',
    },
    {
        username: 'UGod',
        email: 'babyu@wumail.com',
    },
    {
        username: 'MastaK',
        email: 'mastakillah@wumail.com',
    },
    {
        username: 'RedMan',
        email: 'redman@wumail.com',
    },

];

// Define sample thought data for seeding
const thoughtsData = [
    {
        thoughtText: 'Better freeze in ya tracks, a Wu-Tang bzzzz killah bees on ya back.',
        username: 'MethodMan',
    },
    {
        thoughtText: 'Wu-Tang killah bees on the swarm.',
        username: 'DirtMcGirt',
    },
    {
        thoughtText: 'For cryin out loud, my style is wild so book me. Not long is how long that this rhyme took me.',
        username: 'Ghostface',
    },
    {
        thoughtText: 'Say peace to cats who rock mad knowledge, knowledgists. Street astrologists, light up the mic yo acknowledge this.',
        username: 'Raekwon',
    },
    {
        thoughtText: 'Stroll with the holy roll, then attack the globe with the buckus. Style the ruckus.',
        username: 'RZA',
    },
    {
        thoughtText: 'Unnecessary beef is more cows to breed.',
        username: 'TheGenius',
    },
    {
        thoughtText: 'Cappa Donna sauna, old school lets go inferno.',
        username: 'CappaDonna',
    },
    {
        thoughtText: 'The lone ranger, code red. DANGER. Deep in the dark with the art, to rip the charts apart.',
        username: 'Inspectah',
    },
    {
        thoughtText: 'My hip hop will rock and shock the nation. Like the Emancipation Proclamation.',
        username: 'UGod',
    },
    {
        thoughtText: 'The flow, changes like a chameleon.',
        username: 'MastaK',
    },
    {
        thoughtText: 'Doc, Meth back in the flesh. Blood and bones, dont condone spend bank loans on homegrown.',
        username: 'RedMan',
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