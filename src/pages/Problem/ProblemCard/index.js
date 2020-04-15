import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

import { Container, DescProblem, DateProblem } from './styles';

export default function ProblemCard({ dataProblem }) {
  const dateFormatted = dataProblem
    ? format(parseISO(dataProblem?.createdAt), 'dd/MM/yyyy')
    : '--/--/--';

  return (
    <Container>
      <DescProblem>{dataProblem?.description}</DescProblem>
      <DateProblem>{dateFormatted}</DateProblem>
    </Container>
  );
}

ProblemCard.propTypes = {
  dataProblem: PropTypes.object,
};
