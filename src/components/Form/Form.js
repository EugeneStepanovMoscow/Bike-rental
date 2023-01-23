import {React, useState} from "react";
import './form.css'

function Form({
  onSubmit
})
{
  const [nameValue, setNameValue] = useState('')
  const [dataValue, setDataValue] = useState('')

  function handleSubmit(evt) {
    evt.preventDefault()
    onSubmit({
      name: nameValue,
      passNumb: dataValue,
      liceNumb: dataValue,
      nationaly: dataValue,
      perAdd: dataValue,
      phone: dataValue,
      date: dataValue,
      price: dataValue,
      ins: dataValue,
      scooterNumb: dataValue,
      totalPrice: dataValue,
      helmet: dataValue
    })
  }

  function handleChangeName(evt) {
    setNameValue(evt.target.value)
  }
  function handleChangeData(evt) {
    setDataValue(evt.target.value)
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
          <div className="form__columns">
            <div className="form__column">
              <div className="form__input-container">
                <p className="form__label">Name: </p>
                <input
                  className="form__input"
                  type='text'
                  name='name'
                  onChange={handleChangeName}
                  required
                />
              </div>
              <div className="form__input-container">
                <p className="form__label">Passport Number: </p>
                <input
                  className="form__input"
                  type='number'
                  name='passport'
                  onChange={handleChangeData}
                 />
              </div>
            </div>

            <div className="form__column">
              <div className="form__input-container">
                <p className="form__label">Rental Date: </p>
                <input
                  className="form__input"
                  type='date'
                  name='date'
                  onChange={handleChangeData}
                />
              </div>
              <div className="form__input-container">
                <p className="form__label">Price: </p>
                <input
                  className="form__input"
                  type='number'
                  name='price'
                  onChange={handleChangeData}

                />
              </div>
            </div>
          </div>
            <button
              type='submit'
              className="form__button"
            >Подписать</button>
        </fieldset>
      </form>

    </div>
  )
}

export default Form
