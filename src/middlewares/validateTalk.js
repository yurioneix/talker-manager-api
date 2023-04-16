const validateTalk = (req, res, next) => {
    const { talk } = req.body;
    const requiredProperties = ['watchedAt', 'rate'];

    if(talk === undefined) {
        return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }
    return next();
};

module.exports = validateTalk;