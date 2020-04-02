import { Platform } from 'react-native';
import styled from 'styled-components/native';
// import { RectButton } from 'react-native-gesture-handler';
import Button from '../../components/Button';

// export const Container = styled.KeyboardAvoidingView.attrs({
//   enabled: Platform.OS === 'ios',
//   behavior: 'padding',
// })`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   padding: 0 30px;
//   /* background: #fff; */
// `;

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
  /* margin-top: 50px; */
  width: 80%;
  /* height: 300px; */
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

// export const Text = styled.Text`
//   color: #fff;
//   font-weight: bold;
//   font-size: 16px;
//   text-align: center;
// `;

export const Info = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;
