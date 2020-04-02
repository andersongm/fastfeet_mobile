import React, { useState, useRef } from 'react';
import { Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../../components/Background';
import Input from '../../components/Input';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '../../assets/fastfeet-logo.png';

import {
  Container,
  SubmitButton,
  Form,
  FormInput,
  IdDeliveryMan,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const loading = false;
  const [id, setId] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(id));
    // navigation.navigate('Dashboard');
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
          {/* <FormInput
            // icon="mail-outline"
            name="id"
            // keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
          /> */}
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
