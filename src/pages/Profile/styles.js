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

export const Info = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 20px;
  background: #e95151;
  height: 46px;
  width: 80%;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
