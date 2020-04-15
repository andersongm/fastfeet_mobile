import styled from 'styled-components/native';
// import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import Button from '../Button';

export const Container = styled(TouchableOpacity)`
  width: 110px;
  height: 110px;
  background: #f8f9fd;
  border: 1px solid #eee;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 14px;
  text-align: center;
`;
