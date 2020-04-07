import React, { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import Card from './Card';
import { signOut } from '~/store/modules/auth/actions';

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
  TextButtonStatus,
  ButtonStatus,
} from './styles';

export default function Deliveries({ navigation }) {
  const [deliveries, setDeliveries] = useState([]);
  const [current, setCurrent] = useState(true);
  const deliveryMan = useSelector((state) => state.user);
  // const status = useSelector((state) => state.deliveries.delivery_status);
  const dispatch = useDispatch();

  async function loadDeliveries(id, statusDelivery) {
    const response = await api.get(`deliverymans/${id}/deliveries`);

    console.log(response.data);

    let filtereds = null;

    if (statusDelivery) {
      filtereds = response.data.filter(
        (delivery) => delivery.status === statusDelivery
      );
    } else {
      filtereds = response.data.filter(
        (delivery) =>
          delivery.status === 'RETIRADA' || delivery.status === 'PENDENTE'
      );
    }

    setDeliveries(filtereds);
  }

  useEffect(() => {
    loadDeliveries(deliveryMan.profile.id);
    setCurrent(current);
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      loadDeliveries(deliveryMan.profile.id);
      setCurrent(current);
    });
  }, []);

  function handleLogout() {
    dispatch(signOut());
  }

  function handleGetPendings() {
    loadDeliveries(deliveryMan.profile.id);
    setCurrent(!current);
  }

  function handleGetDelivered() {
    loadDeliveries(deliveryMan.profile.id, 'ENTREGUE');
    setCurrent(!current);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <HeaderPage>
          <Avatar
            source={{
              uri:
                deliveryMan.profile?.url ||
                'https://api.adorable.io/avatars/285/abott@adorable.png',
            }}
          />
          <DeliveryManInfo>
            <Label>Bem vindo de volta,</Label>
            <Name>{deliveryMan.profile?.name}</Name>
          </DeliveryManInfo>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="exit-to-app" size={30} color="#e95151" />
          </TouchableOpacity>
        </HeaderPage>
        <TitleList>
          <Name>Entregas</Name>
          <ListStatus>
            <ButtonStatus onPress={() => handleGetPendings()}>
              <TextButtonStatus status={current}>Pendentes</TextButtonStatus>
            </ButtonStatus>
            <ButtonStatus onPress={() => handleGetDelivered()}>
              <TextButtonStatus status={!current}>Entregues</TextButtonStatus>
            </ButtonStatus>
          </ListStatus>
        </TitleList>
        <DeliveryList
          data={deliveries}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Card data={item} navigation={navigation} />
          )}
        />
      </Container>
    </>
  );
}
