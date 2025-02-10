const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/securityConfig');

module.exports = {
    generateToken: (payload, expiresIn = '1h') => jwt.sign(payload, jwtSecret, { expiresIn }),
    verifyToken: (token) => jwt.verify(token, jwtSecret)
};
