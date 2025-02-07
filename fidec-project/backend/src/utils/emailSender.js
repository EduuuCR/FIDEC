const nodemailer = require('nodemailer');
const mailConfig = require('../config/mailConfig');

const transporter = nodemailer.createTransport({
    service: mailConfig.service,
    auth: mailConfig.auth
});
