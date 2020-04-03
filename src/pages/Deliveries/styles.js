import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Button from '../../components/Button';

// export const Container = styled.KeyboardAvoidingView.attrs({
//   enabled: Platform.OS === 'ios',
//   behavior: 'padding',
// })`
//   flex: 1;
//   /* justify-content: center;
//   align-items: center;
//   padding: 0 30px; */
// `;

export const Container = styled.SafeAreaView`
  /* flex: 1;
  background: #fff; */
  background: #fff;
`;

export const HeaderPage = styled.View`
  flex-direction: row;
  margin-top: 40px;
  margin-left: 30px;
  margin-right: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const DeliveryManInfo = styled.View`
  flex: 1;
  /* background: #f90; */
  padding: 20px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;

export const DeliveryList = styled.FlatList.attrs({
  showsVerticalScroolIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  /* height: 450px; */
  align-self: auto;
`;

export const TitleList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px 0;
`;

export const ListStatus = styled.View`
  flex-direction: row;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Status = styled.Button`
  color: #7d40e7;
`;

export const ButtonStatus = styled(RectButton)`
  padding: 0 5px;
`;

export const TextButtonStatus = styled.Text`
  /* color: #7d40e7; */
  color: ${(props) => (props.status ? '#e95151' : '#7d40e7')};
  font-weight: bold;
  font-size: 12px;
`;
