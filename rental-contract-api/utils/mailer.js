const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'st_eugene@mail.ru',
      pass: 'PJy0daTam8iRAczg5hib'
    },
  },
  // {
  //   from: 'test <st_eugene@mail.ru>',
  // }
);

async function mailer (message) {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err)
    return info
    // console.log('Письмо отправлено:', info )
  })
}

module.exports = mailer

// const mailOptions = {
//   from: 'The Idea project',
//   to: 'st_eugene@mail.ru',
//   subject: 'Send message from project',
//   text: 'Hello',
// };
