const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

const TALKER_PATH = '../talker.json';

const generateToken = () => {
    return crypto.randomBytes(8).toString('hex');
  };
  

const readTalkerFile = async () => {
    try {
        const talkerFile = await fs.readFile(path.resolve(__dirname, TALKER_PATH));
        return JSON.parse(talkerFile);
    } catch (error) {
        return null;
    }
};

const getAllTalkers = async () => {
    const allTalkers = await readTalkerFile();
    return allTalkers; 
};

const getTalkerByID = async (id) => {
    const talkers = await readTalkerFile();

    const findTalkerByID = talkers.find((talker) => talker.id === Number(id));
    return findTalkerByID;
}; 

module.exports = { readTalkerFile, getAllTalkers, getTalkerByID, generateToken };