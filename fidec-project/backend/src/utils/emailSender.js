const nodemailer = require('nodemailer');
const mailConfig = require('../config/mailConfig');

const transporter = nodemailer.createTransport({
    service: mailConfig.service,
    auth: mailConfig.auth
});

module.exports = async (to, subject, text) => {
    try {
        await transporter.sendMail({ from: mailConfig.auth.user, to, subject, text });
        console.log('E-mail enviado com sucesso!');
    } catch (err) {
        console.error('Erro ao enviar e-mail:', err);
    }
};
