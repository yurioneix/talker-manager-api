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

const getAllTalkers = async () => {
    const allTalkers = await readTalkerFile();
    return allTalkers; 
};

const getTalkerByID = async (id) => {
    const talkers = await readTalkerFile();

    const findTalkerByID = talkers.find((talker) => talker.id === Number(id));
    return findTalkerByID;
}; 

const newTalker = async (talker) => {
    // const talkers = await readTalkerFile();
    // console.log('palestrantes', talkers);
    // console.log('palestrante do parametro', talker);

    // // const newTalker = { id: talkers[talkers.length -1].id + 1, ...talker};
    // console.log('novo palestrante', newTalker);
    
    // // talkers.push(newTalker);
    // console.log('palestrantes atualizados', talkers);


    return await fs.writeFile(TALKER_PATH_WRITE, JSON.stringify(talker));
}

module.exports = { readTalkerFile, getAllTalkers, getTalkerByID, generateToken, newTalker };