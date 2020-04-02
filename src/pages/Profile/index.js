import React from 'react';
import { StatusBar, Alert } from 'react-native';

import {
  Container,
  SubmitButton,
  Avatar,
  DeliverymanInfo,
  Label,
  Info,
  Text,
} from './styles';

export default function Profile({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
          }}
        />
        <DeliverymanInfo>
          <Label>Nome Completo</Label>
          <Info>Gaspar Antunes</Info>
          <Label>Email</Label>
          <Info>email@gmail.com</Info>
          <Label>Data de Cadastro</Label>
          <Info>10/01/2020</Info>
        </DeliverymanInfo>

        <SubmitButton onPress={() => navigation.goBack()}>Logout</SubmitButton>
      </Container>
    </>
  );
}
