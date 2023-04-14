const express = require('express');
const { getAllTalkers } = require('../utils/talkerFunctions');

const router = express.Router();

router.get('/', async (_req, res) => {
    const talkers = await getAllTalkers();
    console.log(talkers);
    if (!talkers) return res.status(200).json([]);
    return res.status(200).json(talkers);
});

module.exports = router