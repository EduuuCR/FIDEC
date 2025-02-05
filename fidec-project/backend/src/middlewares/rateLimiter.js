const rateLimit = require('express-rate-limit');
module.exports = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // 100 requisições por IP
    message: { message: 'Muitas requisições, tente novamente mais tarde' }
});
