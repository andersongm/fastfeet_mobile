import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Button from '../../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  background: #7d40e7;
  padding: 0 20px;
  height: 140px;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 50px;
  width: 350px;
  box-shadow: 1px 1px 2px #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  justify-content: space-between;
`;
export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  font-size: 16px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  height: 200px;
`;
export const SubmitButton = styled.TouchableOpacity`
  margin-top: 20px;
  background: #7d40e7;
  height: 46px;
  align-content: center;
  justify-content: center;
  border-radius: 4px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const ButtonContainer = styled.View``;
