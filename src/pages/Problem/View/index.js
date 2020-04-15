import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../../services/api';
import ProblemCard from '../ProblemCard';
import Empty from '../../../components/Empty';

import { Container, Problem, TitleDelivery, ProblemList } from './styles';

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
            <ProblemCard dataProblem={item} navigation={navigation} />
          )}
          ListEmptyComponent={<Empty />}
        />
      </Problem>
    </Container>
  );
}

ViewProblem.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
      product: PropTypes.string,
    }),
  }).isRequired,
};
