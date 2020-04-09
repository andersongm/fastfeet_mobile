import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OperationButton from '../../../components/OperationButton';
import api from '../../../services/api';
import ProblemCard from '../ProblemCard';

import {
  Container,
  Problem,
  TitleDelivery,
  DescProblem,
  DateProblem,
  ProblemList,
} from './styles';

export default function ViewProblem({ navigation, route }) {
  const { id, product } = route.params;
  const [problems, setProblems] = useState([]);

  async function loadProblems() {
    const response = await api.get(`/delivery/${id}/problems`);
    setProblems(response.data);
  }

  useEffect(() => {
    loadProblems();
  }, []);

  return (
    <Container>
      <TitleDelivery>{product}</TitleDelivery>
      <Problem>
        <ProblemList
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ProblemCard data={item} navigation={navigation} />
          )}
        />
      </Problem>
    </Container>
  );
}
