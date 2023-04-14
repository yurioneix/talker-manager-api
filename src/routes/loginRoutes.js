const express = require('express');
const { generateToken } = require('../utils/talkerFunctions');

const router = express.Router();

router.post('/', async (req, res) => {
    const token = generateToken();
    return res.status(200).json({ token });
});

module.exports = router;