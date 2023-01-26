const nodemailer = require('nodemailer')

const testAccount = nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: `st_eugene@mail.ru`,
        pass: `FKLNPZfklnpz22`,
    },
});

const mailOptions = {
  from: 'The Idea project',
  to: 'st_eugene@mail.ru',
  subject: 'Send message from project',
  text: 'Hello',
};
