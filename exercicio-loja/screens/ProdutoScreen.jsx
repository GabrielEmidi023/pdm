import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function ProdutoScreen({ route }) {
  const { produto } = route.params;

  return (
    <ScrollView style={{ margin: 10 }}>
      <Card>
        <Card.Cover source={{ uri: produto.imagem }} />
        <Card.Content>
          <Title>{produto.nome}</Title>
          <Paragraph>{produto.descricao}</Paragraph>
          <Paragraph style={{ fontWeight: 'bold' }}>Preço: R$ {produto.preco}</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
