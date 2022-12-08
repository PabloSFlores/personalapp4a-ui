const mailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')
require('dotenv').config();

const transporter = mailer.createTransport(
    smtpTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.USER_EMAIL, // generated ethereal user
            pass: process.env.USER_PASSWORD, // generated ethereal password
        },
    })
);

module.exports = transporter