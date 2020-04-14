import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #fff;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 60px;
`;

export const DeliverymanInfo = styled.View`
  width: 80%;
  padding: 30px;
`;

export const Label = styled.Text`
  margin-top: 10px;
  color: #888;
  font-size: 14px;
`;

export const SubmitButton = styled(Button)`
  width: 80%;
  background: #e95151;
`;

export const Info = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;
