import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text } from './styles';

export default function Empty() {
  return (
    <Container>
      <Text>Sem Itens para Exibir</Text>
      <Icon name="sentiment-dissatisfied" size={60} color="#bbb" />
    </Container>
  );
}
