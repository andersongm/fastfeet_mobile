import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

import { Container, DescProblem, DateProblem } from './styles';

export default function ProblemCard({ data }) {
  const dateFormatted = format(parseISO(data.createdAt), 'dd/MM/yyyy');

  return (
    <Container>
      <DescProblem>{data.description}</DescProblem>
      <DateProblem>{dateFormatted}</DateProblem>
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.object,
};
