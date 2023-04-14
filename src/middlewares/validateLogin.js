const validateLogin = (req, res, next) => {
    const { email, password } = req.body; 
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    const emailTest = emailRegex.test(email);

    if (email === undefined) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!emailTest) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    if (password === undefined) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    return next();
};

module.exports = validateLogin;
