const express = require('express');
const { 
    getAllTalkers, 
    getTalkerByID, 
    writeTalker, 
    readTalkerFile, 
} = require('../utils/talkerFunctions');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');

const router = express.Router();

router.get('/', async (_req, res) => {
    const talkers = await getAllTalkers();

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

router.post(
    '/', 
    validateToken, 
    validateName, 
    validateAge, 
    validateTalk, 
    validateWatchedAt, 
    validateRate,  
    async (req, res) => {
    const talker = req.body;
    const talkers = await readTalkerFile();

    const updatedTalkers = { id: talkers[talkers.length - 1].id + 1, ...talker };
    talkers.push(updatedTalkers);

    await writeTalker(talkers);

    return res.status(201).json(updatedTalkers);
},
);

router.put('/:id', 
    validateToken, 
    validateName, 
    validateAge, 
    validateTalk, 
    validateWatchedAt, 
    validateRate, 
    async (req, res) => {
    const id = Number(req.params.id);
    const allTalkers = await getAllTalkers();
    const talkerToUpdate = await getTalkerByID(id);

    if (!talkerToUpdate) {
        return res.status(404).json({
            message: 'Pessoa palestrante não encontrada',
          });
    }

    const indexOfTalkerToUpdate = allTalkers.indexOf(talkerToUpdate);
    const updatedTalker = { id, ...req.body };

    allTalkers.splice(indexOfTalkerToUpdate, 1, updatedTalker);
    await writeTalker(allTalkers);

    return res.status(200).json(updatedTalker);
});

module.exports = router;