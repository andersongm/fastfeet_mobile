import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Label } from './styles';

export default function WithDrawButton({ children, icon, colorIcon, ...rest }) {
  return (
    <Container {...rest}>
      <Icon name={icon} size={25} color={colorIcon} />
      <Label>{children}</Label>
    </Container>
  );
}
