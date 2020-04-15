import React, { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import OperationButton from '../../components/OperationButton';
import WithDrawButton from '../../components/WithDrawButton';
import api from '../../services/api';

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
  ContainerWithDraw,
  // LabelWithDraw,
} from './styles';

export default function DeliveryDetail({ navigation, route }) {
  let messageError = '';

  const [delivery, setDelivery] = useState([]);
  const { id, deliveryman_id } = route.params.item;

  async function loadDelivery(idDelivery) {
    const response = await api.get(
      `/deliverymans/${deliveryman_id}/deliveries/`,
      {
        params: {
          id_delivery: idDelivery,
        },
      }
    );
    setDelivery(response.data.rows[0]);
  }

  const startDate = delivery?.start_date
    ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
    : '--/--/--';
  const endDate = delivery?.end_date
    ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
    : '--/--/--';

  function handleNewProblem() {
    if (delivery.status === 'PENDENTE' && delivery.status !== 'RETIRADA') {
      messageError =
        'Encomenda deve ser retirada primeiro para registrar um problema!';
    } else if (delivery.status === 'ENTREGUE') {
      messageError = 'Encomenda já foi entregue ao destinatário!';
    }

    if (messageError) {
      Alert.alert(
        'FastFeet',
        messageError,
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
      return;
    }

    navigation.navigate('NewProblem', { id: delivery.id });
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      loadDelivery(id);
    });
  }, []);

  function handleViewProblem() {
    navigation.navigate('ViewProblem', {
      id: delivery.id,
      product: delivery.product,
    });
  }

  function handleConfirmDelivery() {
    if (delivery.status === 'PENDENTE') {
      messageError =
        'Encomenda deve ser retirada primeiro para confirmar entrega!';
    } else if (delivery.status === 'ENTREGUE') {
      messageError = 'Encomenda já foi entregue ao destinatário!';
    }

    if (messageError) {
      Alert.alert(
        'FastFeet',
        messageError,
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
      return;
    }

    navigation.navigate('ConfirmDelivery', { id: delivery.id });
  }

  async function handleWithDraw(idDelivery) {
    try {
      const response = await api.put(`/deliveries/${idDelivery}/start`, {
        deliveryman_id: delivery.deliveryman_id,
      });

      if (response.data.error) {
        Alert.alert('Falha ao Retirar Encomenda!', response.data.error);
        return;
      }

      Alert.alert(
        'FastFeet',
        'Encomenda Retirada!',
        [
          {
            text: 'OK',
            onPress: () => loadDelivery(id),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      Alert.alert('Falha ao Retirar Encomenda!', error.response.data.error);
    }
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
              <Text>{delivery.recipient?.name}</Text>
            </Info>
            <Info>
              <Label>ENDEREÇO DE ENTREGA</Label>
              <Text>{delivery.recipient?.address}</Text>
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
            <ContainerWithDraw status={delivery.status === 'PENDENTE'}>
              <WithDrawButton
                icon="thumb-up"
                colorIcon="#008000"
                navigation={navigation}
                onPress={() => handleWithDraw(delivery.id)}
              >
                Retirar Entrega
              </WithDrawButton>
            </ContainerWithDraw>
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
            label="Informar Problema"
          />
          <OperationButton
            icon="info-outline"
            colorIcon="#e7ba40"
            navigation={navigation}
            onPress={handleViewProblem}
            label="Visualizar Problemas"
          />
          <OperationButton
            icon="check-circle"
            colorIcon="#7d40e7"
            onPress={handleConfirmDelivery}
            label="Confirmar Entrega"
          />
        </DeliveryButtons>
      </Container>
    </>
  );
}

DeliveryDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
