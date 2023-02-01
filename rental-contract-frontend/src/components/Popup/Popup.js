import React from "react";
import './Popup.css'

import SignatureCreate from "../SignatureCreate/SignatureCreate";

function Popup({
  isOpen,
  handleClose,
  handleSigning
})
{
  function close() {
    handleClose(false)
  }
  function signing(data) {
    handleSigning(data)
    close()
  }

  return (
    <div className={`popup ${isOpen ? 'popup__open' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">Подпись</h2>
        <SignatureCreate
          isOpen
          handleSigning={signing}
        />
        <button
          className="popup__button"
          onClick={close}>
          Закрыть
        </button>
        {/* <button className="popup__btn-close" id={`popup${name}BtnClose`} type="button" onClick={onClose}></button> */}
      </div>
    </div>
  )
}

export default Popup
