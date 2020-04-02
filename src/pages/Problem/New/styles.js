import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  background: #7d40e7;
  padding: 0 20px;
  height: 140px;
  /* justify-content: center; */
  align-items: center;
  /* padding: 0 30px; */
`;

// export const Container = styled.SafeAreaView`
//   background: #7d40e7;
//   height: 140px;
//   padding: 0 20px;
//   align-items: center;
//   justify-content: center;
// `;

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
export const SubmitButton = styled(RectButton)`
  margin-top: 20px;
  background: #7d40e7;
  height: 46px;
  align-content: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  /* background: #f90; */
`;
