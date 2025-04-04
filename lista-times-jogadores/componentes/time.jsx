import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { Text, Card } from 'react-native-paper';
import Jogador from './jogador';

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.cabecalho}>
        <Image source={{ uri: imagem }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{nome}</Text>
          <Text>Ano de Fundação: {anoFundacao}</Text>
          <Text>Mascote: {mascote}</Text>
        </View>
      </View>

      <Text style={styles.tituloJogadores}>Jogadores:</Text>
      <FlatList
        data={jogadores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Jogador {...item} />}
        scrollEnabled={false}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
  },
  cabecalho: {
    flexDirection: 'row',
    padding: 10,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tituloJogadores: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
});

export default Time;