const nodeMailer = require('nodemailer');

const transPorter = nodeMailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PWD
    }
});

const sendEmail = async (to, text, subject) => {
    const mailOptions = {
        from: 'nodejsbooks@gmail.com',
        to,
        subject,
        text
    }
    await transPorter.sendMail(mailOptions);
};

module.exports = sendEmail;