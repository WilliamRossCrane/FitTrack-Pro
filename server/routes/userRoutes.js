// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).send('Error retrieving users');
    }
});

module.exports = router;
