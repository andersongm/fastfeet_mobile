import React from 'react';
import PropTypes from 'prop-types';
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

WithDrawButton.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  colorIcon: PropTypes.string,
  onPress: PropTypes.func,
};
