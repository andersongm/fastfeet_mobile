import React from 'react';
import { View, Text } from 'react-native';

import { Container, Point, Line, Labels, Label, Points } from './styles';

export default function Timeline({ status }) {
  return (
    <Container>
      <Points>
        <Point
          active={
            status === 'PENDENTE' ||
            status === 'RETIRADA' ||
            status === 'ENTREGUE'
          }
        />
        <Line />
        <Point active={status === 'ENTREGUE' || status === 'RETIRADA'} />
        <Line />
        <Point active={status === 'ENTREGUE'} />
      </Points>
      <Labels>
        <Label>Aguardando Retirada</Label>
        <Label>Retirada</Label>
        <Label>Entregue</Label>
      </Labels>
    </Container>
  );
}
