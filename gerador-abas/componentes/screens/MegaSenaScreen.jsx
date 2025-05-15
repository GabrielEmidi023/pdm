import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

const gerarJogo = () => {
  const numeros = [];
  while (numeros.length < 6) {
    const numero = Math.floor(Math.random() * 60) + 1;
    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }
  return numeros.sort((a, b) => a - b);
};

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerar = () => {
    const novoJogo = gerarJogo();
    setJogoGerado(novoJogo);
    setJogosMegaSena([novoJogo, ...jogosMegaSena]);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button mode="contained" onPress={gerar}>
        Gerar Jogo
      </Button>

      {jogoGerado.length > 0 && (
        <Card style={{ marginTop: 16, padding: 16 }}>
          <Text>Jogo Atual: {jogoGerado.join(' - ')}</Text>
        </Card>
      )}

      <FlatList
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginTop: 8, padding: 12 }}>
            <Text>Jogo: {item.join(' - ')}</Text>
          </Card>
        )}
      />
    </View>
  );
}
