import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Label } from './styles';

export default function OperationButton({
  children,
  icon,
  colorIcon,
  onPress,
  ...rest
}) {
  return (
    <Container onPress={onPress} {...rest}>
      <Icon name={icon} size={30} color={colorIcon} />
      <Label>{children}</Label>
    </Container>
  );
}

OperationButton.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  colorIcon: PropTypes.string,
  onPress: PropTypes.func,
};
