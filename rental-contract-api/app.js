const express = require('express')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const cors = require('cors')

const pdfPatter = require('./documents/pdfPattern')

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
  console.log('отправка почты')
})

app.listen(3000, () => {
  console.log('Сервер запущен')
})
