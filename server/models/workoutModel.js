// server/models/Workout.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');  // Import User model for relation

const Workout = sequelize.define('Workout', {
    exercise_type: DataTypes.STRING,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    date: DataTypes.DATE,
});

Workout.belongsTo(User); // User has many workouts

module.exports = Workout;
