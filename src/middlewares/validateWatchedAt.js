const validateWatchedAt = (req, res, next) => {
    const { talk } = req.body;
    const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

    if(talk.watchedAt === undefined) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
    if(!dateRegex.test(talk.watchedAt)) {
        return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"'});
    }
    return next();
};

module.exports = validateWatchedAt;