// screens/ContatosScreen.js
import React from 'react';
import { View, FlatList } from 'react-native';
import { List, FAB } from 'react-native-paper';

const contatosMock = [
  { id: '1', nome: 'João Silva', telefone: '99999-9999' },
  { id: '2', nome: 'Maria Souza', telefone: '98888-8888' },
];

export default function ContatosScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={contatosMock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.nome}
            description={item.telefone}
            left={(props) => <List.Icon {...props} icon="account" />}
            onPress={() => navigation.navigate('Formulario', { contatoId: item.id })}
          />
        )}
      />
      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16,
        }}
        onPress={() => navigation.navigate('Formulario')}
      />
    </View>
  );
}
