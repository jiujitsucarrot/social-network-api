const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import database connection
const connection = require('./config/connection');

// Routes setup
const routes = require('./routes');
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});