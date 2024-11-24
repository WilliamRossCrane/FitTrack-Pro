// server/models/Goal.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Goal = sequelize.define('Goal', {
    goal_type: DataTypes.STRING,
    target_value: DataTypes.FLOAT,
    date_set: DataTypes.DATE,
});

Goal.belongsTo(User);

module.exports = Goal;
