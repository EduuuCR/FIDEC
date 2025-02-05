const cors = require('cors');
module.exports = cors({
    origin: '*', // Pode ser ajustado conforme necessário
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
});
