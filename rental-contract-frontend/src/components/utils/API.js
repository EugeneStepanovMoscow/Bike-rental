function responseCheck(res) {
  if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res);
    }
}

export function pdfCreate(data2PDF) {
  console.log(data2PDF)
  return fetch('//localhost:3001/send-email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data2PDF)
  })
  .then(res => responseCheck(res))
}
