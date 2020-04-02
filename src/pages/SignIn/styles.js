import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
  background: #fff;
`;
export const SubmitButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
`;

export const IdDeliveryMan = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-bottom: 10px;
  font-size: 16px;
  background: #fff;
  width: 100px;
  height: 46px;
  border-radius: 5px;
  padding: 0 10px;
  width: 100%;
`;
