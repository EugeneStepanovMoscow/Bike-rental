import {React, useRef, useState, useEffect} from "react";
import './SignatureCreate.css'
// import CanvasDraw from "react-canvas-draw";
// import canvasToImage from "canvas-to-image";

function SignatureCreate ({
  isOpen,
  handleSigning
})
{
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const [isDrawing, setIsDrawing] = useState(false)
  const [isSigning, setIsSigning] = useState(false)

  let signature = ''

  function drawing({nativeEvent}) {
    if (!isDrawing) {
      return
    }
    const {offsetX, offsetY} = nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
    nativeEvent.preventDefault()
    setIsSigning(true)
  }

  function startDrawing({nativeEvent}) {
    const {offsetX, offsetY} = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
    setIsDrawing(true)
    nativeEvent.preventDefault()
  }
  function stopDrawing() {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  function signing() {
    handleSigning(canvasRef.current.toDataURL())
    // signature = canvasRef.current.toDataURL()
    // window.localStorage.setItem('signature', signature)
    // console.log(window.localStorage.getItem('signature'))
    setIsSigning(false)
    clear()
  }

  function clear(){
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    setIsSigning(false)
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 200;
    canvas.height = 200;

    const context = canvas.getContext("2d")
    context.lineCap = 'round'
    context.strokeStyle = 'black'
    context.lineWidth = 1
    contextRef.current = context

  }, [])

  return (
    <div className={`signatureCreate ${isOpen ? '' : 'signatureCreate__close'}`}>
      <canvas
        className="signatureCreate__canvas"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={drawing}
        onMouseUp={stopDrawing}
      />
      <div className="signatureCreate__buttons">
        <button
          className={`signatureCreate__button ${!isSigning ? 'signatureCreate__button_disabled' : ''}`}
          disabled={!isSigning}
          onClick={signing}>
          Подписать
        </button>
        <button
          className={`signatureCreate__button ${!isSigning ? 'signatureCreate__button_disabled' : ''}`}
          disabled={!isSigning}
          onClick={clear}>
          Очистить
        </button>
      </div>
    </div>
  )
}

// {`profile__error ${isEmailValid ? 'profile__error_success' : ''}`}
// disabled={!isDataChange || !isFormValid}

export default SignatureCreate
