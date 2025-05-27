import React from 'react';
import { FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const produtosMock = {
  'Tecnologia': [
    {
      id: 1,
      nome: 'Smartphone XZ Pro',
      preco: 2999,
      imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
      descricao: 'Um smartphone moderno com câmera de 108MP.'
    },
    {
      id: 2,
      nome: 'Notebook Ultra 14',
      preco: 4899,
      imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      descricao: 'Leve, rápido e com bateria de longa duração.'
    }
  ],
  'Livros': [
    {
      id: 3,
      nome: 'Dom Quixote',
      preco: 39,
      imagem: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
      descricao: 'Clássico da literatura mundial por Cervantes.'
    },
    {
      id: 4,
      nome: 'O Hobbit',
      preco: 59,
      imagem: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
      descricao: 'A jornada épica de Bilbo Bolseiro.'
    }
  ],
  'Moda': [
    {
      id: 5,
      nome: 'Jaqueta Jeans Slim',
      preco: 129,
      imagem: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
      descricao: 'Estilo e conforto em uma peça única.'
    },
    {
      id: 6,
      nome: 'Tênis Esportivo Runner',
      preco: 199,
      imagem: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f',
      descricao: 'Ideal para corrida e academia.'
    }
  ]
};

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const produtos = produtosMock[categoria] || [];

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }} onPress={() => navigation.navigate('Produto', { produto: item })}>
          <Card.Cover source={{ uri: item.imagem }} />
          <Card.Content>
            <Title>{item.nome}</Title>
            <Paragraph>R$ {item.preco}</Paragraph>
          </Card.Content>
        </Card>
      )}
    />
  );
}
