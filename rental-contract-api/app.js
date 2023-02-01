const express = require('express')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const cors = require('cors')

const pdfPattern = require('./documents/pdfPattern')
const mailer = require('./utils/mailer')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/send-email', (req, res) => {
  const { name, email } = req.body.data
  pdf.create(pdfPattern(req.body), {}).toFile(`agreements/${name}.pdf`, (err) => {
    if (err) {
      res.send(Promise.reject())
    }
    Promise.resolve()
    const message = {
      from: `${name} <st_eugene@mail.ru>`,
      to: `${email}`,
      subject: 'Rental-contract',
      text: `${name}`,
      attachments: [
        {
          path: `agreements/${name}.pdf`
        }
      ]
    }
    mailer(message)
      .then((info) => {
        res.status(201).send({'message': 'отправлено'});
        return
      })
      .catch(() => {
        console.log('catch')
      });
  })
})

app.listen(3001, () => {
  console.log('Сервер запущен')
})
