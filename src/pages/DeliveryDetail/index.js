import React from 'react';
import { StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import OperationButton from '../../components/OperationButton';

import {
  Container,
  DeliveryInfo,
  DeliveryStatus,
  DeliveryButtons,
  Header,
  LabelHeader,
  Info,
  InfoView,
  Label,
  Text,
  InfoDate,
} from './styles';

export default function DeliveryDetail({ navigation, route }) {
  const delivery = route.params.item;
  const startDate = delivery.start_date
    ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
    : '--/--/--';
  const endDate = delivery.end_date
    ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
    : '--/--/--';

  function handleNewProblem() {
    if (delivery.status === 'ENTREGUE') {
      Alert.alert('Encomenda já foi entregue!');
      return;
    }

    navigation.navigate('NewProblem', { id: delivery.id });
  }

  function handleViewProblem() {
    navigation.navigate('ViewProblem', { id: delivery.id });

    // navigation.navigate('ViewProblem');
  }

  function handleConfirmDelivery() {
    navigation.navigate('ConfirmDelivery');
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container>
        <DeliveryInfo>
          <Header>
            <Icon name="local-shipping" size={30} color="#7d40e7" />
            <LabelHeader>Informações da Entrega</LabelHeader>
          </Header>
          <InfoView>
            <Info>
              <Label>DESTINATARIO</Label>
              <Text>{delivery.recipient.name}</Text>
            </Info>
            <Info>
              <Label>ENDEREÇO DE ENTREGA</Label>
              <Text>{delivery.recipient.address}</Text>
            </Info>
            <Info>
              <Label>PRODUTO</Label>
              <Text>{delivery.product}</Text>
            </Info>
          </InfoView>
        </DeliveryInfo>
        <DeliveryStatus>
          <Header>
            <Icon name="event" size={30} color="#7d40e7" />
            <LabelHeader>Situação da Entrega</LabelHeader>
          </Header>
          <InfoView>
            <Info>
              <Label>STATUS</Label>
              <Text>{delivery.status}</Text>
            </Info>
            <InfoDate>
              <Info>
                <Label>DATA DE RETIRADA</Label>
                <Text>{startDate}</Text>
              </Info>
              <Info>
                <Label>DATA DE ENTREGA</Label>
                <Text>{endDate}</Text>
              </Info>
            </InfoDate>
          </InfoView>
        </DeliveryStatus>
        <DeliveryButtons>
          <OperationButton
            icon="highlight-off"
            colorIcon="#f00"
            navigation={navigation}
            onPress={handleNewProblem}
          >
            Informar Problema
          </OperationButton>
          <OperationButton
            icon="info-outline"
            colorIcon="#e7ba40"
            navigation={navigation}
            onPress={handleViewProblem}
          >
            Visualizar Problemas
          </OperationButton>
          <OperationButton
            icon="check-circle"
            colorIcon="#7d40e7"
            onPress={handleConfirmDelivery}
          >
            Confirmar Entrega
          </OperationButton>
        </DeliveryButtons>
      </Container>
    </>
  );
}
