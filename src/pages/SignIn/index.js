import React, { useState } from 'react';
import { Image, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import Background from '../../components/Background';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '../../assets/fastfeet-logo.png';

import { Container, SubmitButton, Form, IdDeliveryMan } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = false;
  const [id, setId] = useState('');

  function handleSubmit() {
    if (!id) {
      Alert.alert(
        'FastFeet',
        'Informe seu ID de Cadastro!',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
      return;
    }

    dispatch(signInRequest(id));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} style={{ tintColor: '#fff' }} />

        <Form>
          <IdDeliveryMan
            value={id}
            onChangeText={(text) => setId(text)}
            keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
          />
          <SubmitButton
            loading={loading}
            onPress={handleSubmit}
            color="#82bf18"
          >
            Entrar no Sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
