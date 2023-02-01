import {React, useState} from "react";
import Input from "../Input/Input";
import './form.css'

function Form({
  onSubmit
})
{
  const [nameValue, setNameValue] = useState('')
  const [dataValue, setDataValue] = useState('')
  const [passNumbValue, setPasNumbValue] = useState('')
  const [liceNumbValue, setLiceNumbValue] = useState('')
  const [nationalyValue, setNationalyValue] = useState('')
  const [perAddValue, setPerAddValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')

  const [priceValue, setPriceValue] = useState('')
  const [insValue, setInsValue] = useState('')
  const [scooterNumbValue, setScooterNumbValue] = useState('')
  const [totalPriceValue, setTotalPriceValue] = useState('')
  const [helmetValue, setHelmetValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  const inputsData = [
    {
      id: 1,
      name: 'Name',
      type: 'text'
    },
    {
      id: 2,
      name: 'Rental Date',
      type: 'date'
    },
    {
      id: 3,
      name: 'Passport Number',
      type: 'number'
    },
    {
      id: 4,
      name: 'Price',
      type: 'text'
    },
    {
      id: 5,
      name: 'License Number',
      type: 'number'
    },
    {
      id: 6,
      name: 'Insurance',
      type: 'text'
    },
    {
      id: 7,
      name: 'Nationaly',
      type: 'text'
    },
    {
      id: 8,
      name: 'No. Scooter',
      type: 'text'
    },
    {
      id: 9,
      name: 'Permanent Address',
      type: 'text'
    },
    {
      id: 10,
      name: 'Total Price',
      type: 'text'
    },
    {
      id: 11,
      name: 'Support for Phone',
      type: 'tel:'
    },
    {
      id: 12,
      name: 'Helmet',
      type: 'number'
    },
    {
      id: 13,
      name: 'e-mail',
      type: 'email'
    },
  ]

  function handleSubmit(evt) {
    evt.preventDefault()
    onSubmit({
      name: nameValue,
      passNumb: passNumbValue,
      liceNumb: liceNumbValue,
      nationaly: nationalyValue,
      perAdd: perAddValue,
      phone: phoneValue,
      date: dataValue,
      price: priceValue,
      ins: insValue,
      scooterNumb: scooterNumbValue,
      totalPrice: totalPriceValue,
      helmet: helmetValue,
      email: emailValue,
    })
  }

  function handleChange(evt) {
    if (evt.target.name === 'Name') {
      setNameValue(evt.target.value)
    }
    if (evt.target.name === 'Passport Number') {
      setPasNumbValue(evt.target.value)
    }
    if (evt.target.name === 'License Number') {
      setLiceNumbValue(evt.target.value)
    }
    if (evt.target.name === 'Nationaly') {
      setNationalyValue(evt.target.value)
    }
    if (evt.target.name === 'Permanent Address') {
      setPerAddValue(evt.target.value)
    }
    if (evt.target.name === 'Support for Phone') {
      setPhoneValue(evt.target.value)
    }
    if (evt.target.name === 'Rental Date') {
      setDataValue(evt.target.value)
    }
    if (evt.target.name === 'Price') {
      setPriceValue(evt.target.value)
    }
    if (evt.target.name === 'Insurance') {
      setInsValue(evt.target.value)
    }
    if (evt.target.name === 'No. Scooter') {
      setScooterNumbValue(evt.target.value)
    }
    if (evt.target.name === 'Total Price') {
      setTotalPriceValue(evt.target.value)
    }
    if (evt.target.name === 'Helmet') {
      setHelmetValue(evt.target.value)
    }
    if (evt.target.name === 'e-mail') {
      setEmailValue(evt.target.value)
    }
}

  return (
    <div className="form__container">
      <h2 className="form__title">
        RENTAL BIKE CONTRACT
      </h2>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <fieldset className="form__fieldset">
          <div className="form__inputs-container">
            {inputsData.map(data =>
              <Input
                key={data.id}
                name={data.name}
                type={data.type}
                handleChange={handleChange}
              />
            )}
          </div>
          <button
            type='submit'
            className="form__button">
            Подписать
          </button>
        </fieldset>
      </form>

    </div>
  )
}

export default Form
