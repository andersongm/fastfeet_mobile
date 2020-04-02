import React from 'react';
import { View } from 'react-native';

import { Container, DescProblem, DateProblem } from './styles';

export default function ProblemCard() {
  return (
    <Container>
      <DescProblem>Destinatário Ausente</DescProblem>
      <DateProblem>14/01/2020</DateProblem>
    </Container>
  );
}
