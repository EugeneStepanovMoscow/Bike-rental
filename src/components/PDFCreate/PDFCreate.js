import {React, useEffect, useState} from "react";
import {Page, Text, Image, Document, StyleSheet, View} from "@react-pdf/renderer"

import Title from "./elements/Title";
// import Logo from "./elements/Logo"


const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  sections: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  section: {
    width: '50%',
  },
  section__text: {
    fontSize: 10,
    marginTop: 10,
    paddingBottom: 3,
    borderBottom: 1
  },
  signatures: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  signature: {
    width: 200,
    height: 100,
    borderBottom: 2
  },
  renter: {
    width: 100,
    height: 100
  }
})

function CreatePDF({
  data2PDF
})
{

  return (
    <Document>
      <Page style={styles.page}>
      {/* <Logo></Logo> */}
      <Title>rental bike contract</Title>
        <View style={styles.sections}>
          <View style={styles.section}>
            <Text style={styles.section__text}>{`Name                     : ${data2PDF.data.name}`}</Text>
            <Text style={styles.section__text}>{`Passport Number  : ${data2PDF.data.passNumb}`}</Text>
            <Text style={styles.section__text}>{`License Number    : ${data2PDF.data.liceNumb}`}</Text>
            <Text style={styles.section__text}>{`Nationaly           : ${data2PDF.data.nationaly}`}</Text>
            <Text style={styles.section__text}>{`Permanent Address: ${data2PDF.data.perAdd}`}</Text>
            <Text style={styles.section__text}>{`Support for Phone: ${data2PDF.data.phone}`}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.section__text}>{`Rental Date: ${data2PDF.data.date}`}</Text>
            <Text style={styles.section__text}>{`Price      : ${data2PDF.data.price}`}</Text>
            <Text style={styles.section__text}>{`Insurance  : ${data2PDF.data.ins}`}</Text>
            <Text style={styles.section__text}>{`No. Scooter: ${data2PDF.data.scooterNumb}`}</Text>
            <Text style={styles.section__text}>{`Total Price: ${data2PDF.data.totalPrice}`}</Text>
            <Text style={styles.section__text}>{`Helmet     : ${data2PDF.data.helmet}`}</Text>
          </View>
        </View>
        <View style={styles.signatures}>
          <View style={styles.signature}>
            <Text>The Owner</Text>
          </View>
          <View style={styles.signature}>
            <Text>The Renter</Text>
            <Image
              style={styles.renter}
              source = {data2PDF.signature}
            />
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default CreatePDF
