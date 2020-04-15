import React from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  SubmitButton,
  Avatar,
  DeliverymanInfo,
  Label,
  Info,
  Text,
} from './styles';

export default function Profile() {
  const deliveryMan = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let dateFormatted = '';
  function handleLogout() {
    dispatch(signOut());
  }
  if (deliveryMan.profile) {
    dateFormatted =
      format(parseISO(deliveryMan.profile?.createdAt), 'dd/MM/yyyy') || '';
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Avatar
          source={{
            uri:
              deliveryMan.profile?.url ||
              'https://api.adorable.io/avatars/285/abott@adorable.png',
          }}
        />
        <DeliverymanInfo>
          <Label>Nome Completo</Label>
          <Info>{deliveryMan.profile?.name}</Info>
          <Label>Email</Label>
          <Info>{deliveryMan.profile?.email}</Info>
          <Label>Data de Cadastro</Label>
          <Info>{dateFormatted}</Info>
        </DeliverymanInfo>

        <SubmitButton onPress={handleLogout}>
          <Text>Logout</Text>
        </SubmitButton>
      </Container>
    </>
  );
}
