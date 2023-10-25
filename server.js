require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social_network_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

db.once('open', () => {
    console.log('Connected to MongoDB');

// Define Mongoose models 
const { User, Thought, Reaction } = require(path.join(__dirname, 'models'));

// Define Routes
const usersRoutes = require('./routes/api/users');
const thoughtsRoutes = require('./routes/api/thoughts');
const reactionsRoutes = require('./routes/api/reactions');

app.use('/api/users', usersRoutes);
app.use('/api/thoughts', thoughtsRoutes);
app.use('/api/reactions', reactionsRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

});

