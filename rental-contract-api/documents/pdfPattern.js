const logo = require('./logo')

function pdfPatter(data2PDF) {
  const {
    name,
    passNumb,
    liceNumb,
    nationaly,
    perAdd,
    phone,
    date,
    price,
    ins,
    scooterNumb,
    totalPrice,
    helmet
  } = data2PDF.data

  return (`
    <html>
      <head>
        <title>Rental-contract</title>
        <style>
          .container{
            width: 100%;
            font-family: Asap, Arial, sans-serif;
            font-weight: bold;
            font-size: 15px;
            line-height: 16px;
            text-align: left;
            text-decoration: none;
            color: #000;
            margin: 30px;
          }
          .logo{
            margin: 0 100px 30px 100px;
            height: 200px;
            width: 700px;
          }
          .heading {
            font-size: 30px;
            line-height: 35px;
            text-align: center;
            margin-bottom: 30px;
          }
          .infoblock-container{
            width: 100%;
          }
          .row-container {
            width: 900px;
            margin-top: 15px;
            border-bottom: 1px solid #000;
            font-size: 15px;
            line-height: 16px;
          }
          .text-container {
            margin: auto auto auto 0;
            display: inline-block;
            width: 140px;
            text-align: left;
          }
          .colonel-container {
            display: inline-block;
            width: 4px;
          }
          .info-container {
            display: inline-block;
            width: 280px;
            padding-left: 3px;
            text-align: left;
            font-weight: 300;
            font-style: italic;
            font-size: 14px;
            line-height: 15px;
          }
          .name-text {
            margin: 0;
          }
          .colonel {
            margin: 0;
          }
          .terms-container{

          }
          .terms-heading{
            font-size: 22px;
            line-height: 23px;
            text-align: left;
            text-decoration: underline;
            margin: 30 auto 10 0;
          }
          .terms-text{
            text-align: left;
            font-weight: 300;
            font-style: italic;
            font-size: 14px;
            line-height: 15px;
          }
          .signature-container{
            display: inline-block;
            width: 900px;
            margin-top: 30px;
          }
          .owner-signature{
            width: 400px;
            display: inline-block;
            border-bottom: 1px solid #000;
            margin: 30 10 auto 10;
          }
          .signature-img{
            display: inline-block;
            height: 100px;
            width: 100px;
            margin: 0 0 0 150px;
            border: 0;
          }
          .contact-container{
            height: 90px;
            width: 450px;
            border-radius: 10px;
            background-color: #000;
            margin: 30px auto 0 auto;
            padding: 10px;
          }
          .contact-column{
            display: inline-block;
            width: 220px;
            vertical-align: middle;
          }
          .contact-text{
            color: #FFF;
            font-weight: 900;
            font-style: italic;
            font-size: 10px;
            line-height: 9px;
            letter-spacing: 2px;
          }
          .contact-text-left{
            text-align: left;
          }
          .contact-text-right{
            text-align: right;
          }

        </style>
      </head>
      <body>
        <div class='container'>
          <img class='logo' src=${logo}/>
          <h1 class='heading'>RENTAL BIKE CONTRACT</h1>
          <div class='infoblock-container'>
            <div class='row-container'>
              <div class='text-container'><p class='name-text'>Name</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${name}</p></div>

              <div class='text-container'><p class='name-text'>Rental Date</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${date}</p></div>
            </div>

            <div class='row-container'>
              <div class='text-container'><p class='name-text'>Passport Number</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${passNumb}</p></div>

              <div class='text-container'><p class='name-text'>Price</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${price}</p></div>
            </div>

            <div class='row-container'>
              <div class='text-container'><p class='name-text'>License Number</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${liceNumb}</p></div>

              <div class='text-container'><p class='name-text'>Insurance</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${ins}</p></div>
            </div>

            <div class='row-container'>
              <div class='text-container'><p class='name-text'>Nationaly</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${nationaly}</p></div>

              <div class='text-container'><p class='name-text'>No. Scooter</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${scooterNumb}</p></div>
            </div>

            <div class='row-container'>
              <div class='text-container'><p class='name-text'>Permanent Address</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${perAdd}</p></div>

              <div class='text-container'><p class='name-text'>Total Price</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${totalPrice}</p></div>
            </div>

            <div class='row-container'>
              <div class='text-container'><p class='name-text'>Support for Phone</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${phone}</p></div>

              <div class='text-container'><p class='name-text'>Helmet</p></div>
              <div class='colonel-container'><p class='colonel'>:</p></div>
              <div class='info-container'><p class='name-text'>${helmet}</p></div>
            </div>
          </div>
          <div class='terms-container'>
            <h2 class='terms-heading'>CONDITIONS:</h2>
            <p class='terms-text'>1.&nbsp Condition</p>
            <p class='terms-text'>2.&nbsp Condition</p>
            <p class='terms-text'>3.&nbsp Condition</p>
            <p class='terms-text'>4.&nbsp Condition</p>
            <p class='terms-text'>5.&nbsp Condition</p>
            <p class='terms-text'>6.&nbsp Condition</p>
            <p class='terms-text'>7.&nbsp Condition</p>
            <p class='terms-text'>8.&nbsp Condition</p>
            <p class='terms-text'>9.&nbsp Condition</p>
          </div>
          <div class='signature-container'>
            <div class='owner-signature'>
              <p class='signature-text'>The Owner</p>
              <div class='signature-img'></div>
            </div>
            <div class='owner-signature'>
              <p class='signature-text'>The Renter</p>
              <img class='signature-img' src=${data2PDF.signature}/>
            </div>
          </div>

          <div class='contact-container'>
            <div class='contact-column'>
              <p class='contact-text contact-text-left'>Instana Hypso</p>
              <p class='contact-text contact-text-left'>Jalan Pantal Balangan</p>
              <p class='contact-text contact-text-left'>Cengiling</p>
              <p class='contact-text contact-text-left'>80361 Jimbarn</p>
            </div>
            <div class='contact-column'>
              <p class='contact-text contact-text-right'></p>
              <p class='contact-text contact-text-right'>Tel: +62 812 3610 0520</p>
              <p class='contact-text contact-text-right'>E-mail: istanahypso@gmail.com</p>
              <p class='contact-text contact-text-right'>Web: istanahypso.com</p>
            </div>
          </div>

        </div>
      </body>
    </html>
  `)
}

module.exports = pdfPatter
