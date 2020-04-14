import React from 'react';
import { Text, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions } from '@react-navigation/native';
import { parseISO, format } from 'date-fns';
import Timeline from '~/components/Timeline';

import {
  Container,
  HeaderCard,
  FooterCard,
  Product,
  FooterView,
  Label,
  Info,
  ButtonShowDetails,
  TextButtonShowDetails,
} from './styles';

export default function Card({ data, navigation }) {
  function handleDetail(dataDelivery) {
    navigation.navigate('DeliveryDetail', {
      item: dataDelivery,
    });
  }

  const dateFormatted = format(parseISO(data.createdAt), 'dd/MM/yyyy');

  return (
    <Container>
      <HeaderCard>
        <Icon name="local-shipping" size={30} color="#7d40e7" />
        <Product>{data.product}</Product>
      </HeaderCard>
      <Timeline status={data.status} />
      <FooterCard>
        <FooterView>
          <Label>Data</Label>
          <Info>{dateFormatted}</Info>
        </FooterView>
        <FooterView>
          <Label>Cidade</Label>
          <Info>{data.recipient.city}</Info>
        </FooterView>
        <FooterView>
          <ButtonShowDetails onPress={() => handleDetail(data)}>
            <TextButtonShowDetails>Ver detalhes</TextButtonShowDetails>
          </ButtonShowDetails>
        </FooterView>
      </FooterCard>
    </Container>
  );
}
