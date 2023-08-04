const validateRateByQuery = (req, res, next) => {
    const rate = Number(req.query.rate);
    
    if (rate === undefined) {
        return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
    if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
        return res.status(400).json({ 
            message: 'O campo "rate" deve ser um número inteiro entre 1 e 5', 
        });
    }
    return next();
};

module.exports = validateRateByQuery;