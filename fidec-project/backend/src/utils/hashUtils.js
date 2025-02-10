const bcrypt = require('bcrypt');
const { saltRounds } = require('../config/securityConfig');

module.exports = {
    hashPassword: async (password) => await bcrypt.hash(password, saltRounds),
    comparePassword: async (password, hash) => await bcrypt.compare(password, hash)
};
