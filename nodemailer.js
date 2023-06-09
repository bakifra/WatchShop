const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.inbox.ru',
  port: 993, // порт почты inbox.ru
  secure: true,
  auth: {
    user: '2814598@inbox.ru',
    pass: '281459828145982814598z', // реальный пароль
  },
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(message.err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;
