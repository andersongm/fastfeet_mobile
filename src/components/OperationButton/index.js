import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Label } from './styles';

export default function OperationButton({
  label,
  icon,
  colorIcon,
  onPress,
  ...rest
}) {
  return (
    <Container onPress={onPress} {...rest}>
      <Icon name={icon} size={30} color={colorIcon} />
      <Label>{label}</Label>
    </Container>
  );
}

OperationButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  colorIcon: PropTypes.string,
  onPress: PropTypes.func,
};
