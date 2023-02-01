import {React, useState, useEffect} from 'react'
import './App.css';
import Form from '../Form/Form';
import Popup from '../Popup/Popup';

import * as API from '../utils/API';


function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [data2PDF, setData2PDF] = useState({data:'', signature:''})
  const [isDataReady, setIsDataReady] = useState(false)
  // const data2PDF = {data:'', signature:''}

  function popupClose(status){
    setIsPopupOpen(status)
  }

  function onSubmit(data) {
    setIsPopupOpen(true)
    setData2PDF({...data2PDF, 'data': data})
  }

  function handleSigning(data) {
    setData2PDF({...data2PDF, 'signature': data})
  }

  useEffect(() => {
    if (data2PDF.data && data2PDF.signature) {
      setIsDataReady(true)
    }
    // API.pdfCreate(data2PDF)
    // setData2PDF({data:'', signature:''})
  },[data2PDF])

  useEffect(() => {
    if (isDataReady) {
    API.pdfCreate(data2PDF)
    setData2PDF({data:'', signature:''})
    setIsDataReady(false)
    }
  },[isDataReady])



  return (
    <div className="App">
      <Form
        onSubmit={onSubmit}
      />
      <Popup
        isOpen={isPopupOpen}
        handleClose={popupClose}
        handleSigning={handleSigning}
      />

{/* <>
          <div class='contact-container'>
            <div class='contact-column'>
              <p class='contact-text contact-text-left'>Instana Hypso</p>
              <p class='contact-text contact-text-left'>Jalan Pantal Balangan</p>
              <p class='contact-text contact-text-left'>Cengiling</p>
              <p class='contact-text contact-text-left'>80361 Jimbarn</p>
            </div>
            <div class='contact-column contact-column-right'>
              <p class='contact-text contact-text-right'></p>
              <p class='contact-text contact-text-right'>Tel: +62 812 3610 0520</p>
              <p class='contact-text contact-text-right'>E-mail: istanahypso@gmail.com</p>
              <p class='contact-text contact-text-right'>Web: istanahypso.com</p>
            </div>
          </div>
    </> */}

    </div>
  );
}

export default App;


