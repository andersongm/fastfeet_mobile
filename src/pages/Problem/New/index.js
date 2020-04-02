import React, { useState } from 'react';
// import FormInput from '../../components/Input';
// import FormInput from '../../components/Input';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Text,
  ButtonContainer,
} from './styles';

export default function NewProblem() {
  const [problem, setProblem] = useState('');

  function handleSubmit(data) {}

  return (
    <Container>
      <Form>
        <FormInput
          multiline={true}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Inclua aqui o problema que ocorreu na entrega "
          returnKeyType="next"
          value={problem}
          onChangeText={setProblem}
        />
        <ButtonContainer>
          <SubmitButton onPress={handleSubmit}>
            <Text>Enviar</Text>
          </SubmitButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
}
