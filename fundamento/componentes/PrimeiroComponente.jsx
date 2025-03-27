import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>PrimeiroComponente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
    backgroundColor: 'red',
    padding: 20,
    borderWidth: 10
},
texto: {
    fontSize: 20,
    fontWeight: 600
}
}) 