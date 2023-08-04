const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

const TALKER_PATH_READ = '../talker.json';
const TALKER_PATH_WRITE = './src/talker.json';

const generateToken = () => crypto.randomBytes(8).toString('hex');
  
const readTalkerFile = async () => {
    try {
        const talkerFile = await fs.readFile(path.resolve(__dirname, TALKER_PATH_READ));
        return JSON.parse(talkerFile);
    } catch (error) {
        return null;
    }
};

const writeTalker = async (talker) => fs.writeFile(TALKER_PATH_WRITE, JSON.stringify(talker));

const getAllTalkers = async () => {
    const allTalkers = await readTalkerFile();
    return allTalkers; 
};

const getTalkerByID = async (id) => {
    const talkers = await readTalkerFile();

    const findTalkerByID = talkers.find((talker) => talker.id === Number(id));
    return findTalkerByID;
}; 

const getTalkerByName = async (name) => {
    const talkers = await readTalkerFile();

    const filterTalkerByName = talkers.filter((talker) => talker.name.startsWith(name));

    return filterTalkerByName;
};

const getTalkerByRate = async (rate) => {
    const talkers = await readTalkerFile();

    const filterTalkerByRate = talkers.filter((talker) => talker.talk.rate === rate);

    return filterTalkerByRate;
};

module.exports = { 
    readTalkerFile, 
    getAllTalkers, 
    getTalkerByID, 
    generateToken, 
    writeTalker, 
    getTalkerByName,
    getTalkerByRate, 
};