import React from 'react';
import { StatusBar, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  SubmitButton,
  Avatar,
  DeliverymanInfo,
  Label,
  Info,
} from './styles';

export default function Profile({ navigation }) {
  const deliveryMan = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(signOut());
  }

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
          <Info>{deliveryMan.profile.name}</Info>
          <Label>Email</Label>
          <Info>{deliveryMan.profile.email}</Info>
          <Label>Data de Cadastro</Label>
          <Info>10/01/2020</Info>
        </DeliverymanInfo>

        <SubmitButton onPress={handleLogout}>Logout</SubmitButton>
      </Container>
    </>
  );
}
