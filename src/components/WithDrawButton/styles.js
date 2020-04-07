import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 70px;
  height: 45px;
  /* background: #f8f9fd; */
  /* border: 1px solid #eee; */
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 10px;
  text-align: center;
`;
