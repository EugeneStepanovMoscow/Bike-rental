import {React, useState, useEffect} from 'react'
import './App.css';
import CreatePDF from '../PDFCreate/PDFCreate';
import Form from '../Form/Form';
import Popup from '../Popup/Popup';

import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [data2PDF, setData2PDF] = useState({data:'', signature:''})
  const [isDataOk, setIsDataOk] = useState(false)
  // const data2PDF = {data:'', signature:''}

  function popupClose(status){
    setIsPopupOpen(status)
  }

  function onSubmit(data) {
    console.log('app')
    console.log(data)
    setIsPopupOpen(true)
    data2PDF.data = data
  }

  function handleSigning(data) {
    console.log('после подписания')
    data2PDF.signature = data
    console.log(data2PDF)
    // setData2PDF({...data2PDF, signature: data})
    // console.log(data2PDF)
    if (data2PDF.data && data2PDF.signature) {
      setIsDataOk(true)
    }
  }

  return (
    <div className="App">
      <Form
        onSubmit={onSubmit}
      />
      {isDataOk &&
        <PDFDownloadLink
          document={
            <CreatePDF
              data2PDF={data2PDF}
            />
          }
          fileName={`Contract ${data2PDF.data.name}`}>
          <button className='download__button'>Скачать</button>
          </PDFDownloadLink>
      }
      <Popup
        isOpen={isPopupOpen}
        handleClose={popupClose}
        handleSigning={handleSigning}
      />
      {/* <img
        src = {window.localStorage.getItem('signature')}
      /> */}
    </div>
  );
}

export default App;
