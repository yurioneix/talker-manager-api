const express = require('express');
const { generateToken } = require('../utils/talkerFunctions');
const validateLogin = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', validateLogin, async (req, res) => {
    const token = generateToken();
    return res.status(200).json({ token });
});

module.exports = router;