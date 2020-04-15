import React, { useState } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../../services/api';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Text,
  ButtonContainer,
} from './styles';

export default function NewProblem({ navigation, route }) {
  const { id } = route.params;
  const [problem, setProblem] = useState('');

  async function handleSubmit() {
    try {
      const response = api.post(`/delivery/${id}/problems`, {
        description: problem,
      });

      if (!response) {
        Alert.alert('Falha ao registrar problema para essa encomenda!!!');
        return;
      }

      Alert.alert(
        'FastFeet',
        'Problema Registrado com Sucesso!!!',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      Alert.alert('Falha Geral ao registrar problema para essa encomenda!!!');
    }
  }

  return (
    <Container>
      <Form>
        <FormInput
          name="problem"
          multiline={true}
          keyboarType="default"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Inclua aqui o problema que ocorreu na entrega "
          returnKeyType="next"
          onChangeText={(text) => setProblem(text)}
        />
        <ButtonContainer>
          <SubmitButton active={!problem} onPress={problem && handleSubmit}>
            <Text>Enviar</Text>
          </SubmitButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
}

ConfirmDelivery.propTypes = {
  navigation: PropTypes.func,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
