const express = require('express')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const cors = require('cors')

const pdfPatter = require('./documents/pdfPattern')
const mail = require('./utils/mailer')
const mailer = require('./utils/mailer')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/create-pdf', (req, res) => {
  pdf.create(pdfPatter(req.body), {}).toFile(`agreements/${req.body.name}.pdf`, (err) => {
    if (err) {
      res.send(Promise.reject())
    }
    res.send(Promise.resolve())
  })
})

app.post('/send-email', (req, res) => {
  const message = {
    from: `${req.body.name} <st_eugene@mail.ru>`,
    to: 'st_eugene@mail.ru',
    subject: 'Send message from project',
    text: `${req.body.name}`,
  }
  mailer(message)
    .then(() => {
      console.log('then')
      res.status(201).send({'message': 'отправлено'});
      return
    })
    .catch(() => {
      console.log('catch')
    });
})

app.listen(3000, () => {
  console.log('Сервер запущен')
})
