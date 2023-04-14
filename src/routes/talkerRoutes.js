const express = require('express');
const { getAllTalkers, getTalkerByID } = require('../utils/talkerFunctions');

const router = express.Router();

router.get('/', async (_req, res) => {
    const talkers = await getAllTalkers();
    console.log(talkers);
    if (!talkers) return res.status(200).json([]);
    return res.status(200).json(talkers);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const findTalkerByID = await getTalkerByID(id);

    if (!findTalkerByID) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(findTalkerByID);
});

module.exports = router;