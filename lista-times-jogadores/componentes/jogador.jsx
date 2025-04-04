import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const Jogador = ({ nome, numero, imagem }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <Image source={{ uri: imagem }} style={styles.imagem} />
        <View style={styles.textos}>
          <Text style={styles.nome}>{nome}</Text>
          <Text>Número: {numero}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  textos: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Jogador;