import React, { useState, useEffect } from 'react';
import { Alert, TouchableOpacity, StatusBar } from 'react-native';
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
  const [currentStatus, setCurrentStatus] = useState('pendente');
  const deliveryMan = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  // const status = useSelector((state) => state.deliveries.delivery_status);
  const [currentPage, setCurrenPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const endPage = Math.ceil(totalRecords / 5);

  const dispatch = useDispatch();

  // console.log('totalRecords:', totalRecords);

  async function loadDeliveries(id, statusDelivery = null, page = 1) {
    setLoading(true);
    const response = await api.get(`deliverymans/${id}/deliveries`, {
      params: {
        status: statusDelivery,
        page,
      },
    });
    // console.log('loadDeliveries:', page);
    const { count, rows } = response.data;
    setCurrenPage(page);
    setTotalRecords(count);

    // let filtereds = null;

    // if (statusDelivery) {
    //   filtereds = rows.filter(
    //     (delivery) => delivery.status === String(statusDelivery).toUpperCase()
    //   );
    // } else {
    //   filtereds = rows.filter(
    //     (delivery) =>
    //       delivery.status === 'RETIRADA' || delivery.status === 'PENDENTE'
    //   );
    // }

    setDeliveries(rows);
    // setDeliveries(filtereds);
    setLoading(false);
  }

  function loadMore() {
    if (currentPage >= endPage) {
      return;
    }
    setCurrenPage(currentPage);
    loadDeliveries(deliveryMan.profile.id, currentStatus, currentPage + 1);
  }

  function loadLess() {
    if (currentPage <= 1) {
      return;
    }
    setCurrenPage(currentPage);
    loadDeliveries(deliveryMan.profile.id, currentStatus, currentPage - 1);
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      loadDeliveries(deliveryMan.profile.id, 'pendente', 1);
      setCurrent(current);
    });
  }, []);

  function handleLogout() {
    dispatch(signOut());
  }

  function handleGetPendings() {
    setCurrentStatus('pendente');
    loadDeliveries(deliveryMan.profile.id, 'pendente');
    setCurrent(!current);
    Alert.alert(currentStatus);
  }

  function handleGetDelivered() {
    setCurrentStatus('entregue');
    loadDeliveries(deliveryMan.profile.id, 'entregue');
    setCurrent(!current);
    Alert.alert(currentStatus);
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
          onRefresh={() => loadLess()}
          refreshing={loading}
          renderItem={({ item }) => (
            <Card data={item} navigation={navigation} />
          )}
          onEndReachedThreshold={0.2}
          onEndReached={loadMore}
        />
      </Container>
    </>
  );
}
