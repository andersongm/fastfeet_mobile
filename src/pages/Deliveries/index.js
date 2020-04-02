import React, { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from './Card';
import dels from './deliveries.json';

import {
  Container,
  SubmitButton,
  HeaderPage,
  Avatar,
  DeliveryManInfo,
  Label,
  DeliveryList,
  TitleList,
  Name,
  ListStatus,
  Status,
  TextButtonStatus,
  ButtonStatus,
} from './styles';

export default function Deliveries({ navigation }) {
  const [deliveries, setDeliveries] = useState(dels);
  const deliveryMan = useSelector((state) => state.user);
  let pendings = [];
  let delivered = [];

  // Alert.alert(deliveryMan);

  function handleGetPendings() {
    setDeliveries(dels);

    pendings = deliveries.filter((delivery) => delivery.status === 'PENDENTE');
    setDeliveries(pendings);
  }

  function handleGetDelivered() {
    setDeliveries(dels);
    delivered = deliveries.filter((delivery) => delivery.status === 'ENTREGUE');
    setDeliveries(delivered);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <HeaderPage>
          <Avatar
            source={{
              uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            }}
          />
          <DeliveryManInfo>
            <Label>Bem vindo de volta,</Label>
            <Name>{deliveryMan.profile.name}</Name>
          </DeliveryManInfo>
          <TouchableOpacity>
            <Icon name="exit-to-app" size={30} color="#e95151" />
          </TouchableOpacity>
        </HeaderPage>
        <TitleList>
          <Name>Entregas</Name>
          <ListStatus>
            <ButtonStatus onPress={() => handleGetPendings()}>
              <TextButtonStatus>Pendentes</TextButtonStatus>
            </ButtonStatus>
            <ButtonStatus onPress={() => handleGetDelivered()}>
              <TextButtonStatus>Entregues</TextButtonStatus>
            </ButtonStatus>
          </ListStatus>
        </TitleList>
        <DeliveryList
          data={deliveries}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Card
              onCancel={() => handleCancel(item.id)}
              data={item}
              navigation={navigation}
            />
          )}
        />
      </Container>
    </>
  );
}
