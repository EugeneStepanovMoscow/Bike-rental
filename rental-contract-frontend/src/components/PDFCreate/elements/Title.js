import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
    fontStyle: 'bolt',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

function Title ({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}
export default Title;
