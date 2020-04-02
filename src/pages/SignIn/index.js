import React, { useState } from 'react';
import { Image } from 'react-native';
import Background from '../../components/Background';
import FormInput from '../../components/Input';

import logo from '../../assets/fastfeet-logo.png';

import { Container, SubmitButton, Form } from './styles';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const loading = false;

  function handleSubmit() {
    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Image source={logo} style={{ tintColor: '#fff' }} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
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
