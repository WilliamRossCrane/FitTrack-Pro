// server/app.js
const express = require('express'); // Import express
const app = express();             // Create an instance of express
const PORT = 5001;                 // Define the port

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Basic Route
app.get('/', (req, res) => {
    res.send('Server is running! Welcome to FitTrack Pro.');
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const goalRoutes = require('./routes/goalRoutes');

app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/goals', goalRoutes);
