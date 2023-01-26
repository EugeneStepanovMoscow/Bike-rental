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
  transporter.sendMail(message, (error, info) => {
    if (error) return error
    console.log(`Почта отправлена на адрес: ${info.accepted}`)

  })
}

module.exports = mailer


