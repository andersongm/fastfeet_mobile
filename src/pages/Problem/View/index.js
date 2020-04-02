import React from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OperationButton from '../../../components/OperationButton';
import prob from './problems.json';
import ProblemCard from '../ProblemCard';

import {
  Container,
  Problem,
  TitleDelivery,
  DescProblem,
  DateProblem,
  ProblemList,
} from './styles';

export default function ViewProblem({ navigation }) {
  const problems = prob;

  function handleCancel() {}

  return (
    <Container>
      <TitleDelivery>Encomenda 01</TitleDelivery>
      <Problem>
        <ProblemList
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ProblemCard
              onCancel={() => handleCancel}
              data={item}
              navigation={navigation}
            />
          )}
        />
      </Problem>

      {/* <Problem>
        <DescProblem>Destinatário Ausente</DescProblem>
        <DateProblem>14/01/2020</DateProblem>
      </Problem>
      <Problem>
        <DescProblem>Destinatário Ausente</DescProblem>
        <DateProblem>14/01/2020</DateProblem>
      </Problem>
      <Problem>
        <DescProblem>Destinatário Ausente</DescProblem>
        <DateProblem>14/01/2020</DateProblem>
      </Problem> */}
    </Container>
  );
}
