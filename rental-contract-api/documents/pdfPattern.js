function pdfPatter({name}) {
  return (`
    <html>
      <head></head>
      <body>
        <div>${name}</div>
      </body>
    </html>
  `)
}

module.exports = pdfPatter
