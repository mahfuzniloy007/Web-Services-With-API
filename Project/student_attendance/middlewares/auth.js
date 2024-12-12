const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    const token = req.cookie.jwt;
    const secret_key = 'secret_key';

    if (token) {
        jwt.verify(token, secret_key, (err, decoded) => {
            if(err) {
                return res.status(401).send('Invalid or expired token.');
            }
            req.userId = decoded.id;
            next();
        });
    } else {
        return res.status(401).send('You are unauthorized to access this page');
    }
};