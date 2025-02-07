const validator = require('validator');

module.exports = {
    isEmail: (email) => validator.isEmail(email),
    isStrongPassword: (password) => validator.isStrongPassword(password, { minLength: 8, minNumbers: 1, minUppercase: 1 })
};
