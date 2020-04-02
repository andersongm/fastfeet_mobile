import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Label } from './styles';

export default function OperationButton({
  children,
  icon,
  colorIcon,
  ...rest
}) {
  return (
    <Container {...rest}>
      <Icon name={icon} size={30} color={colorIcon} />
      <Label>{children}</Label>
    </Container>
  );
}
