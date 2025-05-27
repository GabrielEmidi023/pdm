import React from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';

const categorias = [
  { nome: 'Tecnologia', imagem: 'https://cdn-icons-png.flaticon.com/512/2721/2721294.png' },
  { nome: 'Livros', imagem: 'https://cdn-icons-png.flaticon.com/512/29/29302.png' },
  { nome: 'Moda', imagem: 'https://cdn-icons-png.flaticon.com/512/892/892458.png' },
];

export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <List.Item
          title={item.nome}
          left={() => <List.Icon icon={{ uri: item.imagem }} />}
          onPress={() => navigation.navigate('ListaProdutos', { categoria: item.nome })}
        />
      )}
    />
  );
}
