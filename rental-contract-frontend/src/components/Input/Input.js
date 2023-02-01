import React from "react"
import './input.css'

function Input({
  name,
  type,
  handleChange
})

{
  return (
    <>
      <div className="input__container">
        <p className="input__label">{name}</p>
        <p className="input__colon">:</p>
        <input
          className="input"
          type={type}
          name={name}
          onChange={handleChange}
          required
        />
      </div>
    </>
  )
}

export default Input
